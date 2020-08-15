import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handledInputChange = ({ target }) => {
        // Mediante [ target.name ] se computa de forma dinamica
        // el nombre del atributo en un objeto json
        // esto nos permite crear codigo dinamico
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    };
    
    return [ values, handledInputChange, reset ];
}
