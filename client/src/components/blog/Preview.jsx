import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { deletePost } from "../../utils/api";
import { formatDate } from "../../utils/date";

const Preview = withRouter(
    ({ id, title, description, createdAt, loadPosts, history }) => {
        const { user } = useContext(UserContext);

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
            history.push(`/edit-post/${id}`);
        };

        return (
            <>
                {user?.authenticated && (
                    <>
                        <button onClick={handleDeletePost}>Delete</button>
                        <button onClick={editPost}>Edit</button>
                    </>
                )}

                <Link className="card" to={`/blog/${id}`}>
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <span className="card-title">{title}</span>
                        <span className="badge badge-info">
                            {formatDate(createdAt)}
                        </span>
                    </div>
                    <div className="card-body">
                        <span>{description}</span>
                    </div>
                </Link>
            </>
        );
    }
);
export default Preview;
