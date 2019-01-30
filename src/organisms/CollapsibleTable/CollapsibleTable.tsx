import throttle from 'lodash.throttle';
import React, {
  Component,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
} from 'react';
import { StyledComponentClass } from 'styled-components';

import { Button, Icon } from 'src/atoms';
import {
  ActionPanel,
  StackedCard,
  StackedCardData,
  Table,
  TableConfig,
  TableData,
} from 'src/molecules';
import styled from 'src/styled-components';
import Theme, { scale } from 'src/Theme';
import Typography from 'src/Typography';

export enum CollapsibleTableModes {
  Mobile,
  Desktop,
}

export interface CollapsibleTableConfig extends TableConfig {
  primaryColumn: string;
  iconColumns?: string[];
}

export interface CollapsibleTableData extends TableData {
  config: CollapsibleTableConfig;
}

interface CollapsedGroups {
  [title: string]: boolean;
}

type StyledHTMLElement = StyledComponentClass<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
  Theme
>;

interface Flippable {
  isFlipped?: boolean;
}

interface Props extends CollapsibleTableData {
  breakpoint: number;
  limit: number;
}

interface State {
  mode: CollapsibleTableModes;
  collapsedGroups: CollapsedGroups;
  viewAll: boolean;
}

export const transformRowToCards = (
  row: ReactNode[],
  head: string[],
  primaryColumnIndex: number,
  iconColumns: string[] = [],
): StackedCardData =>
  row.reduce(
    (prev: StackedCardData, next, index) => {
      const label = head[index];

      if (index === primaryColumnIndex) {
        prev.heading = next;
      } else if (iconColumns.includes(label)) {
        prev.icons!.push(next);
      } else {
        prev.entries.push([label, next]);
      }

      return prev;
    },
    {
      heading: '',
      entries: [],
      icons: [],
    },
  );

export const transformTableToCards = (
  { head, body, groups = [], config }: CollapsibleTableData,
  collapsedGroups: CollapsedGroups = {},
): (StackedCardData | string)[] => {
  const { primaryColumn, iconColumns } = config;
  const primaryColumnIndex = head.indexOf(primaryColumn);
  const cards: (StackedCardData | string)[] = body.map(row =>
    transformRowToCards(row, head, primaryColumnIndex, iconColumns),
  );

  groups.forEach(({ title, entries }) =>
    cards.push(
      title,
      ...(collapsedGroups[title]
        ? []
        : entries.map(row =>
            transformRowToCards(row, head, primaryColumnIndex, iconColumns),
          )),
    ),
  );

  return cards;
};

export const screenIsMobileSized = (breakpoint: number): boolean =>
  window.matchMedia(`(max-width: ${breakpoint}px)`).matches;

const GroupHeading = styled(Typography)`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0.9375rem;
  border-bottom: 0.0625rem solid #dde3ee;
  background: ${props => props.theme.tableHeadBackground};
  text-transform: uppercase;
  font-size: ${scale(1)};
  cursor: pointer;
` as StyledHTMLElement;

GroupHeading.defaultProps = {
  as: 'section',
  role: 'button',
};

const GroupHeadingCaret = styled(Icon)<Flippable>`
  margin-left: 0.5em;
  ${props =>
    props.isFlipped &&
    `
    svg {
      transform: rotateX(180deg)
    }
  `};
`;

export const ActionPanelButton = styled(Button)`
  color: ${props => props.theme.linkStandalone};
`;

ActionPanelButton.defaultProps = { basic: true };

export class CollapsibleTable extends Component<Props, State> {
  public static defaultProps = {
    head: [],
    body: [],
    groups: [],
    config: {},
    breakpoint: 450,
    limit: Infinity,
  };

  public constructor(props: Props) {
    super(props);

    this.state = {
      mode: screenIsMobileSized(props.breakpoint)
        ? CollapsibleTableModes.Mobile
        : CollapsibleTableModes.Desktop,
      collapsedGroups: {},
      viewAll: false,
    };

    this.checkWindowSize = throttle(this.checkWindowSize, 200);
  }

  public viewAll = () => this.setState({ viewAll: true });

  public componentDidMount() {
    window.addEventListener('resize', this.checkWindowSize);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.checkWindowSize);
  }

  public render() {
    const { limit } = this.props;
    const { collapsedGroups, mode, viewAll } = this.state;

    const cards = transformTableToCards(this.props, collapsedGroups);

    return mode === CollapsibleTableModes.Mobile ? (
      viewAll || cards.length <= limit ? (
        this.renderCards(cards)
      ) : (
        <ActionPanel
          action={
            <ActionPanelButton onClick={this.viewAll}>
              View All
            </ActionPanelButton>
          }
          noPadding={true}
        >
          {this.renderCards(cards.slice(0, limit))}
        </ActionPanel>
      )
    ) : (
      <Table {...this.props} />
    );
  }

  public renderCards(cards: (string | StackedCardData)[]) {
    const { collapsedGroups } = this.state;

    return cards.map(
      (cardData, index) =>
        typeof cardData === 'string' ? (
          // The element being iterated on is a group heading.
          <GroupHeading
            key={index}
            onClick={this.toggleCollapseGroup.bind(this, cardData)}
          >
            {cardData}
            <GroupHeadingCaret
              icon="navDownCaret"
              isFlipped={collapsedGroups[cardData]}
            />
          </GroupHeading>
        ) : (
          // The element being iterated on is table data.
          <StackedCard key={index} {...cardData} />
        ),
    );
  }

  private readonly checkWindowSize = () => {
    const { breakpoint } = this.props;
    const { mode } = this.state;
    const wasMobile = mode === CollapsibleTableModes.Mobile;
    const isMobile = screenIsMobileSized(breakpoint);

    if (wasMobile && !isMobile) {
      // Mobile-to-Desktop
      this.setState({
        mode: CollapsibleTableModes.Desktop,
        collapsedGroups: {},
      });
    }

    if (!wasMobile && isMobile) {
      // Desktop-to-Mobile
      this.setState({
        mode: CollapsibleTableModes.Mobile,
        collapsedGroups: {},
      });
    }
  };

  private readonly toggleCollapseGroup = (title: string) =>
    this.setState((prevState: State) => ({
      collapsedGroups: {
        ...prevState.collapsedGroups,
        [title]: !prevState.collapsedGroups[title],
      },
    }));
}

export default CollapsibleTable;
