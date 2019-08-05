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
      if(value instanceof Array){
    ary.push(...arguments[i]);
      }else{
        ary.push(arguments[i])
      }
    }
    return ary
  },
  difference:function(ary,...value){
    return ary.filter(item=>{
      let ary2=value.flat();
      return ary2.every(idx=>{
        return idx!==item;
      })
    })
  },
/* 
function difference(ary, ...val) {
    return ary.filter((item) => {
        if (val.flat().indexOf(item) === -1) {
            return item
        }
    })

}
*/
  differenceBy:function(array, ...values) {
    var iteratee = values.pop();
    if (typeof iteratee == 'function') {
      array = array.map(item => iteratee(item));
      var ary2 = _.flattenDeep(values).map(item => iteratee(item));
      return array.filter(item => {
        if (ary2.indexOf(item) == -1)
          return item;
      })
    }
    if (typeof iteratee == 'string') {
      array = array.map(item => item[iteratee]);
      var ary2 = _.flattenDeep(values).map(item => item[iteratee]);
      return array.filter(item => {
        if (ary2.indexOf(item) == -1)
          return item;
      })
    } else {
      values.push(iteratee)
      return _.difference(array, ...values);
    }
  },
  index:function(ary,value){
    for(let i=0;i<ary.length;i++){
      if(ary[i]==value)
      return i;
    }
  }
  };
