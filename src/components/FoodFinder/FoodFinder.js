import './foodFinder.scss';

function FoodFinder () {
    return (
        <>
            <form action="">
                <label className="finder__label" htmlFor="GET-food">Find your dish</label> <br />
                <input className="finder__input" id="GET-food" type="text" placeholder="I want ..."/> 
                <input className="finder__submit" type="submit" value="Find"></input>
            </form>
            <div className="finder__label">... or choose a random one! 👇</div>
        </>
    )
}

export default FoodFinder;