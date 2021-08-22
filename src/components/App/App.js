import SideBar from '../SideBar'
import ItemList from '../ItemList'
import './App.scss';
import ScrollUp from '../ScrollUp'

function App() {
  return (
    <div className='layout'>
      <ScrollUp />
      <SideBar />
      <ItemList />
    </div>
  );
}

export default App;
