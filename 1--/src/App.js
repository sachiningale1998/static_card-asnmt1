//  import logo from './logo.svg';
import './App.css';
import List1 from './components/list'; 
import List2 from './components/list2';
import JoinUS from './components/JoinUs'
import Settings from './components/Settings';

function App() {
  return (
    <div className="App">
        <List1 heading = "Mobile Operating System" label= ""/>
        <List2 heading = "Mobile Manufacturers" label="" />
        <JoinUS heading= "JOIN US"  label=""/>
        <Settings />
    </div>
  );
}

export default App;
