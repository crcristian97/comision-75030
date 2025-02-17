export function splitProduct(product = ''){
    return product.split(',');
};

export function setInfoStorage( key = '', value = ''){
    localStorage.setItem(key, JSON.stringify(value));
};

export function getInfoStorage(key = ''){
    return JSON.parse(localStorage.getItem(key));
};

