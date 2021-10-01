
import BackgroundColorDatePicker from './BackgroundColorDatePicker'
import { combineReducers } from "redux" 
import ToggleDrawer from './ToggleDrawer'
import UpdateSearchArray from './UpdateSearchArray'
import UpdateArrayLength from './UpdateArrayLength'
import UpdateTopSearchName from './UpdateTopSearchName'
import UpdateArrayWishListScreen from './UpdateArrayWishListScreen'
const allReducers = combineReducers({
BackgroundColorDatePicker:BackgroundColorDatePicker,
ToggleDrawer:ToggleDrawer,
UpdateSearchArray:UpdateSearchArray,
UpdateArrayLength:UpdateArrayLength,
UpdateTopSearchName:UpdateTopSearchName,
UpdateArrayWishListScreen:UpdateArrayWishListScreen
});
export default allReducers