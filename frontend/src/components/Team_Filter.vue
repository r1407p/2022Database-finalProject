<template>
  <div
    class="filter_background md:min-w-[200px] lg:min-w-[240px] max-w-[302px]"
  >
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
</template>

<script>
export default {
  data() {
    return {
      list: [
        { text: '前十最多觀看' },
        { text: '前十最多喜歡' },
        { text: '前十最多不喜歡' },
        { text: '前十留言數最多' }
      ],
      is_show_list: false,
      list_select: ''
    }
  },
  methods: {
    click_show_list() {
      this.is_show_list = !this.is_show_list
    },
    click_on_radio_list($event) {
      if (this.list_select == $event.target._value) {
        this.list_select = ''
      }
    },
  },
}
</script>

<style>
.filter_background {
  background: #f5f5f5;
  padding-top: 13px;
  padding-bottom: 13px;
  height: fit-content;
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
</style>
