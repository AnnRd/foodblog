import './randomFoodCard.scss';

function RandomFoodCard (props) {
    const {img, name} = props;
    return (
            <div className='card'>
                <img className='food-img' src={img} alt="" />
                <div className='food-name'>{name}</div>
            </div>
    )
}

export default RandomFoodCard;