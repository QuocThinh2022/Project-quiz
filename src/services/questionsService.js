import { get } from "../utils/request";

export async function getListQuestions(id) {
    return await get(`questions?topicId=` + id);
}