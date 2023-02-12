<template>
    <div v-if="currentVideo" class="edit-form">
      <h4>Video</h4>
      <form>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title"
            v-model="currentVideo.title"
          />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input type="text" class="form-control" id="description"
            v-model="currentVideo.description"
          />
        </div>
  
        <div class="form-group">
          <label><strong>Status:</strong></label>
          {{ currentVideo.published ? "Published" : "Pending" }}
        </div>
      </form>
  
      <button class="badge badge-primary mr-2"
        v-if="currentVideo.published"
        @click="updatePublished(false)"
      >
        UnPublish
      </button>
      <button v-else class="badge badge-primary mr-2"
        @click="updatePublished(true)"
      >
        Publish
      </button>
  
      <button class="badge badge-danger mr-2"
        @click="deleteVideo"
      >
        Delete
      </button>
  
      <button type="submit" class="badge badge-success"
        @click="updateVideo"
      >
        Update
      </button>
      <p>{{ message }}</p>
    </div>
  
    <div v-else>
      <br />
      <p>Please click on a Video...</p>
    </div>
  </template>
  
  <script>
  import VideoDataService from "../services/VideoDataService";
  
  export default {
    name: "the-video",
    data() {
      return {
        currentVideo: null,
        message: ''
      };
    },
    methods: {
      getVideo(id) {
        VideoDataService.get(id)
          .then(response => {
            this.currentVideo = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      updatePublished(status) {
        var data = {
          id: this.currentVideo.id,
          title: this.currentVideo.title,
          description: this.currentVideo.description,
          published: status
        };
  
        VideoDataService.update(this.currentVideo.id, data)
          .then(response => {
            console.log(response.data);
            this.currentVideo.published = status;
            this.message = 'The status was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      updateVideo() {
        VideoDataService.update(this.currentVideo.id, this.currentVideo)
          .then(response => {
            console.log(response.data);
            this.message = 'The video was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      deleteVideo() {
        VideoDataService.delete(this.currentVideo.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "videos" });
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.message = '';
      this.getVideo(this.$route.params.id);
    }
  };
  </script>
  
  <style>
  .edit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>