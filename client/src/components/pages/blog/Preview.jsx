import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { Card } from "components/shared";
import { useUserContext } from "context/useUserContext";
import { deletePost } from "utils/api";
import { formatDate } from "utils/date";

const Preview = withRouter(
    ({ id, slug, title, description, createdAt, loadPosts, history }) => {
        const { user } = useUserContext();

        const handleDeletePost = async () => {
            const response = await deletePost(id);

            if (response.ok) {
                loadPosts();
            } else {
                // TODO: handle error
                console.log(response);
            }
        };

        const editPost = () => {
            history.push(`/edit-post/${slug}/${id}`);
        };

        return (
            <>
                {user?.authenticated && (
                    <>
                        <button onClick={handleDeletePost}>Delete</button>
                        <button onClick={editPost}>Edit</button>
                    </>
                )}

                <Link to={`/blog/${slug}`}>
                    <Card>
                        <Card.Header className="center-contents justify-content-between">
                            <Card.Title>{title}</Card.Title>
                            <span className="badge badge-info">
                                {formatDate(createdAt)}
                            </span>
                        </Card.Header>
                        <Card.Body>
                            <span>{description}</span>
                        </Card.Body>
                    </Card>
                </Link>
            </>
        );
    }
);

Preview.propTypes = {
    id: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    loadPosts: PropTypes.func.isRequired,
};

export default Preview;
