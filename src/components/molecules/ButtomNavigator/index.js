import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconM from 'react-native-vector-icons/FontAwesome5';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? (
        <IconM name="home" size={25} color="#A92D5F" />
      ) : (
        <IconM name="home" size={25} color="#E2E2E2" />
      );
    case 'Users':
      return focus ? (
        <IconM name="user-alt" size={25} color="#A92D5F" />
      ) : (
        <IconM name="user-alt" size={25} color="#E2E2E2" />
      );
    case 'Groups':
      return focus ? (
        <IconM name="layer-group" size={25} color="#A92D5F" />
      ) : (
        <IconM name="layer-group" size={25} color="#E2E2E2" />
      );
    case 'More':
      return focus ? (
        <IconM name="bars" size={25} color="#A92D5F" />
      ) : (
        <IconM name="bars" size={25} color="#E2E2E2" />
      );
    default:
      return focus ? (
        <IconM name="home" size={25} color="#A92D5F" />
      ) : (
        <IconM name="home" size={25} color="#E2E2E2" />
      );
  }
};

const ButtomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            style={{
              alignItems: 'center',
            }}
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
            <Text style={{color: isFocused ? '#A92D5F' : '#AAAAAA'}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ButtomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 45,
    justifyContent: 'space-between',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    elevation: 20,
    shadowRadius: 10,
  },
});
