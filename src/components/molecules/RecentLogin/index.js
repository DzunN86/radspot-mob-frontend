import {Body, ListItem, Right, Text} from 'native-base';
import React from 'react';

const RecentLogin = ({username, netArea, time}) => {
  return (
    <ListItem>
      <Body>
        <Text>{username}</Text>
        <Text note>{netArea}</Text>
      </Body>
      <Right>
        <Text note>{time}</Text>
      </Right>
    </ListItem>
  );
};

export default RecentLogin;
