import { storiesOf } from '@storybook/react';
import faker from 'faker';
import React from 'react';

import { Button } from 'src/atoms';
import { List } from 'src/molecules';
import { Drawer } from 'src/organisms';

import Typography from 'src/Typography';

storiesOf('Organisms', module).add('Drawer', () => <DrawerStory />);

interface DrawerState {
  visible?: boolean;
}

class DrawerStory extends React.Component<{}, DrawerState> {
  public state: Readonly<DrawerState> = { visible: false };

  public handleClick = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  };
  public render() {
    const { visible } = this.state;
    return (
      <>
        <Button onClick={this.handleClick} />
        <Drawer
          handleClose={this.handleClick}
          visible={visible}
          headerTitle="Title"
          headerText="MyCrypto allows you to interact with your funds on many different networks. Choose one below to get started!"
          footer={<List group={true}>{['Foo', 'Bar', 'Baz']}</List>}
        >
          <Typography>{faker.lorem.paragraphs()}</Typography>
        </Drawer>
      </>
    );
  }
}
