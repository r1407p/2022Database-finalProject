<template>
    <div class="flex">
        <div class="filter_background">
            <p class = "filter_text_title"> 篩選條件
                <img src = "@/assets/teampage/minus.svg" class = "filter_plus_minus" v-if = "is_show_list" @click = "click_show_list">
                <img src = "@/assets/teampage/plus.svg" class = "filter_plus_minus" v-else @click = "click_show_list">
            </p>
            
            <ul  v-if = is_show_list>
                <p class = "filter_text" v-for = "country in list" :key = "country">
                <input type="radio" @click = "click_on_radio_list($event)"  :id = "country.text" :value = "country.text" v-model = "list_select">
                {{country.text}}
                </p>
            </ul>	
            
        </div>
        <div  class = "videos">
          <ul>
            <div v-for="video in videos" :key = "video.title" >
              <div class = "main_video_box">
                <div>
                <a :href = video_id_to_link(video.video_id) class = 'title'>{{ video.title }}</a>
                <div class = "flex">
                  <img :src="video.thumbnail_link" :alt="video.title" class = 'pic'>
                  <div class = 'channel_box'>
                    <a :href = channel_id_to_link(video.channel_id) class = 'channel_title'>頻道: {{ video.channel_title }}</a>
                    <p class = 'date'>發布時間: {{video.publish_at}}</p>
                    <p class = 'date'>上次更新: {{video.trending_date}}</p>
                  </div>
                  <div>
                    <div class = 'flex_1'>
                      <img src = '../assets/play.png' class = 'icon'>
                      <p class = 'digit'>   : {{video.view_count}}</p>
                    </div>
                    <div class = 'flex_1'>
                      <img src = '../assets/like.png' class = 'icon'>
                      <p class = 'digit'>   : {{video.likes}}</p>
                    </div>
                    <div class = 'flex_1'>
                      <img src = '../assets/dislike.png' class = 'icon'>
                      <p class = 'digit'>   : {{video.dislikes}}</p>
                    </div>
                    <div class = 'flex_1'>
                      <img src = '../assets/comment.png' class = 'icon'>
                      <p class = 'digit'>   : {{video.comment_count}}</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </ul>
  
        </div>
    </div>
    
  </template>
  
  <script>
  import DEDataService from "../services/DEDataService";

  export default {
    data() {
      return {

        videos: [],
        list: [
          { text: '前十最多觀看' },
          { text: '前十最多喜歡' },
          { text: '前十最多不喜歡' },
          { text: '前十留言數最多' }
        ],
        is_show_list: false
      }
    },
    methods: {
      click_show_list() {
        this.is_show_list = !this.is_show_list
      },

      click_on_radio_list($event) {
        console.log($event.target._value);
        if ('前十最多觀看' == $event.target._value) {
          this.search_view();
        }else if('前十最多喜歡' == $event.target._value) {
          this.search_likes();
        }else if('前十最多不喜歡' == $event.target._value) {
          this.search_dislikes();
        }else if('前十留言數最多' == $event.target._value) {
          this.search_comment();
        }
      },

      search_view() {
        DEDataService.getView()
        .then(response => {
          this.videos = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },
      
      search_likes() {
        DEDataService.getLikes()
        .then(response => {
          this.videos = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },

      search_dislikes() {
        DEDataService.getDislikes()
        .then(response => {
          this.videos = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },

      search_comment() {
        DEDataService.getComment()
        .then(response => {
          this.videos = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },
      
      video_id_to_link(id){
        return "https://www.youtube.com/watch?v="+id
      },
      
      channel_id_to_link(id){
        return "https://www.youtube.com/channel/"+id
      },
      
      retrieveVideos() {
        DEDataService.getAll()
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
        DEDataService.deleteAll()
          .then(response => {
            console.log(response.data);
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
  }
  </script>
  
  <style>
  .filter_background {
    background: #f5f5f5;
    padding-top: 13px;
    padding-bottom: 13px;
    height: fit-content;
    width:300px;
    box-shadow: inset -4px -4px 8px rgba(221, 220, 220, 0.8),
      inset 4px 4px 8px rgba(187, 187, 187, 0.8);
    border-radius: 32px;
  }
  .filter_plus_minus {
    float: right;
    margin-right: 26px;
    text-align: right;
  }
  .filter_text {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    align-items: center;
    text-align: left;
    margin-left: 26px;
    color: #7190fe;
  }
  .filter_text_title {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    margin-left: 26px;
    color: #7190fe;
    justify-content: space-between;
  }
  .filter_line {
    width: auto;
    background: linear-gradient(
      259deg,
      #d39cff -9.61%,
      rgba(180, 197, 254, 0.852278) 62.12%,
      rgba(147, 241, 254, 0.695417) 102.26%,
      rgba(240, 222, 255, 0.32) 121%
    );
  }
  .flex{
    display: flex;
  }
  .flex_1{
    display: flex;
    align-items: center;
  }
  .main_video_box {
    padding:20px;
    margin : 20px;
    width: 900px;
    left: 0px;
    top: 0px;
    border-radius: 20px;
    background-color: white;
    box-shadow: 4px 4px 4px 0px #BBCAFACF,
                4px 4px 4px 0px #E4F4FF inset;
  }
  .channel_box{
    margin:10px;
    margin-left:40px;
    margin-right:40px;
  }
  .pic{
    height:200px;
  }
  .channel_title{
    height:100px;
    margin-bottom: 100px;
    text-align: center;
    font-weight: bolder;
  }
  .title{
    font-size: 30px;
    color:blue;
    font-weight: bolder;
  }
  .date{
    margin-top:20px;
    height:60px;
  }
  .icon{
    height:30px;
  }
  .digit{
    margin-top:16px;
  }
  </style>
  