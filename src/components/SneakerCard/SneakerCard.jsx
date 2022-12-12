import React, {useState} from "react";
import addToFavorites from "../../assets/images/addToFavorites.svg";
import addedToFavorites from "../../assets/images/addedToFavorites.svg";
import addToBasket from "../../assets/images/addToBasket.svg";
import addedButton from "../../assets/images/addedButton.svg";
import ContentLoader from "react-content-loader"

import './styles.scss';

// const snikImg = 'https://freesvg.org/img/1517505968.png';

export const SneakerCard = ({
                                sneaker,
                                onPlus,
                                onFavorite,
                                favorited = false,
                                added = false,
                                loading = false,
                            }) => {

    const {id, name, price, image} = sneaker;

    const [isFav, setIsFav] = useState(favorited);
    const [isAdded, setIsAdded] = useState(added);

    const onPlusHandler = () => {
        onPlus({id, name, price, image});
        setIsAdded(!isAdded)
    }

    const onFavHandler = () => {
        onFavorite({name, price, image, id});
        setIsFav(!isFav)
    }

    return (
        <div className="card">
            {
                loading ? <ContentLoader
                        speed={1}
                        width={150}
                        height={187}
                        viewBox="0 0 150 187"
                        backgroundColor="#DDE8F3"
                        foregroundColor="#E7F6FF"
                    >
                        <rect x="0" y="17" rx="10" ry="10" width="150" height="90"/>
                        <rect x="-1" y="116" rx="5" ry="5" width="150" height="26"/>
                        <rect x="0" y="151" rx="5" ry="5" width="106" height="32"/>
                        <rect x="118" y="151" rx="11" ry="11" width="32" height="32"/>
                    </ContentLoader> :
                    <>
                        <div className='favorite'>
                            <img onClick={onFavHandler}
                                 src={isFav ? addedToFavorites : addToFavorites}
                                 alt='addToFavorite'/>
                        </div>
                        <img
                            // src={snikImg}
                            src={image}
                            alt='sneaker'
                            width={130}
                            height={130}
                        />
                        <h5>{name}</h5>
                        <div className='cardBottom d-flex justify-between align-center'>
                            <div>
                                <span>Price: </span>
                                <b>{price} RUB</b>
                            </div>
                            <img
                                className='addToBasketImage'
                                src={isAdded ? addedButton : addToBasket}
                                alt='addToBasket'
                                onClick={onPlusHandler}
                            />
                        </div>
                    </>
            }
        </div>
    );
};
