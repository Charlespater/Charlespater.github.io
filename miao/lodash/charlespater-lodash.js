var charlespater = {
    compact: function(ary) {
      return ary.filter(it => it)
    },
   fill: function(ary,value){
      for(let i=0;i<ary.length;i++){
        ary.push(value)
      }
      return ary;
    }
  };
