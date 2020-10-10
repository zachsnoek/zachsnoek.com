import React, { useState } from "react";
import PropTypes from "prop-types";

const PositionSelect = ({ _id, numOptions, position, updatePosition }) => {
    const [value, setValue] = useState(position);
    let options = [];

    for (let i = 1; i <= numOptions; i++) {
        options.push(
            <option value={`${i}`} key={i}>
                {i}
            </option>
        );
    }

    const handleChange = (e) => {
        const newPosition = Number(e.target.value);
        setValue(newPosition);
        updatePosition(_id, newPosition);
    };

    return (
        <select value={value} onChange={handleChange}>
            {options}
        </select>
    );
};

PositionSelect.propTypes = {
    _id: PropTypes.string.isRequired,
    numOptions: PropTypes.number.isRequired,
    position: PropTypes.number.isRequired,
    updatePosition: PropTypes.func.isRequired,
};

export default PositionSelect;
