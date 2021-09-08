import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Avatar, ImageHeader} from '../../assets';
import {DashCard, Gap} from '../../components';

const Users = () => {
  return (
    <ImageBackground
      source={ImageHeader}
      style={{width: '100%', height: '100%', backgroundColor: '#A92D5F'}}>
      <View>
        <View style={styles.profileContainer}>
          <View>
            <Text style={styles.appName}>Radspot</Text>
            <Text style={styles.desc}>User Hotspot Management</Text>
          </View>
          <Image source={Avatar} style={styles.profile} />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.dashCard}>
            <Gap width={24} />
            <DashCard
              icon={'users'}
              color={'#009046'}
              bgcolor={'#CCFFE5'}
              label={'Users'}
            />
            <DashCard
              icon={'layer-group'}
              color={'#FF6800'}
              bgcolor={'#FFE1CC'}
              label={'Groups'}
            />
            <DashCard
              icon={'server'}
              color={'#0071E0'}
              bgcolor={'#CCE6FF'}
              label={'Nas'}
            />
            <DashCard
              icon={'user-shield'}
              color={'#E30A29'}
              bgcolor={'#FDCED5'}
              label={'Operators'}
            />
          </View>
        </ScrollView>
        <View
        style={{
          paddingTop: 25,
          paddingHorizontal: 30,
          backgroundColor: '#F6F6F6',
          flex: 1,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          marginTop: 35,
        }}>
          <Text>Hello</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {backgroundColor: '#A92D5F'},
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    // backgroundColor: '#A92D5F',
  },
  appName: {fontSize: 22, fontFamily: 'Poppins-Medium', color: '#FFFFFF'},
  desc: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#DBDBDB'},
  profile: {width: 47, height: 47, borderRadius: 25},
  dashCard: {
    flexDirection: 'row',
    marginVertical: 12,
    marginTop: 25,
  },
});
