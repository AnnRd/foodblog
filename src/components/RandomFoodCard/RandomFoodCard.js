import './randomFoodCard.scss';

function RandomFoodCard (props) {
    const {img, name} = props;
    // const foodList = 
    return (
        // <div className='list'>
            <div className='card'>
                <img className='food-img' src={img} alt="" />
                <div className='food-name'>{name}</div>
            </div>
        //{/* </div> */}
    )
}

export default RandomFoodCard;