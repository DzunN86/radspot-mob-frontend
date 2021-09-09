import AsyncStorage from '@react-native-async-storage/async-storage';
import {Body, Container, Content, Left, ListItem} from 'native-base';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome5';
import {Head} from '../components';

const OthersMenu = ({navigation}) => {
  const keluar = () => {
    AsyncStorage.removeItem('token').then(() => {
      navigation.reset({index: 0, routes: [{name: 'Login'}]});
    });
  };
  return (
    <Container>
      <Head title="More" onBack={() => navigation.goBack()} />

      <Content>
        <ListItem icon>
          <Left>
            <FaIcon name="server" size={20} color="#3A6FE1" />
          </Left>
          <Body>
            <Text>NAS</Text>
          </Body>
        </ListItem>
        <ListItem icon>
          <Left>
            <FaIcon name="user-shield" size={20} color="#428E40" />
          </Left>
          <Body>
            <Text>Operators</Text>
          </Body>
        </ListItem>
        <ListItem icon>
          <Left>
            <FaIcon name="bug" size={20} color="#A92D5F" />
          </Left>
          <Body>
            <Text>Error Report</Text>
          </Body>
        </ListItem>
        <ListItem icon onPress={keluar}>
          <Left>
            <FaIcon name="sign-out-alt" size={20} color="#CD2B3A" />
          </Left>
          <Body>
            <Text>Logout</Text>
          </Body>
        </ListItem>
      </Content>
    </Container>
  );
};

export default OthersMenu;

const styles = StyleSheet.create({});
