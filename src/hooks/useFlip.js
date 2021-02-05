import {useState} from 'react'

const useToggle = (initial = true) => {
    const [state, setState] = useState(initial)
    const stateChange = () => {
        setState(state => !state)
    }
    return [state, stateChange]
}

export default useToggle