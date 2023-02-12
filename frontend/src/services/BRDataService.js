import http from "../http-common";

class BRDataService {
  getAll() {
    return http.get("/br_videotrending");
  }

  get(id) {
    return http.get(`/br_videotrending/${id}`);
  }

  getView() {
    return http.get("/br_videotrending/view_count");
  }
  
  getLikes() {
    return http.get("/br_videotrending/likes");
  }

  getDislikes() {
    return http.get("/br_videotrending/dislikes");
  }

  getComment() {
    return http.get("/br_videotrending/comment_count");
  }

  create(data) {
    return http.post("/br_videotrending", data);
  }

  update(id, data) {
    return http.put(`/br_videotrending/${id}`, data);
  }

  delete(id) {
    return http.delete(`/br_videotrending/${id}`);
  }

  deleteAll() {
    return http.delete(`/br_videotrending`);
  }

}

export default new BRDataService();