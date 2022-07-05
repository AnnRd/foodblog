import './foodFinder.scss';

function FoodFinder () {
    return (
        <div className='finder'>
                <label className="finder__label" htmlFor="GET-food">Find your dish</label> <br />
                <input className="finder__input" id="GET-food" type="text" placeholder="I want ..."/> 
                <input className="finder__submit" type="submit" value="Find"></input>
            <div className="finder__label">... or check up the categories! 👇</div>
        </div>
    )
}

export default FoodFinder;