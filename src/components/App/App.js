import AppHeader from "../AppHeader/AppHeader";
import FoodFinder from "../FoodFinder/FoodFinder";
import RandomFoodList from "../RandomFoodList/RandomFoodList";
import Menu from "../Menu/Menu";
import UpdateButton from "../UpdateButton/UpdateButton";

import './app.scss';


function App() {
  const data = [{
    img: "https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg",
    name: 'bludo1'
  }, {
    img: "https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg",
    name: 'bludo2'
  }, {
    img: "https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg",
    name: 'bludo3'
  }, {
    img: "https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg",
    name: 'bludo4'
  }, {
    img: "https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg",
    name: 'bludo5'
  }, {
    img: "https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg",
    name: 'bludo6'
  }, {
    img: "https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg",
    name: 'bludo7'
  }, {
    img: "https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg",
    name: 'bludo8'
  }]

  return (
    <div className="App">
      <header className="App-header">
        <AppHeader/>
      </header>
      <main>
        {/* <Menu/> */}
        <FoodFinder/>
        <RandomFoodList data={data}/>
        <UpdateButton/>
      </main>
    </div>
  );
}

export default App;
