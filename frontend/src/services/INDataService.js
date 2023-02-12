import http from "../http-common";

class INDataService {
  getAll() {
    return http.get("/in_videotrending");
  }

  get(id) {
    return http.get(`/in_videotrending/${id}`);
  }

  getView() {
    return http.get("/in_videotrending/view_count");
  }
  
  getLikes() {
    return http.get("/in_videotrending/likes");
  }

  getDislikes() {
    return http.get("/in_videotrending/dislikes");
  }

  getComment() {
    return http.get("/in_videotrending/comment_count");
  }

  create(data) {
    return http.post("/in_videotrending", data);
  }

  update(id, data) {
    return http.put(`/in_videotrending/${id}`, data);
  }

  delete(id) {
    return http.delete(`/in_videotrending/${id}`);
  }

  deleteAll() {
    return http.delete(`/in_videotrending`);
  }

}

export default new INDataService();