import Downshift, { DownshiftInterface, DownshiftProps } from 'downshift';
import React, { Component, ReactNode } from 'react';
import Input from '../../atoms/Input';
import Text from '../../atoms/Text';
import List, { ListProps } from '../../molecules/List';
import styled from '../../styled-components';

const Item = styled.div<{ highlighted: boolean; selected: boolean }>`
  background-color: ${props => props.highlighted && props.theme.primary};
  color: ${props => props.highlighted && 'white'};
  font-weight: ${props => props.selected && 'bold'};
`;

// Gives a ref to a List element for Downshift
class ListWrapper extends Component<ListProps> {
  public render() {
    return <List {...this.props} />;
  }
}

const StringDownshift = Downshift as DownshiftInterface<string>;

export const ComboBox = ({
  items,
  label,
  ...downshiftProps
}: { items: string[]; label: ReactNode } & DownshiftProps<string>) => (
  <StringDownshift {...downshiftProps}>
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
        <Text as="label" {...getLabelProps()}>
          {label}
        </Text>
        <br />
        <Input {...getInputProps()} />
        {isOpen && (
          <ListWrapper basic={true} {...getMenuProps()}>
            {items
              .filter(item => !inputValue || item.includes(inputValue))
              .map((item, index) => (
                <Item
                  highlighted={highlightedIndex === index}
                  selected={selectedItem === item}
                  {...getItemProps({ key: item, index, item })}
                >
                  {item}
                </Item>
              ))}
          </ListWrapper>
        )}
      </div>
    )}
  </StringDownshift>
);
export default ComboBox;
