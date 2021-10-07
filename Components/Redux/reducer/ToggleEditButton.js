const ToggleEditButton = (state=false,action)=>{
    switch(action.type){
        case 'TOGGLEEDITBUTTON':
            return state = action.payload
         default:
            return state;
    }
}
export default ToggleEditButton