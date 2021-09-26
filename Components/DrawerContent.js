import React from 'react';
import {View, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export function DrawerContent(props) {
  const paperTheme = useTheme();
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph]}>
                  Hey, Gust User
                </Paragraph>
              </View>
            </View>
            <View style={styles.Location}>
              <Text style={styles.LocationTextHolder}>njmmmn</Text>
              <DrawerItem
                icon={({color, size}) => (
                  <FontAwesome5
                    style={{fontSize: 17, color: '#000000'}}
                    name={'map-marker-alt'}
                    solid
                  />
                )}
                label=""
                onPress={() => {
                  signOut();
                }}
              />
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{fontSize: 17, color: '#C2C2C2'}}
                  name={'window-maximize'}
                  solid
                />
              )}
              label="Catagories"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{fontSize: 17, color: '#C2C2C2'}}
                  name={'shopping-cart'}
                  solid
                />
              )}
              label="My Cart"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{fontSize: 17, color: '#C2C2C2'}}
                  name={'user-circle'}
                  solid
                />
              )}
              label="My Profile"
              onPress={() => {
                props.navigation.navigate('BookmarkScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{fontSize: 17, color: '#C2C2C2'}}
                  name={'border-none'}
                  solid
                />
              )}
              label="My Order"
              onPress={() => {
                props.navigation.navigate('SettingsScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{fontSize: 17, color: '#C2C2C2'}}
                  name={'presentation'}
                  solid
                />
              )}
              label="GrocerClub"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{fontSize: 17, color: '#C2C2C2'}}
                  name={'dollar-sign'}
                  solid
                />
              )}
              label="Share & Earn"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{fontSize: 17, color: '#C2C2C2'}}
                  name={'bell'}
                  solid
                />
              )}
              label="Promo Alerts"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{fontSize: 17, color: '#C2C2C2'}}
                  name={'share-alt'}
                  solid
                />
              )}
              label="Share"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{fontSize: 17, color: '#C2C2C2'}}
                  name={'question-circle'}
                  solid
                />
              )}
              label="Faqs"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{fontSize: 17, color: '#C2C2C2'}}
                  name={'comment-alt'}
                  solid
                />
              )}
              label="Live Chats"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{fontSize: 17, color: '#C2C2C2'}}
                  name={'phone-alt'}
                  solid
                />
              )}
              label="Call Us"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{fontSize: 17, color: '#C2C2C2'}}
                  name={'address-book'}
                  solid
                />
              )}
              label="Wich List"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{fontSize: 17, color: '#C2C2C2'}}
                  name={'bandcamp'}
                  solid
                />
              )}
              label="Brands"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{fontSize: 17, color: '#C2C2C2'}}
                  name={'envelope'}
                  solid
                />
              )}
              label="App Index"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5
                  style={{fontSize: 17, color: '#C2C2C2'}}
                  name={'sign-out-alt'}
                  solid
                />
              )}
              label="Sign In"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    borderWidth: 1,
  },
  paragraph: {
    marginRight: 3,
    color:"#0D0D0D",
  },
  Location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    borderWidth: 1,
    borderColor:"#AFAFAF",
    borderRadius:12,
    // paddingHorizontal:12,
    justifyContent:"space-between",
    height:43,
  },
  LocationTextHolder:{
//   borderWidth:1,
  width:180,
  fontSize:20,
  marginLeft:12,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
