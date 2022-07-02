import AppHeader from "../AppHeader/AppHeader";
import FoodFinder from "../FoodFinder/FoodFinder";
import RandomFoodList from "../RandomFoodList/RandomFoodList";
import Menu from "../Menu/Menu";
import './app.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppHeader/>
      </header>
      <main>
        {/* <Menu/> */}
        <FoodFinder/>
        {/* <RandomFoodList/> */}
        <div className="flex">
          <RandomFoodList/>
          <RandomFoodList/>
        </div>
      </main>
    </div>
  );
}

export default App;
