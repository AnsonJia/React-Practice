import Card from './Card.tsx'
import List, { ListProps } from './List.tsx'
import Counter from './counter.tsx'

function App() {
  let items = ["New York","San Francisco","Tokyo", "London", "Paris"];

  return(
    <>
    <Card/>
    <List/>
    <ListProps items={items} heading="Cities"/>
    <br/>
    <Counter/>
    </>
    
  );
  
}

export default App;