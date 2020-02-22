$(document).ready(function()
{
    $(document).keypress(function(evt)
    {
        if(evt.which==13)
        {
        var val=document.getElementById("txt").value;
        $("ul").append("<li>"+val+"</li>");
        }

    });
});
