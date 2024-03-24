const cache = {};

const hasItem = (key) => {
    return cache.hasOwnProperty(key);
}

const getItem = (key) => {
    return cache[key];
}

const setItem = (key, value) => {
    cache[key] = value;
}

export {
    hasItem,
    getItem,
    setItem
}