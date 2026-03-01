function firstNonRepeatedChar(str) {
 // Write your code here
	let ans="";
for(let i=0;i<str.length;i++){
    let count=0;
    for(let j=i+1;j<str.length;j++){
        if(str[j]==str[i])
        count++;
    }
    if(count==0){
        ans=str[i];
        break;
    }
    else
        i=i+count;
    
}
if(ans=="")
return null;
else
return ans;
}
const input = prompt("Enter a string");
 alert(firstNonRepeatedChar(input)); 
