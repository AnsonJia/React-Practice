import { useState } from "react";

interface Props {
    items: string[];
    set: React.Dispatch<React.SetStateAction<string[]>>;
    heading: string;
}


export function List(){
    const [fruits, setFruit] = useState([{name: "apple", price:2, quantity: 1},{name: "orange", price:3, quantity: 1},{name: "banana", price:1, quantity: 1}]);
    const [selectedIndex, setIndex]  = useState(-1);

    const listItems = fruits.map((fruit, index) => (
        <li key={index} onClick={() => setIndex(index)}>
            {fruit.name}
        </li>
    ));
    
    function nameChange(event:any){
        const newFruits = [...fruits];
        newFruits[selectedIndex] = { ...newFruits[selectedIndex], name: event.target.value };
        setFruit(newFruits);
    }
    function priceChange(event:any){
        const newFruits = [...fruits];
        newFruits[selectedIndex] = { ...newFruits[selectedIndex], price: event.target.value };
        setFruit(newFruits);
    }
    function quantityChange(event:any){
        const newFruits = [...fruits];
        newFruits[selectedIndex] = { ...newFruits[selectedIndex], quantity: event.target.value };
        setFruit(newFruits);
    }

    const selectedFruit = selectedIndex !== -1 ? fruits[selectedIndex] : null;

    return(<><ol>{listItems}</ol>
            {selectedFruit && (
                <>
                    <p>
                        You selected: {selectedFruit.name}, ${selectedFruit.price}, Qty: {selectedFruit.quantity}
                    </p>
                    <input type="text" value={selectedFruit.name} onChange={nameChange} />
                    <br/>
                    <input type="number" value={selectedFruit.price} onChange={priceChange} />
                    <br/>
                    <input type="number" value={selectedFruit.quantity} onChange={quantityChange} />
                </>
            )}
    
    
    
    </>
    

    )
}

export function ListProps({items, set, heading}: Props){
    const [selectedIndex, setIndex]  = useState(-1);
    const [newItem, setNewItem] = useState("");

    function addItem(){
        set([...items, newItem]);
        setNewItem(""); 
          
        
    }

    function removeItem(index:number){
        const updatedItems = items.filter((_, i) => i !== index);
        set(updatedItems);
        setIndex(-1);
    }

    return(
        <>
        <h1 className="listHeader">{heading}</h1>
        {items.length === 0 && <p>No itmes found</p>}
        {items.map((item, index)=>(
            <li
            className={selectedIndex === index ? "active" : "city"}
            key={item}
            onClick={() => setIndex(index)} 
            onDoubleClick={() => removeItem(index)}
            >
            {item} 
            
            </li>
        ))}

        <input type = "text" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="Enter New List Entry"/>
        <button className="addList" onClick={addItem}>Add Item</button>
        
        
        </>
        
    );
}

export default List