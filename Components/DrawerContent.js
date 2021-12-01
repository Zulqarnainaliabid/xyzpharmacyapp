import React, {useState, useEffect,useContext} from 'react';
import {
  View,
  StyleSheet,
  Switch,
  Image,
  TouchableOpacity,
  Share,
} from 'react-native';
import Dialog from 'react-native-dialog';
import {Context} from './Context/Context';
import ModalCallUs from './ModalCallus';
import {
  LocationIcon,
  ShoppingCart,
  Profile,
  MyOrder,
  Doller,
  AlertIcon,
  ShareIcon,
  Question,
  Chat,
  Phone,
  WhishList,
  Brands,
  Email,
  SignIn,
  Wallet,
  Categories,
  GrocerClub,
} from './Icons';
import {Paragraph, Text} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {svg} from './Images/icon.svg';
import {useNavigation} from '@react-navigation/native';
import { cos } from 'react-native-reanimated';
export function DrawerListList (props) {
  const contextData = useContext(Context);
  const [IsSignInToggle, setIsSignInToggle] = useState (false);
  const [visible, setVisible] = useState (false);
  const [ToggleCartValue,setToggleCartValue] = useState(false)
  const navigation = useNavigation ();
  const onShare = async () => {
    try {
      const result = await Share.share ({
        message: 'React Native | A framework for building native apps using React',
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
      alert (error.message);
    }
  };

  useEffect (() => {
    if(contextData.CartLength===0){
      setToggleCartValue(false)
    }else{
      setToggleCartValue(true)
    }
  }, [contextData.UpdateCartItem]);

  const storeData = async () => {
    try {
      await AsyncStorage.setItem ('UpdateScreen', JSON.stringify (false));
    } catch (e) {
      console.log ('error', e);
    }
    navigation.navigate ('HomPage');
    setVisible (false);
  };

  
  return (
    <View>
      {ToggleCartValue && <Text
        style={{
          position: 'absolute',
          elevation: 1,
          textAlign: 'center',
          textAlignVertical: 'center',
          display: props.item.selectedCartItemNumber ? 'flex' : 'none',
          flexDirection: 'row',
          backgroundColor: '#18AE43',
          height: '60%',
          width: '10%',
          borderRadius: 15,
          color: 'white',
          left: 11,
          // padding:12,
          bottom: 22,
          // top: 7,
          fontSize: 11,
        }}
        
      >
       {contextData.CartLength}
      </Text>}
      <TouchableOpacity
        onPress={() => {
          if (props.item.Label === 'Share') {
            onShare ();
          } else if (props.item.Label === 'Sign Out') {
            setVisible (true);
          } else if (props.item.Label === 'Live Chat') {
            if (IsSignInToggle) {
              navigation.navigate ('LiveChateScreen');
            }
          } else if (props.item.Label === 'Call Us') {
            if (IsSignInToggle) {
              props.item.fun (true);
            }
          } else {
            navigation.navigate (props.item.Screen, {
              name: props.item.Label,
            });
          }
        }}
      >
        <Dialog.Container visible={visible}>
          <Dialog.Title style={{marginTop: -10}}>Sing Out</Dialog.Title>
          <Text
            style={{
              fontWeight: '700',
              marginLeft: 12,
              marginTop: -10,
              marginBottom: 20,
            }}
          >
            Are you sure you want to Sign Out?
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <Dialog.Button
              style={{color: 'red', marginHorizontal: 7}}
              label="No"
              onPress={() => setVisible (false)}
            />
            <Dialog.Button
              style={{color: 'red', marginHorizontal: 4}}
              label="Yes"
              onPress={() => {
                storeData ();
                props.HandleToggle()
              }}
            />
          </View>
        </Dialog.Container>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginVertical: 12,
            display: props.item.selected ? 'flex' : 'none',
          }}
        >
          <Text style={{marginRight: 30, width: 20}}>
            {props.item.Icon}
          </Text>
          <View
            style={{
              color: '#3D3D3D',
              fontSize: 15,
              width: 200,
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Text style={{position: 'relative'}}>{props.item.Label} </Text>
            <Text
              style={{
                backgroundColor: '#18AE43',
                color: 'white',
                padding: 13,
                marginLeft: 12,
                // borderWidth: 1,
                borderRadius: 22,
                fontSize: 16,
                position: 'absolute',
                top: -15,
                left: 33,
                display: props.item.selectedPricePKR ? 'flex' : 'none',
              }}
            >
              {props.item.pricePkr}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
export function DrawerContent (props) {
  const [IsSignInToggle, setIsSignInToggle] = useState (false);
  const [isEnabled, setIsEnabled] = useState (false);
  const [IsSignIn, setIsSignIn] = useState ('Sign In');
  const [ToggleModal, setToggleModal] = useState (false);
  const toggleSwitch = () => setIsEnabled (previousState => !previousState);
  const GetData = async () => {
    try {
      const value = await AsyncStorage.getItem ('UpdateScreen');
      if (value !== null) {
        let data = JSON.parse(value)
        setIsSignInToggle (data);
        if (data) {
          setIsSignIn ('Sign Out');
        } else {
          setIsSignIn ('Sign In');
        }
      }
    } catch (e) {
      console.log ('read error', e);
    }
  };


  useEffect (() => {
    GetData ();
  },);

  function HandleToggle(){
    GetData ();
  }

  function HandleModal (toggleScreen) {
    setToggleModal (toggleScreen);
  }

  const LinksArray = [
    {
      Icon: Categories,
      Label: 'Categories',
      Screen: 'DrawerCategoriesScren',
      selected: true,
      selectedPricePKR: false,
      selectedCartItemNumber: false,
    },
    {
      Icon: ShoppingCart,
      Label: 'My Cart',
      Screen: 'CartScreen',
      selected: true,
      selectedPricePKR: false,
      selectedCartItemNumber: true,
    },
    {
      Icon: Profile,
      Label: 'My Profile',
      Screen: 'ProfileScreen',
      selected: true,
      selectedPricePKR: false,
      selectedCartItemNumber: false,
    },
    {
      Icon: MyOrder,
      Label: 'My Order',
      Screen: 'OrderScreen',
      selected: true,
      selectedPricePKR: false,
      selectedCartItemNumber: false,
    },
    {
      Icon: GrocerClub,
      Label: 'GrocerClub',
      Screen: 'MemberShipScreen',
      selected: true,
      selectedPricePKR: false,
      selectedCartItemNumber: false,
    },
    {
      Icon: Wallet,
      Label: 'Wallet',
      Screen: 'WalletScreen',
      selected: IsSignInToggle,
      pricePkr: 'PKR 0',
      selectedPricePKR: IsSignInToggle,
      selectedCartItemNumber: false,
    },
    {
      Icon: Doller,
      Label: 'Share & Earn',
      Screen: 'ShareAndEarnScreen',
      selected: true,
      selectedPricePKR: false,
      selectedCartItemNumber: false,
    },
    {
      Icon: AlertIcon,
      Label: 'Promo Alerts',
      Screen: 'PromoAlertScreen',
      selected: true,
      selectedPricePKR: false,
      selectedCartItemNumber: false,
    },
    {
      Icon: ShareIcon,
      Label: 'Share',
      Screen: 'Share',
      selected: true,
      selectedPricePKR: false,
      selectedCartItemNumber: false,
    },
    {
      Icon: Question,
      Label: 'FAQs',
      Screen: 'DrawerFaqsScreen',
      selected: true,
      selectedPricePKR: false,
      selectedCartItemNumber: false,
    },
    {
      Icon: Chat,
      Label: 'Live Chat',
      Screen: 'ProfileScreen',
      selected: true,
      selectedPricePKR: false,
      selectedCartItemNumber: false,
    },
    {
      Icon: Phone,
      Label: 'Call Us',
      Screen: 'ProfileScreen',
      selected: true,
      selectedPricePKR: false,
      selectedCartItemNumber: false,
      fun: HandleModal,
    },
    {
      Icon: WhishList,
      Label: 'Whish List',
      Screen: 'WhishListScreen',
      selected: true,
      selectedPricePKR: false,
      selectedCartItemNumber: false,
    },
    {
      Icon: Brands,
      Label: 'Brands',
      Screen: 'DrawerBrandScreen',
      selected: true,
      selectedPricePKR: false,
      selectedCartItemNumber: false,
    },
    {
      Icon: Email,
      Label: 'App InBox',
      Screen: 'InBoxScreen',
      selected: true,
      selectedPricePKR: false,
      selectedCartItemNumber: false,
    },
    {
      Icon: SignIn,
      Label: IsSignIn,
      Screen: 'ProfileScreen',
      selected: true,
      selectedPricePKR: false,
      selectedCartItemNumber: false,
    },
  ];

  return (
    <View style={{flex: 1}}>
      <ModalCallUs setToggleModal={setToggleModal} ToggleModal={ToggleModal} />
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#FAFAFA'}}
      >
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
            }}
          >
            {LinksArray.map ((item, index) => {
              return <DrawerListList key={index} item={item} HandleToggle={HandleToggle} />;
            })}
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 12,
            }}
          >
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

const styles = StyleSheet.create ({
  drawerContent: {
    flex: 1,
    padding: 4,
    // borderWidth: 1,
  },
  OuterWraperDrawerLinks: {
    // borderWidth: 1,
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
