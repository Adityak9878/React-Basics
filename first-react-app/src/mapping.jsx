export default function Mapping({colors}){
    return (
        <>
            <p>Colors</p>
            <ul>
               {colors.map((color)=>(
                <li style={{color:color, fontSize:"40px"}}>{color}</li>
               ))}
            </ul>
        </>
    )
}