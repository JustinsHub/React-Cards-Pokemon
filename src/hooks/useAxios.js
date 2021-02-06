import {useState} from 'react'
import axios from 'axios'
import uuid from "uuid";

//takes a url argument to pass down to our request
const useAxios = (url) => {
    //state initialized to empty array that is going to be filled in with api data
    const [state, setState] = useState([])
    const addState = async(name = '') => {
        const res = (name) ? await axios.get(`${url}${name}`) : await axios.get(url)
    
        setState(state => [...state, {...res.data, id: uuid()}])
    }
    return [state, addState]
}

export default useAxios

// const addPokemon = async name => {
//     const response = await axios.get(
//       `https://pokeapi.co/api/v2/pokemon/${name}/`
//     );
//     setPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);
//   };

// const addCard = async () => {
//     const response = await axios.get(
//       "https://deckofcardsapi.com/api/deck/new/draw/"
//     );
//     setCards(cards => [...cards, { ...response.data, id: uuid() }]);
//   };