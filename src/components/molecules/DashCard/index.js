import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DashCard = ({icon, color, bgcolor, label, total}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.icon(bgcolor)}>
            <Icon name={icon} color={color} size={25} />
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Poppins-Reguler',
                color: '#8689A2',
              }}>
              {label}
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontFamily: 'Poppins-Medium',
                color: '#363B64',
              }}>
              {total}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DashCard;

const styles = StyleSheet.create({
  container: {
    width: 175,
    backgroundColor: 'white',
    borderRadius: 28,
    overflow: 'hidden',
    marginRight: 15,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  icon: (color) => ({
    width: 56,
    height: 56,
    marginRight: 15,
    overflow: 'hidden',
    backgroundColor: color,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  }),
});
