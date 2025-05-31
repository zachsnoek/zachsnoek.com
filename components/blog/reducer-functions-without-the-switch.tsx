import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

export interface UseToggleProps {
    initialState?: boolean;
}

export interface UseSelectionProps<T> {
    isEqual?: (prev: T | null, next: T) => boolean;
    initialState?: T | null;
}

export interface UseMultiSelectionProps<T> {
    isEqual?: (prev: T, next: T) => boolean;
    initialState?: T[];
}

function useToggle({ initialState = false }: UseToggleProps = {}): [
    boolean,
    () => void
] {
    const [isEnabled, toggle] = React.useReducer((x) => !x, initialState);

    return [isEnabled, toggle];
}

function useSelection<T>({
    isEqual = (prev, next) => prev === next,
    initialState = null,
}: UseSelectionProps<T> = {}): [T | null, (next: T) => void] {
    const [selection, setSelection] = React.useReducer(
        (prev: T | null, next: T) => (isEqual(prev, next) ? null : next),
        initialState
    );

    return [selection, setSelection];
}

function useMultiSelection<T>({
    isEqual = (prev, next) => prev === next,
    initialState = [],
}: UseMultiSelectionProps<T> = {}): [T[], (next: T) => void] {
    const [selection, setSelection] = React.useReducer((prev: T[], next: T) => {
        const index = prev.findIndex((x) => isEqual(x, next));
        return index === -1
            ? [...prev, next]
            : prev.filter((_, i) => i !== index);
    }, initialState);

    return [selection, setSelection];
}

const Wrapper = styled.div`
    border: 1px solid var(--color-pink-500);
    border-radius: var(--border-radius-2);
    padding: var(--spacing-4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ToggleButton = styled(Button)<{ isEnabled: boolean }>`
    background: ${(p) => (p.isEnabled ? '#4fbe79' : '#bebebe')};
`;

export function UseToggleDemo() {
    const [isEnabled, toggle] = useToggle();

    return (
        <Wrapper>
            <p>Enabled: {isEnabled ? 'Yes' : 'No'}</p>
            <ToggleButton onClick={toggle} isEnabled={isEnabled}>
                Toggle
            </ToggleButton>
        </Wrapper>
    );
}

interface Song {
    id: number;
    title: string;
    artist: string;
}

const songs: Song[] = [
    { id: 1, title: 'Accidentally in Love', artist: 'Counting Crows' },
    { id: 2, title: 'Holding Out for a Hero', artist: 'Bonnie Tyler' },
    { id: 3, title: "I'm a Believer", artist: 'Smash Mouth' },
    { id: 4, title: 'All Star', artist: 'Smash Mouth' },
];

const SongButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: max-content;
    gap: 4px;
`;

const SongButton = styled(Button)<{ isSelected: boolean }>`
    background: ${(p) => (p.isSelected ? '#4fbe79' : '#bebebe')};
`;

export function UseSelectionDemo() {
    const [favoriteSong, selectFavoriteSong] = useSelection<Song>({
        isEqual: (prev, next) => prev?.id === next.id,
    });

    return (
        <Wrapper>
            <p>Select your favorite song:</p>
            <SongButtonWrapper>
                {songs.map((x) => (
                    <SongButton
                        key={x.id}
                        onClick={() => selectFavoriteSong(x)}
                        isSelected={favoriteSong?.id === x.id}
                    >
                        {x.title}
                    </SongButton>
                ))}
            </SongButtonWrapper>
        </Wrapper>
    );
}

export function UseMultiSelectionDemo() {
    const [favoriteSongs, selectFavoriteSong] = useMultiSelection<Song>({
        isEqual: (prev, next) => prev?.id === next.id,
    });

    return (
        <Wrapper>
            <p>Select your favorite songs:</p>
            <SongButtonWrapper>
                {songs.map((x) => (
                    <SongButton
                        key={x.id}
                        onClick={() => selectFavoriteSong(x)}
                        isSelected={
                            !!favoriteSongs.find((song) => x.id === song.id)
                        }
                    >
                        {x.title}
                    </SongButton>
                ))}
            </SongButtonWrapper>
        </Wrapper>
    );
}
