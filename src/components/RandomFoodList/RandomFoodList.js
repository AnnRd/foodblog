import RandomFoodCard from "../RandomFoodCard/RandomFoodCard";

function RandomFoodList ({data}) {
    return (
        data.map((dish) => {
            return <RandomFoodCard name={dish.name} img={dish.img}/>
        })
    )
}

export default RandomFoodList;