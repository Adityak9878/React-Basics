export default function Validate({val1 , val2 , val3}){
    let res=false;
    if(val1==val2 && val2==val3)res=true;
    console.log(res);
    return (
        <div>
            <h2>Val1:{ val1} Val2:{ val2} Val3:{ val3}</h2>
            {res && <h2 style={{color:"green"}}>Congo</h2>}
            {!res && <h2 style={{color:"red"}}>Loose</h2>}
        </div>
    )
}