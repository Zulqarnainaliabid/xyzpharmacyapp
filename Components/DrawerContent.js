import React, {useState,useEffect} from 'react';
import {
  View,
  StyleSheet,
  Switch,
  Image,
  TouchableOpacity,
  Share,
} from 'react-native';
import {
  LocationIcon,
  ShoppingCart,
  Profile,
  MyOrder,
  GrocerClub,
  Doller,
  Alert,
  ShareIcon,
  Question,
  Chat,
  Phone,
  WhishList,
  Brands,
  Email,
  SignIn,
  Categories,
} from './Icons';
import {Paragraph, Text} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {svg} from './Images/icon.svg';
import {useNavigation} from '@react-navigation/native';

export function DrawerListList(props) {
  const navigation = useNavigation();
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <TouchableOpacity
      onPress={() => {
        if(props.item.Label==="Share"){
          onShare()
          console.log("ppp")
        }else{
        navigation.navigate(props.item.Screen, {
          name: props.item.Label,
        });
      }

      }}>
      <View style={styles.OuterWraperDrawerLinks}>
        <Text style={{marginRight: 30}}>{props.item.Icon}</Text>
        <Text style={{color: '#3D3D3D', fontSize: 15}}>{props.item.Label}</Text>
      </View>
    </TouchableOpacity>
  );
}
export function DrawerContent(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const LinksArray = [
    {Icon: Categories, Label: 'Categories',Screen:"DrawerCategoriesScren"},
    {Icon: ShoppingCart, Label: 'My Cart',Screen:"CartScreen"},
    {Icon: Profile, Label: 'My Profile',Screen:"ProfileScreen"},
    {Icon: MyOrder, Label: 'My Order',Screen:"OrderScreen"},
    {Icon: GrocerClub, Label: 'GrocerClub',Screen:"MemberShipScreen"},
    {Icon: Doller, Label: 'Share & Earn',Screen:"ShareAndEarnScreen"},
    {Icon: Alert, Label: 'Promo Alerts',Screen:"PromoAlertScreen"},
    {Icon: ShareIcon, Label: 'Share',Screen:"Share"},
    {Icon: Question, Label: 'FAQs',Screen:"DrawerFaqsScreen"},
    {Icon: Chat, Label: 'Live Chat',Screen:"ProfileScreen"},
    {Icon: Phone, Label: 'Call Us',Screen:"ProfileScreen"},
    {Icon: WhishList, Label: 'Whish List',Screen:"WhishListScreen"},
    {Icon: Brands, Label: 'Brands',Screen:"DrawerBrandScreen"},
    {Icon: Email, Label: 'App InBox',Screen:"InBoxScreen"},
    {Icon: SignIn, Label: 'Sign In',Screen:"ProfileScreen"},
  ];
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#FAFAFA'}}>
        <View style={styles.drawerContent}>
          <View style={styles.OuterWraperUserInfo}>
            <Paragraph style={[styles.Headingparagraph]}>
              Hey, Gust User
            </Paragraph>
            <View style={styles.OuterWraperLocation}>
              <Text style={styles.LocationTextHolder}>njmmmmm</Text>
              <Text style={styles.LocationFontIcon}>{LocationIcon}</Text>
            </View>
          </View>
          <Image src={svg} />
          <View
            style={{
              paddingVertical: 5,
              paddingHorizontal: 18,
              borderBottomWidth: 1,
              marginHorizontal: -4,
              borderColor: '#C4C4C4',
            }}>
            {LinksArray.map((item, index) => {
              return <DrawerListList key={index} item={item} />;
            })}
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 12,
            }}>
            <Text style={{marginTop: 4, fontSize: 15}}>English</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{marginHorizontal: 12}}
            />
            <Text style={{marginTop: 4, fontSize: 15}}>Urdu</Text>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    padding: 4,
    // borderWidth: 1,
  },
  OuterWraperDrawerLinks: {
    // borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 12,
  },
  OuterWraperUserInfo: {
    // borderWidth: 1,
    // marginVertical:12
  },
  Headingparagraph: {
    color: '#050505',
    // borderWidth: 1,
    fontSize: 17,
    marginBottom: 12,
  },
  OuterWraperLocation: {
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3,
    paddingHorizontal: 12,
    color: '#B4B4B4',
    borderColor: '#B4B4B4',
    borderRadius: 8,
  },
  LocationTextHolder: {
    // borderWidth:1,
    width: 220,
    fontSize: 14,
  },
  LocationFontIcon: {
    // borderWidth:1,
    textAlignVertical: 'center',
  },
});
