import moment from 'moment';
import {List} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import {Avatar, ImageHeader} from '../../assets';
import {DashCard, Gap, RecentLogin} from '../../components';
import {getHomeTotal, getRecentLoggedIn} from '../../redux/action';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  const {total} = useSelector((state) => state.homeReducer);
  const {recentLoggedIn} = useSelector((state) => state.homeReducer);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getHomeTotal());
    dispatch(getRecentLoggedIn());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getRecentLoggedIn());
    setRefreshing(false);
  };

  return (
    <ImageBackground
      source={ImageHeader}
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#A92D5F',
        flex: 1,
      }}>
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
              total={total.user}
            />
            <DashCard
              icon={'layer-group'}
              color={'#FF6800'}
              bgcolor={'#FFE1CC'}
              label={'Groups'}
              total={total.group}
            />
            <DashCard
              icon={'server'}
              color={'#0071E0'}
              bgcolor={'#CCE6FF'}
              label={'Nas'}
              total={total.nas}
            />
            <DashCard
              icon={'user-shield'}
              color={'#E30A29'}
              bgcolor={'#FDCED5'}
              label={'Operators'}
              total={total.operator}
            />
          </View>
        </ScrollView>
        <View style={styles.ops}>
          <View style={styles.recentContainer}>
            <View>
              <Text style={styles.title}>Login Terbaru</Text>
            </View>
            <Icon name="sync-alt" size={20} color="#009046" />
          </View>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <List>
              {recentLoggedIn.map((recentItem, index) => {
                return (
                  <RecentLogin
                    item={recentItem}
                    key={index}
                    username={recentItem.username}
                    netArea={recentItem.calledstationid}
                    time={moment(recentItem.acctstarttime).format(
                      'DD MMM YYYY',
                    )}
                  />
                );
              })}
            </List>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {backgroundColor: '#A92D5F'},
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
  },
  recentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 25,
    paddingBottom: 15,
  },
  appName: {fontSize: 22, fontFamily: 'Poppins-Medium', color: '#FFFFFF'},
  title: {fontSize: 20, fontFamily: 'Poppins-Medium', color: '#000000'},
  desc: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#DBDBDB'},
  profile: {width: 47, height: 47, borderRadius: 25},
  dashCard: {
    flexDirection: 'row',
    marginVertical: 12,
    marginTop: 25,
  },
  keluar: {
    color: '#000000',
    fontSize: 24,
  },
  ops: {
    marginTop: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: 900,
    backgroundColor: '#FFF',
    // marginHorizontal: -20,
  },
});
