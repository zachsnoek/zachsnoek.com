import React, { useState } from "react";
import { BasicFormGroup, Tags, Button } from "components/shared";

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
            optional
        >
            <Button
                type="button"
                size="sm"
                className="mr-1"
                onClick={addTag}
                disabled={tag ? false : true}
            >
                + Add Tag
            </Button>

            {tags.length > 0 && (
                <Button
                    type="button"
                    variant="danger"
                    size="sm"
                    onClick={resetTags}
                >
                    Reset tags
                </Button>
            )}

            <Tags tags={tags} />
        </BasicFormGroup>
    );
};

export default TagsInput;
