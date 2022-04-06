//  import logo from './logo.svg';
import './App.css';
import List1 from './components/list'; 
import List2 from './components/list2';
import JoinUS from './components/JoinUs'
import Settings from './components/Settings';
import Login from './components/Login' ;
import ContactUs from './components/ContactUs';
import Search from './components/Search';
import Help from './components/Help';
import Home from './components/Home';
import Download from './components/Download';

function App() {
  return (
    <div className="App">
        <List1 heading = "Mobile Operating System" label= ""/>
        <List2 heading = "Mobile Manufacturers" label="" />
        <div id="flexdiv" >
          <JoinUS style="background-color: dodgerblue" heading= "JOIN US"  label=""/>
        <Settings />
        </div>
        <div id="flexdiv">
          <Login  label=""/>
        <ContactUs />
        </div>
        <div id="flexdiv">
          <Search  label=""/>
        <Help />
        </div>
        <div id="flexdiv">
          <Home  label=""/>
        <Download />
        </div>
        
        
    </div>
  );
}

export default App;
