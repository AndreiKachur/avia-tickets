import SideBar from '../SideBar'
import ItemList from '../ItemList'
import './App.scss';
import Flightsservice from '../../services/flights-service'
import ScrollUp from '../ScrollUp'

const flightsservice = new Flightsservice()

function App() {
  return (
    <div className='layout'>
      <ScrollUp />
      <SideBar />
      <ItemList flightsservice={flightsservice} />
    </div>
  );
}

export default App;
