
// You should implement your task here.

module.exports = function towelSort (matrix) {
   let boo;
  if(!matrix){
    return [];
  }else{
    if(matrix.length <= 2){
      matrix.forEach( a => {
      if(a.length <= 2 ){
        return boo = false;
      }else{
        return boo = false
      }
    })

    if(boo){
      return matrix.flat()
    }else{
      for(let i = 0; i < matrix.length; i++){
        if((i+1) % 2 == 0){
         let arry =  matrix[i].reverse();
         matrix.splice(i, i, arry)
         return matrix.flat(); 
        }
      }
     
    }

  }else{
    for(let i = 0; i < matrix.length; i++){
      if((i+1) % 2 == 0){
       let arry =  matrix[i].reverse();
       matrix.splice(i, i, arry)
      
      }
    }
  }
  return matrix.flat(); 
  }
}
