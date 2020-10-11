import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

const BasicFormGroup = ({
    label,
    name,
    as,
    type,
    optional,
    children,
    ...props
}) => {
    return (
        <Form.Group>
            <Form.Label htmlFor={name}>{label}</Form.Label>
            <Form.Control
                as={as || "input"}
                id={name}
                name={name}
                type={type || "text"}
                required={!optional}
                {...props}
            />
            {children}
        </Form.Group>
    );
};

BasicFormGroup.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    as: PropTypes.string,
    type: PropTypes.string,
    optional: PropTypes.bool,
    children: PropTypes.array,
};

export default BasicFormGroup;
