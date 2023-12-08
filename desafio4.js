function transformarATipos(arr) {
    return arr.map(item => typeof item);
  }
  
  console.log(transformarATipos([1, "casa", {}])); 
  console.log(transformarATipos([function(){}, true])); 
  