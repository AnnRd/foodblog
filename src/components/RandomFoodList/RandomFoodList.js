import { useEffect, useState } from "react";
import RandomFoodCard from "../RandomFoodCard/RandomFoodCard";
import './randomFoodList.scss';

function RandomFoodList () {
    const [foodList, setFoodList] = useState([]);

    const getMeals = async () => {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')

        const food = await response.json();
        setFoodList(food);
    }

    useEffect(() => {
        getMeals();
    }, []);

    console.log(foodList);


    return (
        <div className="list">
            {foodList.categories?.map((dish) => {
            return <RandomFoodCard name={dish.strCategory} img={dish.strCategoryThumb} key={dish.idCategory}/>
        })}
        </div>
    )
}

export default RandomFoodList;