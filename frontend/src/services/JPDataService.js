import http from "../http-common";

class JPDataService {
  getAll() {
    return http.get("/jp_videotrending");
  }

  get(id) {
    return http.get(`/jp_videotrending/${id}`);
  }

  getView() {
    return http.get("/jp_videotrending/view_count");
  }
  
  getLikes() {
    return http.get("/jp_videotrending/likes");
  }

  getDislikes() {
    return http.get("/jp_videotrending/dislikes");
  }

  getComment() {
    return http.get("/jp_videotrending/comment_count");
  }

  create(data) {
    return http.post("/jp_videotrending", data);
  }

  update(id, data) {
    return http.put(`/jp_videotrending/${id}`, data);
  }

  delete(id) {
    return http.delete(`/jp_videotrending/${id}`);
  }

  deleteAll() {
    return http.delete(`/jp_videotrending`);
  }

}

export default new JPDataService();