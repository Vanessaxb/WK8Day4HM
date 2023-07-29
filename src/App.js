// import Styles from '../components/Styles.module.css'
import './App.css';
import StarshipList from './components/StarshipList'
// import StarshipListItem from "./StarshipListItem";

function App() {
  return (
    <div className="App">
     {/* {starshipElements} */}
     <h1>STAR WARS STARSHIPS</h1>
     <StarshipList />
     {/* <StarshipListItem /> */}
     
    </div>
  );
}



export default App;