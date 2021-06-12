import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Avatar} from '../../assets';

const Users = () => {
  return (
    <View>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>Radspot</Text>
          <Text style={styles.desc}>User Hotspot Management With Radius</Text>
        </View>
        <Image source={Avatar} style={styles.profile} />
      </View>
      <Text>Users Page</Text>
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: '#A92D5F',
  },
  appName: { fontSize: 22, fontFamily: 'Poppins-Medium', color: '#FFFFFF' },
  desc: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#DBDBDB'},
  profile: {width: 50, height: 50, borderRadius: 8},
});
