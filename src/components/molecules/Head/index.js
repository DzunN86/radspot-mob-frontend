import {Body, Button, Header, Icon, Left, Right, Title} from 'native-base';
import React from 'react';

const Head = (props) => {
  return (
    <Header
      style={{backgroundColor: '#A92D5F'}}
      androidStatusBarColor="#A92D5F">
      <Left>
        {props.onBack && (
          <Button transparent onPress={props.onBack}>
            <Icon name="arrow-back" />
          </Button>
        )}
      </Left>
      <Body>
        <Title>{props.title}</Title>
      </Body>
      <Right>{props.children}</Right>
    </Header>
  );
};

export default Head;
