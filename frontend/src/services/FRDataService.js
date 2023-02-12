import http from "../http-common";

class FRDataService {
  getAll() {
    return http.get("/fr_videotrending");
  }

  get(id) {
    return http.get(`/fr_videotrending/${id}`);
  }

  getView() {
    return http.get("/fr_videotrending/view_count");
  }
  
  getLikes() {
    return http.get("/fr_videotrending/likes");
  }

  getDislikes() {
    return http.get("/fr_videotrending/dislikes");
  }

  getComment() {
    return http.get("/fr_videotrending/comment_count");
  }

  create(data) {
    return http.post("/fr_videotrending", data);
  }

  update(id, data) {
    return http.put(`/fr_videotrending/${id}`, data);
  }

  delete(id) {
    return http.delete(`/fr_videotrending/${id}`);
  }

  deleteAll() {
    return http.delete(`/fr_videotrending`);
  }

}

export default new FRDataService();