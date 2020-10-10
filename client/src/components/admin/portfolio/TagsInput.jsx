import React, { useState } from "react";
import { Tags } from "components/pages";
import Form from "react-bootstrap/Form";

const TagsInput = ({ tags, setTags }) => {
    const [tag, setTag] = useState("");

    const addTag = () => {
        setTags((tags) => [...tags, tag.trim()]);
        setTag("");
    };

    const resetTags = () => setTags([]);

    return (
        <Form.Group>
            <Form.Label htmlFor="tag">Tags</Form.Label>
            <Form.Control
                id="tag"
                name="tag"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                type="text"
                autoComplete="off"
            />

            <button
                type="button"
                onClick={addTag}
                disabled={tag ? false : true}
            >
                +
            </button>

            {tags.length > 0 && (
                <button type="button" onClick={resetTags}>
                    Reset tags
                </button>
            )}

            <Tags tags={tags} />
        </Form.Group>
    );
};

export default TagsInput;
