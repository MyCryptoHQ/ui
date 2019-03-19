import React, { ChangeEvent, Component, FormEvent } from 'react';
import Button from 'src/atoms/Button/Button';
import { borderRadius, scale } from 'src/Theme';
import Typography from 'src/Typography';
import styled from 'styled-components';

const ColoredIconButton = styled(Button)`
  color: #b5bfc7;
`;

const SubmitButton = styled(ColoredIconButton)`
  color: #1eb8e7;
  left: -${scale(2)};
  position: relative;
`;
SubmitButton.defaultProps = { type: 'submit', icon: 'exit' };

const Title = styled(Typography)<{ clickable?: boolean }>`
  display: inline;
  font-size: ${scale(0.5)};
  ${props => props.clickable && `cursor: pointer;`};
`;
Title.defaultProps = { as: 'div' };

const TitleInput = styled.input`
  background: ${props => props.theme.background};
  border: 0.125em solid ${props => props.theme.controlBorder};
  border-radius: ${borderRadius};
  color: ${props => props.theme.text};
  font: ${scale(0.5)} Lato, sans-serif;
  padding: 0;
`;

const Content = styled.div`
  padding-left: ${scale(0)};
`;

interface NonEditableProps {
  title: string;
  editable: false;
}

interface EditableProps {
  title: string;
  editable: true;
  onSubmit(title: string): void;
}

export type EditableAddressProps = NonEditableProps | EditableProps;

export interface EditableAddressState {
  title: string;
  isTitleEditable: boolean;
}

const TITLE_PLACEHOLDER = 'John Doe';

export class EditableAddress extends Component<
  EditableAddressProps,
  EditableAddressState
> {
  public static defaultProps: EditableAddressProps = {
    title: TITLE_PLACEHOLDER,
    editable: false,
  };
  public state: EditableAddressState;

  constructor(props: EditableAddressProps) {
    super(props);

    this.state = {
      isTitleEditable: false,
      title: props.title,
    };
  }

  public handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!this.props.editable) {
      throw Error('HandleSubmit should only be called on an editable address');
    }

    const { title } = this.state;

    this.setState({ isTitleEditable: false });

    const { onSubmit } = this.props;

    onSubmit(title);
  };

  public enableTitleEditing = () => {
    this.setState({ isTitleEditable: true });
  };

  public handleTitleInput = (event: ChangeEvent<HTMLInputElement>) =>
    this.setState({ title: event.target.value });

  public renderTitleInput() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TitleInput
          onClick={this.enableTitleEditing}
          value={this.state.title}
          onChange={this.handleTitleInput}
          autoFocus={true} // eslint-disable-line jsx-a11y/no-autofocus
        />
        <SubmitButton />
      </form>
    );
  }

  public renderTitle() {
    const { title } = this.state;
    return (
      <>
        <Title onClick={this.enableTitleEditing} clickable={true}>
          {title}
        </Title>
        <ColoredIconButton icon="create" onClick={this.enableTitleEditing} />
      </>
    );
  }

  public nonEditableAddress() {
    return <Title>{this.props.title}</Title>;
  }

  public editableAddress() {
    const { isTitleEditable } = this.state;

    return (
      <Content>
        {isTitleEditable ? this.renderTitleInput() : this.renderTitle()}
      </Content>
    );
  }

  public render() {
    const { editable } = this.props;
    return editable ? this.editableAddress() : this.nonEditableAddress();
  }
}

export default EditableAddress;
