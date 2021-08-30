import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = function (e) {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            setCategories(categories => [inputValue, ...categories]);
            setInputValue('');
        }
    }

    const handleInputChange = function (e) {
            setInputValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory;
