// Array as props.


export default function ListPicker({list}){
    let index=Math.floor(Math.random()*list.length);
    console.log(index);
    return (
        <>
            <h1>Length : {list[index]}</h1>
        </>
    )
}