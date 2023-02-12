import http from "../http-common";

class CADataService {
  getAll() {
    return http.get("/ca_videotrending");
  }

  get(id) {
    return http.get(`/ca_videotrending/${id}`);
  }

  getView() {
    return http.get("/ca_videotrending/view_count");
  }
  
  getLikes() {
    return http.get("/ca_videotrending/likes");
  }

  getDislikes() {
    return http.get("/ca_videotrending/dislikes");
  }

  getComment() {
    return http.get("/ca_videotrending/comment_count");
  }

  create(data) {
    return http.post("/ca_videotrending", data);
  }

  update(id, data) {
    return http.put(`/ca_videotrending/${id}`, data);
  }

  delete(id) {
    return http.delete(`/ca_videotrending/${id}`);
  }

  deleteAll() {
    return http.delete(`/ca_videotrending`);
  }

}

export default new CADataService();