import clsx from 'clsx';
import React from 'react';
import { Button } from '../../../components/Button/Button';
import { ButtonProps } from '../../../components/Button/types';
import styles from './components.module.css';

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

export function UseToggleDemo() {
    const [isEnabled, toggle] = useToggle();

    return (
        <div className={styles.wrapper}>
            <p>Enabled: {isEnabled ? 'Yes' : 'No'}</p>
            <ToggleButton onClick={toggle} isEnabled={isEnabled}>
                Toggle
            </ToggleButton>
        </div>
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

function ToggleButton({
    isEnabled,
    ...rest
}: { isEnabled: boolean } & ButtonProps) {
    return (
        <Button
            className={clsx(
                styles.toggleButton,
                isEnabled && styles.toggleButtonEnabled
            )}
            {...rest}
        />
    );
}

export function UseSelectionDemo() {
    const [favoriteSong, selectFavoriteSong] = useSelection<Song>({
        isEqual: (prev, next) => prev?.id === next.id,
    });

    return (
        <div className={styles.wrapper}>
            <p>Select your favorite song:</p>
            <div className={styles.buttonGroup}>
                {songs.map((x) => (
                    <ToggleButton
                        key={x.id}
                        onClick={() => selectFavoriteSong(x)}
                        isEnabled={favoriteSong?.id === x.id}
                    >
                        {x.title}
                    </ToggleButton>
                ))}
            </div>
        </div>
    );
}

export function UseMultiSelectionDemo() {
    const [favoriteSongs, selectFavoriteSong] = useMultiSelection<Song>({
        isEqual: (prev, next) => prev?.id === next.id,
    });

    return (
        <div className={styles.wrapper}>
            <p>Select your favorite songs:</p>
            <div className={styles.buttonGroup}>
                {songs.map((x) => (
                    <ToggleButton
                        key={x.id}
                        onClick={() => selectFavoriteSong(x)}
                        isEnabled={
                            !!favoriteSongs.find((song) => x.id === song.id)
                        }
                    >
                        {x.title}
                    </ToggleButton>
                ))}
            </div>
        </div>
    );
}
