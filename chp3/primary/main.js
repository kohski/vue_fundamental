var app = new Vue({
  el:"#app",
  data:{
    vValue:"",
    message:"",
    ckbx:true,
    mckbx:[],
    radio:"",
    slct:"",
    mslct:[]
  },
  methods:{
    handler:function(event){
      console.log(event)
    },
    vmodelHandler:function(event){
      this.vValue = event.target.value
    }
  }
})