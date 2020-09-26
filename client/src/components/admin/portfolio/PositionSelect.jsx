import React, { useState } from "react";

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
        setValue(e.target.value);
        updatePosition(_id, e.target.value);
    };

    return (
        <select value={value} onChange={handleChange}>
            {options}
        </select>
    );
};

export default PositionSelect;
