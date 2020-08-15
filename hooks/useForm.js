import { useState } from 'react';
import PropTypes from 'prop-types';

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handledInputChange = ({ target }) => {
        // [ target.name ]: It's the name of the field
        // target.value: It's the value of the field
        // This is a dynamic code
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    };
    
    return [ values, handledInputChange, reset ];
}

useForm.propTypes = {
    initialState: PropTypes.object
};