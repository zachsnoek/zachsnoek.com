import React from "react";
import PropTypes from "prop-types";
import { Button } from "components/shared";

const PostControls = ({ onDeletePost, onEditPost }) => {
    return (
        <div className="mb-1">
            <Button variant="danger" onClick={onDeletePost}>
                Delete
            </Button>
            <Button className="ml-1" variant="warning" onClick={onEditPost}>
                Edit
            </Button>
        </div>
    );
};

PostControls.propTypes = {
    onDeletePost: PropTypes.func.isRequired,
    onEditPost: PropTypes.func.isRequired,
};

export default PostControls;
