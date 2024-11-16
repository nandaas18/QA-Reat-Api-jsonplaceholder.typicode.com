import axiosInstance from "../libs/axiosInstance.js";

export function get_single_comment(id) {
  return axiosInstance.get("/comments/" + id);
}
