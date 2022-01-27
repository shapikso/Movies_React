import { NO_RATE } from '../constants/formatMovie';

export const formatRuntime = (runtime) => {
    if (typeof runtime !== 'number' || !Number.isFinite(runtime) || runtime < 1)
        return 'null';
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
};

export const formatRate = (rate) => (rate ? `${rate}` : NO_RATE);
