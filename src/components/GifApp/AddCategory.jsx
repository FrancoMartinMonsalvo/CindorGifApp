import { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState([]);

    const onInputValue = ({ target }) => {
        setInputValue(target.value);
    }
    const onSubmit = (event) => {

        event.preventDefault();
        //el condicional de abajo lo que hara será retornar si 
        //el largo del input es menor igual a 1, es decir, no tiene
        //caracteres, no manda el input
        if (inputValue.trim().length <= 1) return;

        setInputValue('');
        onNewCategory(inputValue.trim());

        //eso es para que una vez mande el input, se limpie el espacio

    }

    return (
        <form onSubmit={onSubmit} aria-label='form'>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputValue}
            />
        </form>


    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,

}
