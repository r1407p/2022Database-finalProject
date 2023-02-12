import http from "../http-common";

class GBDataService {
  getAll() {
    return http.get("/gb_videotrending");
  }

  get(id) {
    return http.get(`/gb_videotrending/${id}`);
  }

  getView() {
    return http.get("/gb_videotrending/view_count");
  }
  
  getLikes() {
    return http.get("/gb_videotrending/likes");
  }

  getDislikes() {
    return http.get("/gb_videotrending/dislikes");
  }

  getComment() {
    return http.get("/gb_videotrending/comment_count");
  }

  create(data) {
    return http.post("/gb_videotrending", data);
  }

  update(id, data) {
    return http.put(`/gb_videotrending/${id}`, data);
  }

  delete(id) {
    return http.delete(`/gb_videotrending/${id}`);
  }

  deleteAll() {
    return http.delete(`/gb_videotrending`);
  }

}

export default new GBDataService();