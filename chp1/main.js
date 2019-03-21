var app = new Vue({
  el:"#app",
  data:{
    message:"test",
    lists:["test","user","fortran"],
    eve:"",
    show:true,
    condition:true,
    show2:true
  },
  methods:{
    clickHandler:function(event){
      console.log(event)
      console.log(event.target)
    }
  }
})