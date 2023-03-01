function display(value)
{
    
   document.getElementById("out").value+=value;
} 

function clr()
{
    document.getElementById("out").value="";
  
    
}

function calculate()
{
        var p = document.getElementById("out").value;
        var q = eval(p);
        document.getElementById("out").value=q;
}