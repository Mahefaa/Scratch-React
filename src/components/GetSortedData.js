export default function Sort(data,order,content){
    const keys = Object.keys(data[0]);
    const index=keys.indexOf(content);
    let sorted=data.sort((a,b)=>convert(a[index],b[index],order));
    console.log(sorted);
    return sorted;
}
function convert(a,b,order){
    if(!isNaN(a)){
        return order==='a'?a-b:b-a;
    }
    a=parseInt(a.replace(/\D/g,""));
    b=parseInt(b.replace(/\D/g,""));
    return order==='a'?a-b:b-a;
}