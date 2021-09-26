
export const UPDATEHEADERNAME=(item,name)=>{
    return{
        type:'UPDATEHEADERNAME',
        payload:item,
        name:name
    }
}
export const TOGGLEDRAWERBUTTON=(item)=>{
    return{
        type:'TOGGLEDRAWERBUTTON',
        payload:item,
    }
}
