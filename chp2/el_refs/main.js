var app = new Vue({
  el:"#app",
  data:{
    list:[],
    show:true
  },
  methods: {
    handleClick(){
      var count = this.$refs.count
      if(count){
        count.innerHTML = parseInt(count.innerText,10) + 1
      }
    }
  },
  created: function(){
    console.log(this.$refs.hello)
    console.log(this.$refs.timtim)
  }
})