import React from 'react';
import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  Outercontainer: {
    backgroundColor: '#eaeaea',
    paddingHorizontal: 6,
  },
  OutercontainerDetailScreen: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    flex: 1,
  },
  OutercontainerHeader: {
    display: 'flex',
    flexDirection: 'row',
    padding: 7,
    backgroundColor: 'white',

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
    width: 271,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 22,
    height: 45,
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
  CataGoriesTagBoxImageHolder: {
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: '#EDEDED',
    padding: 10,
    width: 114,
  },
  CatagoriesTagBoxOuterWraperImageHolder: {
    borderWidth: 1,
  },
  TopBrandOuterWraperImageHolder: {
    // borderBottomWidth: 1,
    borderColor: '#C0C0C0',
    marginBottom: 16,
    marginTop: 12,
    marginHorizontal: 8,
    width: 90,
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
  YoungPeopleBuyBoxImageHolder: {
    width: '100%',
    padding: 8,
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
    // borderWidth: 1,
    // borderColor: '#EEEEEE',
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
  // OutercontainerdCatagoriesTags:{

  // },
  InnerContainerCatagoriesTagBoxImageHolder: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 12,
  },
  CatagoriesTagBoxTextHolder: {
    // borderWidth: 1,
    borderColor: '#F4CA16',
    display: 'flex',
    flexDirection: 'row',
    width: 220,
  },
  CatagoriesTagTextHolder: {
    textAlign: 'left',
    // marginTop: 14,
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
  OuterContainerCatagoriesList: {
    backgroundColor: 'white',
    // borderWidth: 2,
    // borderColor: '#D8D8D8',
    // borderRadius: 3,
    // paddingBottom: 100,
    // marginBottom:110
    flex: 1,
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
    width: 120,
    display: 'flex',
    justifyContent: 'center',
  },
  InnerContainerItemProductTextHolder: {
    width: 170,
    marginLeft: 12,
    // borderWidth:1
  },
  InnerContainerItemProductSubmitButton: {
    textAlign: 'center',
    fontSize: 14,
    paddingVertical: 7,
    backgroundColor: '#18AE43',
    color: '#E3F2E9',
    marginLeft: 10,
    borderRadius: 5,
    width: 190,
    marginTop: -3,
  },
  InnerContainerItemProductOuterWraperArroeIcon: {
    // marginTop:55,
    textAlignVertical: 'center',
    marginLeft: 5,
  },
  InnerContainerItemProductDiscRate: {
    // borderWidth: 1,
    backgroundColor: '#E5023C',
    color: '#FFFCFF',
    paddingHorizontal: 3,
    paddingVertical: 2,
    fontSize: 14,
    marginTop: 10,
    width: 65,
    textAlign: 'center',
    borderRadius: 17,
    fontWeight: '700',
  },
  OuterWraperImageDetailsScreen: {
    borderWidth: 1,
    marginTop: 12,
  },
  OuterWraperImageHolderDetailScreen: {
    width: 270,
    padding: 12,
    marginLeft: 45,
  },
  OuterWraperDetailTextHolderDetailsScreen: {
    display: 'flex',
    flexDirection: 'row',
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
  OutercontainerMemberShipPlan:{
    borderWidth:1,
    borderColor:"#DADADA",
    padding:16,
    borderRadius:5,
  }
});
