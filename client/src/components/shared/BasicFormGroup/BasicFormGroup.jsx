import React from "react";
import Form from "react-bootstrap/Form";

const BasicFormGroup = ({
    as,
    name,
    label,
    value,
    onChange,
    type,
    placeholder,
    optional,
    autoFocus,
    autoComplete,
    rows,
}) => {
    return (
        <Form.Group>
            <Form.Label htmlFor={name}>{label}</Form.Label>
            <Form.Control
                as={as || "input"}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                type={type || "text"}
                placeholder={placeholder}
                required={!optional}
                autoFocus={autoFocus}
                autoComplete={!autoComplete ? "off" : ""}
                rows={rows}
            />
        </Form.Group>
    );
};

export default BasicFormGroup;
