const UpdateSearchArray = (state=false,action)=>{
    switch(action.type){
        case 'UPDATESEARCHARRAY':
            return state = action.payload
         default:
            return state;
    }
}
export default UpdateSearchArray