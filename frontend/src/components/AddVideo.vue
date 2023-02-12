<template>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            required
            v-model="video.title"
            name="title"
          />
        </div>
  
        <div class="form-group">
          <label for="description">Description</label>
          <input
            class="form-control"
            id="description"
            required
            v-model="video.description"
            name="description"
          />
        </div>
  
        <button @click="saveVideo" class="btn btn-success">Submit</button>
      </div>
  
      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" @click="newVideo">Add</button>
      </div>
    </div>
  </template>
  
  <script>
  import VideoDataService from "../services/VideoDataService";
  
  export default {
    name: "add-video",
    data() {
      return {
        video: {
          id: null,
          title: "",
          description: "",
          published: false
        },
        submitted: false
      };
    },
    methods: {
      saveVideo() {
        var data = {
          title: this.video.title,
          description: this.video.description
        };
  
        VideoDataService.create(data)
          .then(response => {
            this.video.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      newVideo() {
        this.submitted = false;
        this.video = {};
      }
    }
  };
  </script>
  
  <style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>