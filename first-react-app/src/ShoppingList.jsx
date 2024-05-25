import ShoppingLIstItem from "./ShoppingLIstItem"

export default function ShoppingList({items}){
    return (
        <ul>
            {items.map((i)=>(
               <ShoppingLIstItem key={i.id} {...i}/>
            ))}
        </ul>
    )
}