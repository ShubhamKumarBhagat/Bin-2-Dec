var entry =document.getElementById("entry");
var result=document.getElementById("result");
var cbtn=document.getElementsByClassName("myButton")[0];
var rbtn=document.getElementsByClassName("myButton")[1];

cbtn.addEventListener("click",() => 
{
    if(entry.value=="")
    alert("Binary input is Empty :(");
    else
    {
        var answer=0,pow=1,i;
        for(i=entry.value.length-1;i>=0;i--)
        {
            if(entry.value[i]=="1")
                answer=answer+pow;
            else if(entry.value[i]!="1"&&entry.value[i]!="0")
            {
                result.value="";
                alert("Invalid Binary Number!!!");
                break;
            }
            pow*=2;
        }
        if(i==-1)
            result.value=answer;    
    }

} 
);
rbtn.addEventListener("click", () =>
{
    entry.value="";
    result.value="";
});