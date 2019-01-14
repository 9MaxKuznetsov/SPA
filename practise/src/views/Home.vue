<template>
  <div class="home">
    <div v-show="showText" v-html="text" id="text"></div>
    <div v-show="!showText">Important message!</div>
    <hr>
    <button 
      ref="btn" 
      @click="showText = !showText" 
      :disabled="hideBtn" id="btn">        
      Show text!
    </button>
    <hr>
    <ul>
      <li v-for="(item, index) in _users" v-bind:key="index">{{ item.prefix}}{{ item.name }}</li>
    </ul>
  </div>
</template>

<style>
.home {
  background-color: #f2f2f2;
}
</style>


<script>
export default {
  name: 'home',
  data() {
    return {
      text: '<p>Some string</p><p>Some string</p>',
      showText: false,
      hideBtn: true,
      users: [
          {
              name: 'Ivan',
              gender: 'male'
          }, {
              name: 'Chloe',
              gender: 'female'
          }
      ]
  };
},
  computed: {
      _users() {
          return this.users.map(user => {
              const gender = user.gender;
              const prefix = (gender === 'male') ? 'Mr. ' : 'Ms. ';
              user.prefix = prefix;

              return user;
          });
      }
  },
  created() {
      this.enableBtn()
  },
  methods: {
      enableBtn() {
          setTimeout(() => {
          this.hideBtn = false;
      }, 2000);
      }
  }
};
</script>