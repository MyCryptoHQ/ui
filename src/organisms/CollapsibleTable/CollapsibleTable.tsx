import throttle from 'lodash/throttle';
import React, { Component, ReactNode } from 'react';

import styled from '_styled-components';
import { Icon } from 'atoms';
import {
  StackedCard,
  StackedCardData,
  Table,
  TableConfig,
  TableData,
} from 'molecules';
import { scale } from 'Theme';
import Typography from 'Typography';

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

interface Props extends CollapsibleTableData {
  breakpoint: number;
}

interface State {
  mode: CollapsibleTableModes;
  collapsedGroups: CollapsedGroups;
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
    } as StackedCardData,
  );

export const transformTableToCards = (
  { head, body, groups = [], config }: CollapsibleTableData,
  collapsedGroups: CollapsedGroups,
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
`;

GroupHeading.defaultProps = {
  role: 'button',
};

const GroupHeadingCaret = styled(Icon)`
  margin-left: 0.5em;
`;

export class AbstractCollapsibleTable extends Component<Props, State> {
  public static defaultProps = {
    head: [],
    body: [],
    groups: [],
    config: {},
    breakpoint: 450,
  };

  public State = {
    mode: CollapsibleTableModes.Desktop,
  };

  public constructor(props: Props) {
    super(props);

    const isMobile = window.matchMedia(`(max-width: ${props.breakpoint}px)`)
      .matches;

    this.state = {
      mode: isMobile
        ? CollapsibleTableModes.Mobile
        : CollapsibleTableModes.Desktop,
      collapsedGroups: {},
    };

    this.checkWindowSize = throttle(this.checkWindowSize, 200);
  }

  public componentDidMount() {
    window.addEventListener('resize', this.checkWindowSize);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.checkWindowSize);
  }

  public render() {
    const { mode, collapsedGroups } = this.state;

    return mode === CollapsibleTableModes.Mobile ? (
      transformTableToCards(this.props, collapsedGroups).map(
        (cardData, index) =>
          typeof cardData === 'string' ? (
            // The element being iterated on is a group heading.
            <GroupHeading
              onClick={this.toggleCollapseGroup.bind(this, cardData)}
            >
              {cardData}
              <GroupHeadingCaret
                icon={collapsedGroups[cardData] ? 'caret-up' : 'caret-down'}
              />
            </GroupHeading>
          ) : (
            // The element being iterated on is table data.
            <StackedCard key={index} {...cardData} />
          ),
      )
    ) : (
      <Table {...this.props} />
    );
  }

  private checkWindowSize = () => {
    const { breakpoint } = this.props;
    const { mode } = this.state;
    const wasMobile = mode === CollapsibleTableModes.Mobile;
    const isMobile = window.matchMedia(`(max-width: ${breakpoint}px)`).matches;

    if (wasMobile && !isMobile) {
      // Mobile-to-Desktop
      this.setState({
        mode: CollapsibleTableModes.Desktop,
        collapsedGroups: {},
      });
    } else if (!wasMobile && isMobile) {
      // Desktop-to-Mobile
      this.setState({
        mode: CollapsibleTableModes.Mobile,
        collapsedGroups: {},
      });
    }
  };

  private toggleCollapseGroup = (title: string) =>
    this.setState((prevState: State) => ({
      collapsedGroups: {
        ...prevState.collapsedGroups,
        [title]: !prevState.collapsedGroups[title],
      },
    }));
}

const CollapsibleTable = AbstractCollapsibleTable;

export default CollapsibleTable;
