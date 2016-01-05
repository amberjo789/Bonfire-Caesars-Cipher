function rot13(str) { // LBH QVQ VG!
 
  var result = "";
  var chr;

  for(var i = 0; i<str.length; i++){
    if(str.charCodeAt(i) >=78){
      chr = String.fromCharCode(str.charCodeAt(i)-13);
      result = result.substr(0,i)+chr+result.substr(i, chr.length);
    }
    else if(str.charCodeAt(i) < 78 && str.charCodeAt(i) > 64){
      chr = String.fromCharCode(str.charCodeAt(i)+13);
      result = result.substr(0,i)+chr+result.substr(i, chr.length);
    } 
    else{
      chr = String.fromCharCode(str.charCodeAt(i));
      result = result.substr(0,i)+chr+result.substr(i, chr.length);
    }
  }
  
  return result;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");