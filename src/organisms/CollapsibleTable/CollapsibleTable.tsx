import throttle from 'lodash/throttle';
import React, { Component, ReactNode } from 'react';

import { StackedCard, Table, TableConfig, TableData } from 'molecules';

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

type Props = CollapsibleTableData;

interface State {
  mode: CollapsibleTableModes;
}

export const transformTableToCards = ({
  head,
  body,
  config,
}: CollapsibleTableData): StackedCardData[] => {
  const { primaryColumn } = config;
  const primaryColumnIndex = head.indexOf(primaryColumn);
  const cards = body.map((row, rowIndex) => {
    return row.reduce(
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
  });

  return cards;
};

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
    const { mode } = this.state;

    return mode === CollapsibleTableModes.Mobile ? (
      transformTableToCards(this.props).map((cardData, index) => (
        <StackedCard key={index} {...cardData} />
      ))
    ) : (
      <Table {...this.props} />
    );
  }

  private checkWindowSize = () => {
    const { mode } = this.state;
    const wasMobile = mode === CollapsibleTableModes.Mobile;
    const isMobile = window.matchMedia('(max-width: 450px)').matches;

    if (wasMobile && !isMobile) {
      this.setState({ mode: CollapsibleTableModes.Desktop });
    } else if (!wasMobile && isMobile) {
      this.setState({ mode: CollapsibleTableModes.Mobile });
    }
  };
}

const CollapsibleTable = AbstractCollapsibleTable;

export default CollapsibleTable;
