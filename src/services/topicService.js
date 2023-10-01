import { get } from "../utils/request";


export async function getListTopic() {
    return await get(`topics`);
}

export async function getTopic(id) {
    return await get(`topics/` + id);
}