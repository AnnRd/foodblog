import './randomFoodCard.scss';

function RandomFoodCard (props) {
    const {img, name, key} = props;
    return (
            <div className='card' id={key}>
                <img className='food-img' src={img} alt={name} />
                <div className='food-name'>{name}</div>
            </div>
    )
}

export default RandomFoodCard;