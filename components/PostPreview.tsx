import styled from 'styled-components';
import { Link } from './Link';
import { Date } from './Date';
import { Spacer } from './Spacer';
import { Post } from '../utils/posts';

type Props = { post: Post };

export function PostPreview({ post }: Props) {
    const { id, title, description, date, originalPost } = post;
    const href = originalPost?.isExclusive ? originalPost.url : `/blog/${id}`;

    return (
        <article>
            <Wrapper href={href}>
                <Title>{title}</Title>
                <Spacer size={1} />
                <PostDate date={date} />
                <Spacer size={3} />
                <p>{description}</p>
                <Spacer size={3} />
            </Wrapper>
        </article>
    );
}

const Wrapper = styled(Link)`
    display: block;
    cursor: pointer;

    &:hover {
        color: inherit;
    }
`;

const Title = styled.h3`
    ${Wrapper}:hover & {
        color: var(--clickable-hover-color);
    }
`;

const PostDate = styled(Date)`
    font-size: var(--font-size-sm);
`;
