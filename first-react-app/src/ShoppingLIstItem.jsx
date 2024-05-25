export default function ShoppingLIstItem({id,item,quantity,completed}){
    return (
        <li key={id}
        style={{color:completed? "gray" : "yellow", textDecoration:completed? "line-through":"none" }} >
            {item}-{quantity}
            </li>
    )
}