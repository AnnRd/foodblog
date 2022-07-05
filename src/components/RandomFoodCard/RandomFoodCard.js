import './randomFoodCard.scss';

function RandomFoodCard (props) {
    const {img, name, key} = props;

    const getCategory = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);

        const category = await response.json();
        console.log(category);
    }

    return (
            <div onClick={getCategory} className='card' id={key} value={name}>
                <img className='food-img' src={img} alt={name} />
                <div className='food-name'>{name}</div>
            </div>
    )
}

export default RandomFoodCard;