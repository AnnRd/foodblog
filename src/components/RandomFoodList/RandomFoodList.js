import { useEffect, useState } from "react";
import RandomFoodCard from "../RandomFoodCard/RandomFoodCard";
import './randomFoodList.scss';

function RandomFoodList ({data}) {
    const [foodList, setFoodList] = useState([]);

    const getMeals = async () => {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')

        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        getMeals()
    }, []);

    // useEffect(() => {
    //     fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    //         .then(res=>res.json())
    //         .then(data=> console.log(data))
    // }, []);



    return (
        <div className="list">
            {data.map((dish) => {
            return <RandomFoodCard name={dish.name} img={dish.img}/>
        })}
        </div>
    )
}

export default RandomFoodList;