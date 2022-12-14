import React from 'react';
import search from "../assets/images/searchIcon.svg";
import {SneakerCard} from "../components/SneakerCard/SneakerCard";


// const addedUrl = 'https://6386100bbeaa64582671f921.mockapi.io/basket/';

export const Home = ({
                         sneakers,
                         searchValue,
                         setSearchValue,
                         addToBasketHandler,
                         addToFavHandler,
                         addedSneakers,
                         isLoading
                     }) => {

    const renderSneakers = () => {
        const filteredSneakers = sneakers?.filter(
            sneaker => sneaker?.name?.toLowerCase()
                .includes(searchValue?.toLowerCase()))

        return (
            isLoading ?
                [...Array(sneakers.length)]
                :
                filteredSneakers)?.map(
            sneaker =>
                <SneakerCard
                    key={sneaker.name}
                    sneaker={sneaker}
                    onPlus={(obj) => addToBasketHandler(obj)}
                    onFavorite={(obj) => addToFavHandler(obj)}
                    added={addedSneakers.some(obj => Number(obj.id) === Number(sneaker.id))}

                />
        )
    }

    return (
        <div>
            <div className='content p-40'>
                <div className='d-flex align-center mb-40 justify-between'>
                    <h1>All sneakers: </h1>
                    <div className='searchBlock'>
                        <img src={search} alt='search'/>
                        <input value={searchValue}
                               onChange={event => setSearchValue(event.target.value)}
                               placeholder='Search...'/>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-wrap'>
                {
                    renderSneakers()
                }
            </div>
        </div>
    );
};