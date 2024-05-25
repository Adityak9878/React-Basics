export default function({properties}){
    return(
        <>
        <ul style={{display:"flex"}}>
           {properties.map((i)=>(
            <div key={i.id}>
                {i.name}     ${i.price}     ⭐️{i.rating}
            </div>
           ))} 
        </ul>
        </>
    )
}