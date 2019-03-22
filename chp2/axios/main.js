var app = new Vue({
  el:"#app",
  data:{
    list:[]
  },
  methods: {
  },
  created: function(){
    axios.get('https://jsonplaceholder.typicode.com/todos/')
    .then(function(res){
      this.list = res.data
    }.bind(this))
    .catch(err=>{
      console.log(err)
    })
  }
})