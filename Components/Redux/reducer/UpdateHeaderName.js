const UpdateHeaderName = (state=false,action)=>{
    switch(action.type){
        case 'UPDATEHEADERNAME':
            let addDefaultSection={
                item:action.payload,
                name:action.name
            }
            return state = addDefaultSection
         default:
            return state;
    }
}
export default UpdateHeaderName