// import axios from "axios";
// export async function getBanner() {
//     const resp = await axios.get("/api/banner");
//     console.log(resp.data);
// }

// getBanner();

import request from "./request";

export async function getBanner() {
    return await request.get("/api/banner");
}