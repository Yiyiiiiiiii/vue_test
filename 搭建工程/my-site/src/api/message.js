import request from "./request";

export async function getMessage() {
    return await request.get("api/message");
}