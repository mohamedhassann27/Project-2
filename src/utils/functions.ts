export const sliceTxt= (txt:string, max:number =60)=>{
    return txt.length>=max? `${txt.slice(0,max)}...`: txt
}