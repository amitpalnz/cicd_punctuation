
const punctuation=(input)=>{

  var punch = '.,?%!$&*;:{};+*^=_`~()';
  var chars = input.split('');
  for(var i=0; i<chars.length; ++i){
    if(punch.includes(chars[i])){
      chars[i]=" ";
    }
  }const filtered = chars.join('');
  return filtered;
}
module.exports= punctuation;



/*
const punctuation=(input)=>{
  
   var punctuationless = input.replace(/[.,?%!$&*;:{}=^_`~()]/g, " ");
   return punctuationless ;
   }

   module.exports= punctuation;

*/








 // var punctuationless =input.replace(/\w\s/g," ");
// var punctuationless =input.replace(/%|\?|\s\/w/g," ");
   /* var exp =[];
    var size= input.length;
    for(var i=0; i<size-1; ++i){
      if (input.charAt(i) !== '?' && '%'){
          exp.push(input.charAt(i));
          console.log(input.charAt(i));
      }else {
        exp.push(" ");
        console.log("outside", input.charAt(i));
      }
      
    }
    */
   
  


  