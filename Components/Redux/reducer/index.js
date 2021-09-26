import UpdateHeaderName from './UpdateHeaderName'
import BackgroundColorDatePicker from './BackgroundColorDatePicker'
import { combineReducers } from "redux" 
import ToggleDrawer from './ToggleDrawer'
const allReducers = combineReducers({
UpdateHeaderName:UpdateHeaderName,
BackgroundColorDatePicker:BackgroundColorDatePicker,
ToggleDrawer:ToggleDrawer
});
export default allReducers