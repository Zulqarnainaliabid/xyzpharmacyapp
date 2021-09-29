const UpdateTopSearchName = (state=false,action)=>{
    switch(action.type){
        case 'UPDATETOPSEARCHNAME':
            return state = action.payload
         default:
            return state;
    }
}
export default UpdateTopSearchName