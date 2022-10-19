//Palindrome  

  let str="naman";
  let N=str.length-1;
  for(let i=0;i<N/2;i++){
        if (str[i]!== str[N-1-i]){
            console.log("No")
            break;
        }else{
            console.log("Yes");
            break;
        }
    }