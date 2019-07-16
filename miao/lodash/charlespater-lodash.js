var charlespater = {
    compact: function(ary) {
      return ary.filter(it => it)
    },
  fill: function(ary,value,start=0,end = ary.length-1){
      for(let i=start;i<=end;i++){
        ary.push(value)
      }
      return ary;
    }
  };
