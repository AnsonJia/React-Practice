import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
}


export function List(){
    const fruits = [{name: "apple"},{name: "orange"},{name: "banana"}];

    const listItems = fruits.map(fruit => <li>{fruit.name}</li>);

    return(<ol>{listItems}</ol>)
}

export function ListProps({items, heading}: Props){
    const [selectedIndex, setIndex]  = useState(-1);
    return(
        <>
        <h1 className="listHeader">{heading}</h1>
        {items.length === 0 && <p>No itmes found</p>}
        {items.map((item, index)=>(
            <li
            className={selectedIndex === index ? "active" : "city"}
            key={item}
            onClick={() => setIndex(index)} 
            >
            {item}
            </li>


        ))}
        
        
        </>
        
    );
}

export default List