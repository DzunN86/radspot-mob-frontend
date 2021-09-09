import {
  Body,
  Button,
  Container,
  Content,
  Icon,
  List,
  ListItem,
  Right,
  Text,
} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Head} from '../../components';

const Users = ({navigation}) => {
  return (
    <Container>
      <Head title="Users" onBack={() => navigation.goBack()}>
        <Right>
          <Button transparent>
            <Icon name="menu" style={{color: 'white'}} />
          </Button>
        </Right>
      </Head>
      <Content>
        <List>
          <ListItem>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>Doing what</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default Users;

const styles = StyleSheet.create({});
