const UpdateArrayWishListScreen = (state=null,action)=>{
    switch(action.type){
        case 'UPDATEARRAYWISHLISTSCREEN':
            return state = action.payload
         default:
            return state;
    }
}
export default UpdateArrayWishListScreen