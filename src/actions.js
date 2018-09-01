import {CHANGE_SEARCH_FIELD} from './constants.js';

export const setSarchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})