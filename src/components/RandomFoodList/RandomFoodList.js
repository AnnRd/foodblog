import RandomFoodCard from "../RandomFoodCard/RandomFoodCard";
import './randomFoodList.scss';

function RandomFoodList ({data}) {
    return (
        <div className="list">
            {data.map((dish) => {
            return <RandomFoodCard name={dish.name} img={dish.img}/>
        })}
        </div>
    )
}

export default RandomFoodList;