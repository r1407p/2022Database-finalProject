import http from "../http-common";

class DEDataService {
  getAll() {
    return http.get("/de_videotrending");
  }

  get(id) {
    return http.get(`/de_videotrending/${id}`);
  }

  getView() {
    return http.get("/de_videotrending/view_count");
  }
  
  getLikes() {
    return http.get("/de_videotrending/likes");
  }

  getDislikes() {
    return http.get("/de_videotrending/dislikes");
  }

  getComment() {
    return http.get("/de_videotrending/comment_count");
  }

  create(data) {
    return http.post("/de_videotrending", data);
  }

  update(id, data) {
    return http.put(`/de_videotrending/${id}`, data);
  }

  delete(id) {
    return http.delete(`/de_videotrending/${id}`);
  }

  deleteAll() {
    return http.delete(`/de_videotrending`);
  }

}

export default new DEDataService();