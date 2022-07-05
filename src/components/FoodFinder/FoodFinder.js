import './foodFinder.scss';

function FoodFinder () {
    const getFood = async (event) => {
        const value = event.target.previousSibling.value;

        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)

        const food = await response.json();
        console.log(food);
    }

    return (
        <div className='finder'>
                <label className="finder__label" htmlFor="GET-food">Find your dish</label> <br />
                <input className="finder__input" id="GET-food" type="text" placeholder="I want ..."/> 
                <button onClick={getFood} className="finder__submit" type="submit" value="Find">Find</button>
            <div className="finder__label">... or check up the categories! 👇</div>
        </div>
    )
}

export default FoodFinder;