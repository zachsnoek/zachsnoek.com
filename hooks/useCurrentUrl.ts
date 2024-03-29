import React from 'react';
import { getCurrentUrl } from '../utils/getCurrentUrl';

// Ensures that we only try to access `window` on the client.
export function useCurrentUrl() {
    const [url, setUrl] = React.useState<ReturnType<typeof getCurrentUrl>>({
        url: '',
        origin: '',
    });

    React.useEffect(() => {
        setUrl(getCurrentUrl());
    }, []);

    return url;
}
