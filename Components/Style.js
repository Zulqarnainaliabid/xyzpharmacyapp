import React from 'react';
import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  Outercontainer: {
    // padding: 6,
    backgroundColor: '#eaeaea',
    borderWidth: 2,
    paddingHorizontal: 6,
    // paddingleft:6,
    // paddingright:6,
  },
  OutercontainerDetailScreen:{
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    paddingHorizontal: 6,
  },
  OutercontainerHeader: {
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    padding: 6,
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
    margin: 12,
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
    width: 109,
  },
  CatagoriesTagBoxOuterWraperImageHolder: {
    borderWidth: 1,
  },
  TopBrandOuterWraperImageHolder: {
    borderBottomWidth: 1,
    borderColor: '#C0C0C0',
    marginBottom: 10,
    marginHorizontal: 4,
    width: 90,
  },
  YoungPeopleBuyBoxOuterWraperImageHolder: {
    borderRightWidth: 1,
    borderRightColor: '#EEEEEE',
    width: 90,
    display: 'flex',
    alignItems: 'center',
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
    width: 130,
    padding: 10,
    borderRadius: 3,
    marginTop: 20,

    borderWidth: 1,
    borderColor: '#AEAEAE',
    shadowColor: '#AEAEAE',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.12,
    shadowRadius: 0,
    // elevation: 1
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
    marginTop: 20,
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
    marginBottom:110
  },
  InnerContainerItemProduct: {
    borderBottomWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 12,
    borderColor: '#C2C2C2',
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
  },
  InnerContainerItemProductSubmitButton: {
    textAlign: 'center',
    fontSize: 15,
    paddingVertical: 7,
    backgroundColor: '#18AE43',
    color: '#E3F2E9',
    marginTop: 7,
    borderRadius: 5,
  },
  InnerContainerItemProductOuterWraperArroeIcon: {
    // marginTop:55,
    textAlignVertical: 'center',
  },
  InnerContainerItemProductDiscRate: {
    // borderWidth: 1,
    backgroundColor: '#E5023C',
    color: '#FFFCFF',
    padding: 5,
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
    width: 90,
    textAlign: 'center',
    borderRadius: 17,
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
    borderWidth: 1,
    display:"flex",
    flexDirection:"row"
  },
  BrandListScreenImageHolder:{
  // borderWidth:1,
  width:282,
  },
  BrandListTagsTextHolder:{
    borderWidth:1,
    marginHorizontal:6,
    marginTop:12,
    paddingVertical:3,
    paddingHorizontal:5,
    borderColor:"#F28029",
    color:"#F28029",
    borderRadius:14,
    // display: flex;
    // align-items: center;
  }
});
