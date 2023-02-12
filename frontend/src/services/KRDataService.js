import http from "../http-common";

class KRDataService {
  getAll() {
    return http.get("/kr_videotrending");
  }

  get(id) {
    return http.get(`/kr_videotrending/${id}`);
  }

  getView() {
    return http.get("/kr_videotrending/view_count");
  }
  
  getLikes() {
    return http.get("/kr_videotrending/likes");
  }

  getDislikes() {
    return http.get("/kr_videotrending/dislikes");
  }

  getComment() {
    return http.get("/kr_videotrending/comment_count");
  }

  create(data) {
    return http.post("/kr_videotrending", data);
  }

  update(id, data) {
    return http.put(`/kr_videotrending/${id}`, data);
  }

  delete(id) {
    return http.delete(`/kr_videotrending/${id}`);
  }

  deleteAll() {
    return http.delete(`/kr_videotrending`);
  }

}

export default new KRDataService();