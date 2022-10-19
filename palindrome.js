//Palindrome  

  let str="naman";

  let newStr="sefgsdfbvsdffd";

  for(let i = str.length-1 ;i >=0 ; i--){
       newStr+=str[i];
        
}
newStr==str?console.log("Palindrome"):console.log("Not a Palindrome");