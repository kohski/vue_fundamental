var app = new Vue({
  el:"#app",
  data:{
    name:"fill monster\'s name",
    monsters:[
     {id:1,name:'AAA',hp:100} ,
     {id:2,name:'BBB',hp:300} ,
     {id:3,name:'CCC',hp:200} 
    ],
  },
  methods: {
    doAdd:function(){
      var max = this.monsters.reduce(function(a,b){
        return a > b.id ? a : b.id
      },0)
      this.monsters.push({
        id: max +1 ,
        name:this.name,
        hp:500        
      })
    },
    doRemove: function(index){
      this.monsters.splice(index,1)
    },
    doAtack: function(index){
      this.monsters[index].hp -= 10
    }
  },
  created: function(){
    this.monsters.forEach(function(monster){
      this.$set(monster,"active",false)
    },this)
  }
})