import { getCookie } from '../helpers/cookie';
import {get, post} from '../utils/request'

export async function createAnswer(option) {
    return await post(`answers`, option);
}

export async function getAnswer(id) {
    return await get(`answers/` + id);
}

export async function getAnswerByUserId() {
    const userId = getCookie('id');
    return await get(`answers?userId=${userId}`);
}