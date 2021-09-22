import UpdateHeaderName from './UpdateHeaderName'
import BackgroundColorDatePicker from './BackgroundColorDatePicker'
import { combineReducers } from "redux" 
const allReducers = combineReducers({
UpdateHeaderName:UpdateHeaderName,
BackgroundColorDatePicker:BackgroundColorDatePicker,
});
export default allReducers