const BackgroundColorDatePicker = (state=false,action)=>{
    switch(action.type){
        case 'INCREMENTBACKGROUNDCOLORPASSION':
            return state = action.payload
         default:
            return state;
    }
}
export default BackgroundColorDatePicker