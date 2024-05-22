// export default function Conditionals(){
//     let num1=Math.floor(Math.random()*6)+1;
//     let num2=Math.floor(Math.random()*6)+1;
//     let val=false;
//     if(num1===num2)val=true;
//     return (
//     <div className="conditions" style={{color: val ? "green" : "brown", fontSize:"50px"}}>
//         {val && <h2>You Won</h2>}
//         {!val && <h2>You Lost</h2>}
//         <h2>Num1: {num1}</h2>
//         <h2>Num2: {num2}</h2>
//     </div>
//     )
// }




// styles mein jo color likha hua hai vo ek javascript variable hai usmein app phir conditions ke hissab se 
// value assign kr skte ho....
//  styles={IDHAR JAVA SCRIPT CHLEGA {ISMEIN SB LIKHO JO LIKHA HAI LOGIC AND COLOR ASSIGNING } }
// Aur ha value sb "IDHAR" likhna pdega ismein yeh yad rakhna..... 



// Example of props when a color is passed as a prop so that you could use it in style"
export default function Conditionals({color="yellow"}){
    let num1=Math.floor(Math.random()*6)+1;
    let num2=Math.floor(Math.random()*6)+1;
    let val=false;
    if(num1===num2)val=true;
    return (
    <div className="conditions" style={{color: val ? color : "brown", fontSize:"50px"}}>
        {val && <h2>You Won</h2>}
        {!val && <h2>You Lost</h2>}
        <h2>Num1: {num1}</h2>
        <h2>Num2: {num2}</h2>
    </div>
    )
}