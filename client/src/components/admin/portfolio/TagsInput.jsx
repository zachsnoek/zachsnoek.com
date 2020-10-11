import React, { useState } from "react";
import { Tags } from "components/pages";
import { BasicFormGroup } from "components/shared";

const TagsInput = ({ tags, setTags }) => {
    const [tag, setTag] = useState("");

    const addTag = () => {
        setTags((tags) => [...tags, tag.trim()]);
        setTag("");
    };

    const resetTags = () => setTags([]);

    return (
        <BasicFormGroup
            label="Tags"
            name="tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
        >
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
        </BasicFormGroup>
    );
};

export default TagsInput;
