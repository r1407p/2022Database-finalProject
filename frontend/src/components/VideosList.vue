<template>
    <div class="list row">
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search by title"
            v-model="title"/>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button"
              @click="searchTitle"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <h4>Videos List</h4>
        <ul class="list-group">
          <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(video, index) in videos"
            :key="index"
            @click="setActiveVideo(video, index)"
          >
            {{ video.title }}
          </li>
        </ul>
  
        <button class="m-3 btn btn-sm btn-danger" @click="removeAllVideos">
          Remove All
        </button>
      </div>
      <div class="col-md-6">
        <div v-if="currentVideo">
          <h4>Video</h4>
          <div>
            <label><strong>Title:</strong></label> {{ currentVideo.title }}
          </div>
          <div>
            <label><strong>Description:</strong></label> {{ currentVideo.description }}
          </div>
          <div>
            <label><strong>Status:</strong></label> {{ currentVideo.published ? "Published" : "Pending" }}
          </div>
  
          <router-link :to="'/videos/' + currentVideo.id" class="badge badge-warning">Edit</router-link>
        </div>
        <div v-else>
          <br />
          <p>Please click on a Video...</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import VideoDataService from "../services/VideoDataService";
  
  export default {
    name: "videos-list",
    data() {
      return {
        videos: [],
        currentVideo: null,
        currentIndex: -1,
        title: ""
      };
    },
    methods: {
      retrieveVideos() {
        VideoDataService.getAll()
          .then(response => {
            this.videos = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      refreshList() {
        this.retrieveVideos();
        this.currentVideo = null;
        this.currentIndex = -1;
      },
  
      setActiveVideo(video, index) {
        this.currentVideo = video;
        this.currentIndex = video ? index : -1;
      },
  
      removeAllVideos() {
        VideoDataService.deleteAll()
          .then(response => {
            console.log(response.data);
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      searchTitle() {
        VideoDataService.findByTitle(this.title)
          .then(response => {
            this.videos = response.data;
            this.setActiveVideo(null);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.retrieveVideos();
    }
  };
  </script>
  
  <style>
  .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
  }
  </style>