import React, { ChangeEvent, Component, FormEvent } from 'react';

import styled from '_styled-components';
import { Button, Identicon, Input } from 'atoms';
import { Copyable } from 'molecules';
import { scale } from 'Theme';
import Typography from 'Typography';

const Flex = styled.div`
  display: flex;
`;

const Content = styled.div`
  padding-left: ${scale(0)};
`;

const Title = styled(Typography)<{ clickable: boolean }>`
  display: inline;
  font-size: ${scale(1)};
  ${props => props.clickable && `cursor: pointer;`};
`;

Title.defaultProps = { as: 'div' };

const TitleInput = styled(Input)`
  font-size: ${scale(1)};
  padding: 0;
`;

const ColoredIconButton = styled(Button)`
  color: #b5bfc7;
`;

interface Props {
  address: string;
  title: string;
  onSubmit?(title: string): void;
  truncate(text: string): string;
}

interface State {
  editing: boolean;
  title: string;
}

export class Address extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = { editing: false, title: props.title };
  }

  public handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    const { onSubmit } = this.props;

    if (onSubmit) {
      this.setState({ title: value });
    }
  };

  public handleEditing = () => {
    const { onSubmit } = this.props;

    if (onSubmit) {
      this.setState({ editing: true });
    }
  };

  public handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { title } = this.state;

    if (onSubmit) {
      this.setState({ editing: false });
      onSubmit(title);
    }
  };

  public render() {
    const { address, onSubmit, truncate } = this.props;
    const { editing, title } = this.state;

    return (
      <Flex>
        <Identicon address={address} />

        <Content>
          {editing ? (
            <form onSubmit={this.handleSubmit}>
              <TitleInput
                value={title}
                onChange={this.handleChange}
                autoFocus={true} // eslint-disable-line jsx-a11y/no-autofocus
              />{' '}
              <ColoredIconButton type="submit" icon="check" />
            </form>
          ) : (
            <>
              <Title
                onClick={onSubmit && this.handleEditing}
                clickable={Boolean(onSubmit)}
              >
                {title}
              </Title>
              {onSubmit && (
                <>
                  {' '}
                  <ColoredIconButton
                    icon="pencil-alt"
                    onClick={onSubmit && this.handleEditing}
                  />
                </>
              )}
            </>
          )}
          <Copyable text={address} truncate={truncate} />
        </Content>
      </Flex>
    );
  }
}

export default Address;
