import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useUserContext } from "context/useUserContext";
import { deletePost } from "utils/api";
import { formatDate } from "utils/date";
import Card from "react-bootstrap/Card";

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
                    <Card.Header className="d-flex align-items-center justify-content-between">
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
export default Preview;
