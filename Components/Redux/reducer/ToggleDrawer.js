const ToggleDrawer = (state=false,action)=>{
    switch(action.type){
        case 'TOGGLEDRAWERBUTTON':
            return state = action.payload
         default:
            return state;
    }
}
export default ToggleDrawer