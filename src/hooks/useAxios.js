import {useState} from 'react'
import axios from 'axios'
import uuid from "uuid";

//takes a url argument to pass down to our request
const useAxios = (url) => {
    //state initialized to empty array that is going to be filled in with api data
    const [state, setState] = useState([])
    const addState = async() => {
        const res = await axios.get(url)
        setState(state => [...state, {...res.data, id: uuid()}])
        console.log(res.data)
    }
    return [state, addState]
}

export default useAxios

// const addCard = async () => {
//     const response = await axios.get(
//       "https://deckofcardsapi.com/api/deck/new/draw/"
//     );
//     setCards(cards => [...cards, { ...response.data, id: uuid() }]);
//   };