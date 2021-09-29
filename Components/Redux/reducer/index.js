
import BackgroundColorDatePicker from './BackgroundColorDatePicker'
import { combineReducers } from "redux" 
import ToggleDrawer from './ToggleDrawer'
import UpdateSearchArray from './UpdateSearchArray'
import UpdateArrayLength from './UpdateArrayLength'
import UpdateTopSearchName from './UpdateTopSearchName'
const allReducers = combineReducers({
BackgroundColorDatePicker:BackgroundColorDatePicker,
ToggleDrawer:ToggleDrawer,
UpdateSearchArray:UpdateSearchArray,
UpdateArrayLength:UpdateArrayLength,
UpdateTopSearchName:UpdateTopSearchName
});
export default allReducers