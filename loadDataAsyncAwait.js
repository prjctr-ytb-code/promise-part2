import {API_URL} from './constants.js';

const loadData = async () => {
    try {
        const response = await fetch(API_URL);
        return await response.json();
    } catch (error) {
        throw new Error(error);
    } finally {
        console.log('Done!')
    }
}

(async () => {
    const data = await loadData();

    console.log(data);
})()
