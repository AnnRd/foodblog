import AppHeader from "../AppHeader/AppHeader";
import FoodFinder from "../FoodFinder/FoodFinder";
import './app.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppHeader/>
      </header>
      <main>
        <FoodFinder/>
      </main>
    </div>
  );
}

export default App;
