import AppHeader from "../AppHeader/AppHeader";
import FoodFinder from "../FoodFinder/FoodFinder";
import RandomFoodList from "../RandomFoodList/RandomFoodList";
import Menu from "../Menu/Menu";
import UpdateButton from "../UpdateButton/UpdateButton";

// import './app.scss';



function App() {

  return (
    <div className="App">
      <header>
        <AppHeader/>
      </header>
      <main>
        {/* <Menu/> */}
        <FoodFinder/>
        <div>
          <RandomFoodList/>
        </div>
        <UpdateButton/>
      </main>
    </div>
  );
}

export default App;
