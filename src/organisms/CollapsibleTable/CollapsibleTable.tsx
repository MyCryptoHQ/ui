import throttle from 'lodash/throttle';
import React, { Component, ReactNode } from 'react';

import styled from '_styled-components';
import { Icon } from 'atoms';
import { StackedCard, Table, TableConfig, TableData } from 'molecules';
import { scale } from 'Theme';
import Typography from 'Typography';

export enum CollapsibleTableModes {
  Mobile,
  Desktop,
}

export interface CollapsibleTableConfig extends TableConfig {
  primaryColumn: string;
}

export interface CollapsibleTableData extends TableData {
  config: CollapsibleTableConfig;
}

export interface StackedCardData {
  heading: ReactNode;
  entries: (string | ReactNode)[][];
}

interface CollapsedGroups {
  [title: string]: boolean;
}

type Props = CollapsibleTableData;

interface State {
  mode: CollapsibleTableModes;
  collapsedGroups: CollapsedGroups;
}

export const transformRowToCards = (
  row: ReactNode[],
  head: string[],
  primaryColumnIndex: number,
): StackedCardData =>
  row.reduce(
    (prev: StackedCardData, next, index) => {
      if (index === primaryColumnIndex) {
        prev.heading = next;
      } else {
        prev.entries.push([head[index], next]);
      }

      return prev;
    },
    {
      heading: '',
      entries: [],
    } as StackedCardData,
  );

export const transformTableToCards = (
  { head, body, groups = [], config }: CollapsibleTableData,
  collapsedGroups: CollapsedGroups,
): (StackedCardData | string)[] => {
  const { primaryColumn } = config;
  const primaryColumnIndex = head.indexOf(primaryColumn);
  const cards: (StackedCardData | string)[] = body.map(row =>
    transformRowToCards(row, head, primaryColumnIndex),
  );

  groups.forEach(({ title, entries }) =>
    cards.push(
      title,
      ...(collapsedGroups[title]
        ? []
        : entries.map(row =>
            transformRowToCards(row, head, primaryColumnIndex),
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
  public State = {
    mode: CollapsibleTableModes.Desktop,
  };

  public constructor(props: Props) {
    super(props);

    const isMobile = window.matchMedia('(max-width: 450px)').matches;

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
            <GroupHeading
              onClick={this.toggleCollapseGroup.bind(this, cardData)}
            >
              {cardData}
              <GroupHeadingCaret
                icon={collapsedGroups[cardData] ? 'caret-up' : 'caret-down'}
              />
            </GroupHeading>
          ) : (
            <StackedCard key={index} {...cardData} />
          ),
      )
    ) : (
      <Table {...this.props} />
    );
  }

  private checkWindowSize = () => {
    const { mode } = this.state;
    const wasMobile = mode === CollapsibleTableModes.Mobile;
    const isMobile = window.matchMedia('(max-width: 450px)').matches;

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
