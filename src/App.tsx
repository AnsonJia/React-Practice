import Card from './Card.tsx'
import List, { ListProps } from './List.tsx'
import Counter from './counter.tsx'
import OrderInfo from './OrderInfo.tsx';
import ColorPicker from './ColorPicker.tsx';

function App() {
  let listItems = ["item 1", "item 2", "item 3", "item 4 ", "item 5"];
  let items = ["New York","San Francisco","Tokyo", "London", "Paris"];

  return(
    <>
    <Card/>
    <List/>
    <ListProps items={listItems} heading="Reusable list"/>
    <br/>
    <ListProps items={items} heading="Cities"/>
    <br/>
    <Counter/>
    <br/>
    <OrderInfo/>
    <br/>
    <ColorPicker/>
    </>
    
  );
  
}

export default App;