var app = new Vue({
  el:"#app",
  data:{
    message:{
      value:"Hello Vue.js"
    },
    list:[1,2,3],
    num:1,
    scroll:0,
    count:0,
    isChild:true,
    isActive:true,
    styleObj: {
      color: '#3333dd',
      // backgroundColor: 'lightblue'
    }
  },
  methods: {
    increment: function(){
      this.count += 1
    }
  },
  mounted:function(){
    this.scroll=100
  },
  
})