function checkPalindrom (str){
    if(typeof(str) !== "string"){
       return console.log("Harap input string!"); 
    }
    let str2 = str.toLowerCase()
    return str2 == str2.split("").reverse().join("");
  }
  if(checkPalindrom("324")){
    console.log("Kata tersebut Palindrom");
  } else {
    console.log("Bukan Palindrom");
  }
 

