import React, {useEffect, useState} from 'react';
import {Header} from "./components/Header/Header";
import {SideBasket} from "./components/SideBasket/SideBasket";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Favorites} from "./pages/Favorites";

import './index.scss';


const baseUrl = "https://6386100bbeaa64582671f921.mockapi.io/sneakers";
const addedUrl = 'https://6386100bbeaa64582671f921.mockapi.io/basket/';
const favoritesUrl = 'https://6386100bbeaa64582671f921.mockapi.io/favorites/';

export const App = () => {
    const [sneakers, setSneakers] = useState([]);
    const [favSneakers, setFavSneakers] = useState([]);
    const [addedSneakers, setAddedSneakers] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isSideBasket, setIsSideBasket] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchedData() {
            const addedSneakers = await axios.get(addedUrl)
            const favoritesSneakers = await axios.get(favoritesUrl)
            const allSneakers = await axios.get(baseUrl)

            setIsLoading(false)

            setAddedSneakers(addedSneakers.data);
            setFavSneakers(favoritesSneakers.data);
            setSneakers(allSneakers.data);
        }

        fetchedData();
    }, [])

    const viewSide = () => {
        setIsSideBasket(true)
    }

    const removeSneakerHandler = (id) => {
        axios.delete(`https://6386100bbeaa64582671f921.mockapi.io/basket/${id}`)
            .catch(e => console.warn(e))
        setAddedSneakers(prev => prev.filter(item => item.id !== id));
    };

    const addToBasketHandler = async (obj) => {
        if (addedSneakers.find(addedObj => Number(addedObj.id) === Number(obj.id))) {
            axios.delete(
                `https://6386100bbeaa64582671f921.mockapi.io/basket/${obj.id}`)
                .catch(e => console.warn(e))
            setAddedSneakers(
                prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
        } else {
            const {data} = await axios.post(addedUrl, obj)
                .catch(e => console.warn(e))
            setAddedSneakers(prev => [...prev, data]);
        }
    };

    const addToFavHandler = async (obj) => {
        if (favSneakers.filter(favObj => Number(favObj.id) === Number(obj.id))) {
            axios.delete(
                `https://6386100bbeaa64582671f921.mockapi.io/favorites/${obj.id}`)
                .catch(e => console.warn(e))
            setFavSneakers(
                prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
        } else {
            const {data} = await axios.post(favoritesUrl, obj)
                .catch(e => console.warn(e))
            setFavSneakers(prev => [...prev, data]);
        }
    };

    return (<div className='wrapper clear'>
        {isSideBasket && <SideBasket
            removeSneakerHandler={removeSneakerHandler}
            addedSneakers={addedSneakers}
            setIsSideBasket={setIsSideBasket}
        />}

        <Header viewSide={viewSide}/>
        <Routes>
            <Route
                path='/'
                element={<Home
                    sneakers={sneakers}
                    addedSneakers={addedSneakers}
                    favorites={favSneakers}
                    setFavorites={setFavSneakers}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    setAddedSneakers={setAddedSneakers}
                    addToBasketHandler={addToBasketHandler}
                    addToFavHandler={addToFavHandler}
                    isLoading={isLoading}
                />}/>
            <Route path='favorites'
                   element={<Favorites
                       favorites={favSneakers}
                       addToFavHandler={addToFavHandler}
                   />}/>
        </Routes>
    </div>);
};