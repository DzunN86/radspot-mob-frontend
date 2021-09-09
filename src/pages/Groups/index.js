import {Container} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Head} from '../../components';

const Groups = ({navigation}) => {
  return (
    <Container>
      <Head title="Groups" onBack={() => navigation.goBack()} />
    </Container>
  );
};

export default Groups;

const styles = StyleSheet.create({});
