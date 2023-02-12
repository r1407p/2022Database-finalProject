import http from "../http-common";

class MXDataService {
  getAll() {
    return http.get("/mx_videotrending");
  }

  get(id) {
    return http.get(`/mx_videotrending/${id}`);
  }

  getView() {
    return http.get("/mx_videotrending/view_count");
  }
  
  getLikes() {
    return http.get("/mx_videotrending/likes");
  }

  getDislikes() {
    return http.get("/mx_videotrending/dislikes");
  }

  getComment() {
    return http.get("/mx_videotrending/comment_count");
  }

  create(data) {
    return http.post("/mx_videotrending", data);
  }

  update(id, data) {
    return http.put(`/mx_videotrending/${id}`, data);
  }

  delete(id) {
    return http.delete(`/mx_videotrending/${id}`);
  }

  deleteAll() {
    return http.delete(`/mx_videotrending`);
  }

}

export default new MXDataService();