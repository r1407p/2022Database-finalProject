import http from "../http-common";

class RUDataService {
  getAll() {
    return http.get("/ru_videotrending");
  }

  get(id) {
    return http.get(`/ru_videotrending/${id}`);
  }

  getView() {
    return http.get("/ru_videotrending/view_count");
  }
  
  getLikes() {
    return http.get("/ru_videotrending/likes");
  }

  getDislikes() {
    return http.get("/ru_videotrending/dislikes");
  }

  getComment() {
    return http.get("/ru_videotrending/comment_count");
  }

  create(data) {
    return http.post("/ru_videotrending", data);
  }

  update(id, data) {
    return http.put(`/ru_videotrending/${id}`, data);
  }

  delete(id) {
    return http.delete(`/ru_videotrending/${id}`);
  }

  deleteAll() {
    return http.delete(`/ru_videotrending`);
  }

}

export default new RUDataService();