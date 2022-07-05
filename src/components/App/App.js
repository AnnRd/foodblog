import AppHeader from "../AppHeader/AppHeader";
import FoodFinder from "../FoodFinder/FoodFinder";
import RandomFoodList from "../RandomFoodList/RandomFoodList";
import Menu from "../Menu/Menu";
import UpdateButton from "../UpdateButton/UpdateButton";

// import './app.scss';



function App() {
  const data = [{
    img: "https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg",
    name: 'Bludo1'
  }, {
    img: "https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg",
    name: 'Bludo2'
  }, {
    img: "https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg",
    name: 'Bludo3'
  }, {
    img: "https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg",
    name: 'Bludo4'
  }, {
    img: "https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg",
    name: 'Bludo5'
  }, {
    img: "https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg",
    name: 'Bludo6'
  }, {
    img: "https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg",
    name: 'Bludo7'
  }, {
    img: "https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg",
    name: 'Bludo8'
  }]

  return (
    <div className="App">
      <header>
        <AppHeader/>
      </header>
      <main>
        {/* <Menu/> */}
        <FoodFinder/>
        <div>
          <RandomFoodList data={data}/>
        </div>
        <UpdateButton/>
      </main>
    </div>
  );
}

export default App;
