import React, { useState } from 'react';
import { plantList } from '../data/plantList'
import '../styles/ShoppingList.css'
import CareScale from './CareScale';
import PlantItem from './PlantItem';
import Categories from './Categorie';

const ShoppingList = ({ cart, updateCart, activeCategory,setActiveCategory}) => {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }

    function removeFromCart(name, price) {
        const currentPlant = cart.find((plant) => plant.name === name)
        if (currentPlant) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            currentPlant.amount != 1 ? updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlant.amount - 1 }
            ]) : updateCart([...cartFilteredCurrentPlant,{cart}])
        }
    }

    return (
        <div className='lmj-shopping-list'>
            <Categories
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />

            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light, price, category }) =>
                    !activeCategory || activeCategory === category ? (
                        <div key={id}>
                            <PlantItem
                                cover={cover}
                                name={name}
                                water={water}
                                light={light}
                                price={price}
                            />
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>
                            <button onClick={() => removeFromCart(name, price)}>Retirer</button>
                        </div>
                    ) : null
                )}
            </ul>
        </div>
    )
};

export default ShoppingList;