import {API_URL} from './constants.js';

const loadData = () => {
    return fetch(API_URL)
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            throw new Error(error);
        })
        .finally(() => {
            console.log('Done!')
        })
}

loadData().then((data) => console.log(data));
