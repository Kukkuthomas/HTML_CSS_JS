var j=new XMLHttpRequest();
j.onload=function()
{
    if(j.status==200)
        document.getElementById("content").innerHTML=j.responseText;
    
};
j.open("GET","index1.html");
j.send(null);