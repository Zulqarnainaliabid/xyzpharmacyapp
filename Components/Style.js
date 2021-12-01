import React from 'react';
import {StyleSheet} from 'react-native';
export default (styles = StyleSheet.create ({
  Outercontainer: {
    backgroundColor: '#eaeaea',
    paddingHorizontal: 12,
  },
  OutercontainerDetailScreen: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    flex: 1,
  },
  box: {
    
    alignItems: 'center',
    marginVertical: 10,
  },
  OutercontainerHeader: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    // borderWidth:1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  HeaderOuterWraperInputinput: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    width: 250,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 22,
    height: 45,
    marginRight: 12,
  },
  HeaderOuterWraperInputinputSearchScreen: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    width: 260,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 22,
    height: 40,
  },
  OutercontainerdProduct: {
    marginVertical: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  InnercontainerdBrand: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  InnerContainerTopBrand: {
    padding: 12,
    borderWidth: 1,
  },
  CatagoriesTagBoxOuterContainer: {
    borderWidth: 1,
    marginHorizontal: 7,
    marginBottom: 10,
    backgroundColor: 'white',

    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  CatagoriesTagBoxOuterWraperImageHolder: {
    borderWidth: 1,
  },
  TopBrandOuterWraperImageHolder: {
    // borderBottomWidth: 1,
    borderColor: '#C0C0C0',
    marginBottom: 16,
    marginTop: 12,
    marginHorizontal: 5,
    width: 90,
    // borderWidth:1
  },
  YoungPeopleBuyBoxOuterWraperImageHolder: {
    borderRightWidth: 1,
    borderRightColor: '#EEEEEE',
    width: 118,
    display: 'flex',
    alignItems: 'center',
    marginTop: 12,
    padding: 12,
  },
  YoungPeopleBuyBoxOuterWraperScrollView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CatagoriesTags: {
    // borderWidth: 1,
    // borderColor: '#318CE7',
    width: '30%',
    // padding: 12,
  },

  InnercontainerdProduct: {
    //   borderWidth: 1,
    //   borderColor: '#EEEEEE',
    padding: 16,
  },
  InnercontainerdYoungPeopleBuy: {
    // borderWidth: 1,
    // borderColor: '#000000',
    // padding: 10,
  },
  HeadingsInnercontainerdProduct: {
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 4,
  },
  ViewAllButtonInnercontainerdProduct: {
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 5,
    padding: 8,
    color: '#F28029',
  },
  ProductNameButtonInnercontainerdProduct: {
    marginTop: 7,
    fontSize: 18,
  },
  OuterContainerProductBox: {
    width: 140,
    padding: 7,
    borderRadius: 3,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#F0F0F0',

    // elevation: 2,
  },
  ImageHolderOuterContainerProductBox: {
    width: 125,
    height: 133,
  },
  TextHolderProductBox: {
    borderColor: '#000000',
  },

  OuterWraperSubmitButtonProductBox: {
    // borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#00C41A',
    textAlign: 'center',
    padding: 7,
    borderRadius: 5,
    color: '#FFFFFF',
    marginTop: 10,
  },

  OuterWraperProductBoxDeleteButton: {
    borderWidth: 2,
    borderColor: '#00C41A',
    textAlign: 'center',
    padding: 7,
    borderRadius: 5,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  InnerContainerCatagoriesTagBoxImageHolder: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 12,
  },
  CatagoriesTagBoxTextHolder: {
    // borderWidth: 1,
    borderColor: '#F4CA16',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 240,
  },
  CatagoriesTagTextHolder: {
    textAlign: 'left',
    // marginTop: 14,
    // borderWidth:1,
    width: 212,
    marginLeft: 10,
    fontSize: 12,
    color: '#898989',
  },
  // box: {
  //   fontSize: 16,
  // },
  Icon: {
    color: '#F28029',
  },
  CatagoriesTagBoxArrowIconHolder: {
    marginTop: 37,
    marginLeft: 7,
  },
  TextHolderMoreLove: {
    backgroundColor: '#FFFFFF',
    marginVertical: 5,
    paddingVertical: 10,
  },
  OuterContainerItemProduct: {
    borderWidth: 1,
    marginVertical: 5,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#D8D8D8',
    borderRadius: 3,
    padding: 12,
  },
  InnerContainerItemProduct: {
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 12,
    borderColor: '#C2C2C2',
    backgroundColor: '#FFFFFF',
  },
  InnerContainerItemProductImageHolder: {
    // borderWidth: 1,
    textAlignVertical: 'center',
    width: 130,
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
  },
  outerWraperErrorMessageNameProfileScreen:{
   marginTop:6
  },
  InnerContainerItemProductSubmitButton: {
    // textAlign: 'center',
    // fontSize: 14,
    // paddingVertical: 7,
    // backgroundColor: '#18AE43',
    // color: '#E3F2E9',
    // borderRadius: 5,
    borderWidth: 1,
  },
  InnerContainerItemProductOuterWraperArroeIcon: {
    textAlignVertical: 'center',
    textAlign: 'right',
  },
  InnerContainerItemProductDiscRate: {
    // borderWidth: 1,
    backgroundColor: '#FE0000',
    color: '#FFFCFF',
    paddingHorizontal: 3,
    paddingVertical: 2,
    fontSize: 16,
    marginVertical: 12,
    textAlign: 'center',
    borderRadius: 17,
    fontWeight: '700',
    // fontWeight: '700',
  },
  OuterWraperImageDetailsScreen: {
    borderWidth: 1,
    marginTop: 12,
  },
  OuterWraperDetailTextHolderDetailsScreen: {
    display: 'flex',
    flexDirection: 'row',
    // borderWidth:1,
    justifyContent: 'space-between',
  },
  BrandListScreenImageHolder: {
    // borderWidth:1,
    width: 282,
  },
  BrandListTagsTextHolder: {
    borderWidth: 1,
    marginHorizontal: 6,
    marginTop: 12,
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderColor: '#F28029',
    color: '#F28029',
    borderRadius: 14,
    // display: flex;
    // align-items: center;
  },
  OutercontainerClubScreen: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 6,
    flex: 1,
  },
  OutercontainerPkges: {
    borderWidth: 1,
    borderColor: '#9D9D9D',
    borderRadius: 10,
    width: 110,
  },
  OutercontainerDeliveryCharges: {
    borderWidth: 1,
    borderColor: '#C3C3C3',
    borderRadius: 10,
    padding: 6,
  },
  OutercontainerDeliveryChargesBox: {
    // borderWidth:1,
    display: 'flex',
    flexDirection: 'row',
  },
  OutercontainerFaq: {
    borderBottomWidth: 1,
    borderColor: '#C6C5CA',
    paddingVertical: 8,
  },
  OutercontainerPlansScreen: {
    paddingHorizontal: 6,
  },
  OutercontainerMemberShipPlan: {
    borderWidth: 1,
    borderColor: '#DADADA',
    padding: 16,
    borderRadius: 5,
  },
  OuterWraperPromoAlertScreenBox: {
    // borderWidth: 1,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  modalView: {
    // borderWidth:3,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'absolute',
    top: 150,
    left: 62,
    zIndex: 5,
  },
  buttonModall: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 160,
    marginVertical: 5,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#18AE43',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  ViewAllButtonWishScreen: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 6,
    textAlignVertical: 'center',
    fontWeight: '700',
  },
  root: {padding: 0},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 0},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 1,
    marginHorizontal: 5,
    textAlign: 'center',
    borderColor: '#697177',
  },
  focusCell: {
    borderColor: '#E57D50',
  },
  BackImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
  },
  OuterWraperBalanceBox: {
    // borderWidth: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 33,
    paddingBottom: 20,
    backgroundColor: 'white',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  OuterWraperCardsBox: {
    padding: 15,
    paddingBottom: 25,
    backgroundColor: 'white',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // borderWidth: 1,
  },
  OuterTextHolderPKR: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    // borderWidth:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHolderQuestionMArk: {
    color: '#BB3838',
  },
  TextHolderBalance: {
    fontSize: 13,
  },
  TextHolderPkr: {
    color: '#1CA643',
    marginHorizontal: 1,
    textAlignVertical: 'bottom',
    // borderWidth:1,
    marginTop: 4,
    // vertical-align: bottom;
  },
  TextHolderPkrPrice: {},
  TextHolderPkrPrice: {
    fontWeight: '700',
    fontSize: 24,
  },
  TextHolderPkrAvailbleBalance: {
    fontSize: 19,
    color: '#1CA643',
    marginTop: 6,
  },
  TextHolderPriceAvailbleBalance: {
    color: '#1CA643',
    fontWeight: '700',
    marginLeft: 4,
    fontSize: 30,
  },

  TextHolderPrice: {
    color: '#1CA643',
    fontWeight: '700',
    // borderWidth:1,
    fontSize: 25,
    marginLeft: 4,
  },
  AddcardButton: {
    backgroundColor: '#FF783E',
    color: 'white',
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
    borderRadius: 3,
    marginTop: 44,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  AddcardButtonWalletScreen: {
    marginTop: 33,
    padding: 7,
  },
  outerWraperErrorMessageName: {
    top: 27,
  },
  outerWraperErrorMessageProfileScreen:{
    position: 'absolute',
    // top: 30,
    marginTop:-22,
    elevation: 5,
    zIndex: 5,
    right: 0,
  },
  outerWraperErrorMessage: {
    position: 'absolute',
    top: 40,
    elevation: 5,
    zIndex: 5,
    right: 0,
    // width:"10%"
  },
  ErrorMessage: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 3,
    fontSize: 12,
    borderColor: '#F50632',
  },
  outerwraperTextHolder: {
    // borderWidth:1,
    marginVertical: 50,
    color: '#757575',
    fontSize: 16,
    lineHeight: 22,
  },
}));
