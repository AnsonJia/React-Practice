import { useState } from 'react';
import Card from './Card.tsx'
import List, { ListProps } from './List.tsx'
import Counter from './counter.tsx'
import OrderInfo from './OrderInfo.tsx';
import ColorPicker from './ColorPicker.tsx';
import ToDoList from './toDoList.tsx';


function App() {
  const [listItems, setlistItems] = useState(["item 1", "item 2", "item 3", "item 4 ", "item 5"]);
  const [cities, setCities] = useState(["New York","San Francisco","Tokyo", "London", "Paris"]);

  return(
    <>
    <Card/>
    <List/>
    <ListProps items={listItems} set={setlistItems} heading="Reusable list"/>
    <br/>
    <ListProps items={cities} set={setCities} heading="Cities"/>
    <br/>
    <Counter/>
    <br/>
    <OrderInfo/>
    <br/>
    <ColorPicker/>
    <br/>
    <ToDoList/>
    </>
    
  );
  
}

export default App;