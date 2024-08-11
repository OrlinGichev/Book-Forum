import { useState } from "react"


export default function useLocalStorageState(key, defaultValue) {

    const [state, setState] = useState(() => {

            const localStorageState = localStorage.getItem(key);

            if(localStorageState) {
                 return JSON.parse(localStorageState);
            }

            return defaultValue;
        });

    const setLocalStorageState = (value) => {
        setState(value);
        let modifyValue;

        if(typeof value === 'function') {
            modifyValue = JSON.stringify(value(state));
        }else {
            modifyValue = JSON.stringify(value);
        }

        localStorage.setItem(key, modifyValue);
    };

    return [
        state,
        setLocalStorageState
    ];
}