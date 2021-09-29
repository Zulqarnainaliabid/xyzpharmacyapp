const UpdateArrayLength = (state=false,action)=>{
    switch(action.type){
        case 'UPDATEARRAYLENGTH':
            return state = action.payload
         default:
            return state;
    }
}
export default UpdateArrayLength