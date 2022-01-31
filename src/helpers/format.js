import { NO_RATE, GOOD_RATE, BAD_RATE } from '../constants/formatMovie';

export const formatRuntime = (runtime) => {
    if (typeof runtime !== 'number' || !Number.isFinite(runtime) || runtime < 1)
        return 'null';
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
};

export const formatRate = (rate) => (rate ? `${rate}` : NO_RATE);

export const getRateState = (rate) => {
    if (rate === null) return BAD_RATE;
    const rateToNumber = Number(rate);
    if (!Number.isFinite(rateToNumber) || rateToNumber < 7) return BAD_RATE;
    return GOOD_RATE;
};

export const normalizeFilters = (filters) => Object.entries(filters).reduce((acc, [key, value]) => value || value === 0 ? {...acc, [key]: value} : acc, {});