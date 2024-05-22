// export default function Greet(props){
//     return (
//     <>
//         <h1>Hey It's Working {props.firstName} and {props.lastname}</h1>
//     </>
//     )
// }

// Or you can destructre the property according to yourself....

//One case of default.
// Variable as props should be passed as inside the {} in the funtions calls.

export default function Greet({firstName="Singh",lastname}){
    return (
        <>
            <h1>Hey there ,{firstName} , {lastname}</h1>
        </>
    )
}