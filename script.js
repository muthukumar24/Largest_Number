function myFunction()
{
    var a = Number(document.getElementById("inputOne").value)
    var b = Number(document.getElementById("inputTwo").value)

    if(a>b)
    {
        document.getElementById("outputvalue").innerHTML = a + " is bigger than "+ b 
    }
    else if(b>a)
    {
        document.getElementById("outputvalue").innerHTML = b + " is bigger than "+ a
    }
    else
    {
        document.getElementById("outputvalue").innerHTML = "Both numbers are equal"
    }
}