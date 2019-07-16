var charlespater = {
    compact: function(ary) {
      return ary.filter(it => it)
    },
  fill: function(ary,value,start=0,end = ary.length){
      for(let i=start;i<end;i++){
        ary[i]=value;
      }
      return ary;
    },
    chunk:function(ary,size){
      var result=[];
      while(ary.length){
       result.push(ary.slice(0,size))
      for(let i=0;i<size;i++){
       ary.shift();
     }
    }
    return result;
  },
  concat:function(ary,value){
    for(let i=1;i<arguments.length;i++){
    ary.push(...arguments[i]);
    }
    return ary;
  },
  difference:function(ary,value){
    for(let i=0;i<ary.length;i++){
      for(let j=0;j<value.length;j++){
        if(ary[i]==value[j]){
          ary.splice(i,1);
          i--;
        }
      }
    }
    return ary;
  },
  differenceBy:function(ary,value,iteratee){
    var result=[];
    for(let i=0;i<ary.length;i++){
      if(iteratee(ary[i])!=iteratee(value[i])){
        result.push(ary[i]);
      }
    }
    
  }
  };
