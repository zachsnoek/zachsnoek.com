import React, { useState } from "react";
import { Tags } from "../../pages/portfolio/";

const TagsInput = ({ tags, setTags }) => {
    const [tag, setTag] = useState("");

    const addTag = () => {
        setTags((tags) => [...tags, tag.trim()]);
        setTag("");
    };

    return (
        <div className="form-group">
            <label htmlFor="tag">Tags</label>
            <input
                id="tag"
                name="tag"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="form-control"
                type="text"
                autoComplete="off"
            />
            {/* TODO: Disable button if input is empty */}
            <button type="button" onClick={addTag}>
                +
            </button>
            <Tags tags={tags} />
        </div>
    );
};

export default TagsInput;
