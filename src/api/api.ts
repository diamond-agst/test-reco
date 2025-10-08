import axios from "axios";

const API_URL =
  "https://recotest.pythonanywhere.com/api/v1/app-service/get-apps";

export interface GetAppsPayload {
  appName: string;
  category: string;
  pageNumber: number;
  pageSize: number;
}

export async function getApp(payload: GetAppsPayload) {
    const res = await axios.put(API_URL, payload);
    return res.data;
}
