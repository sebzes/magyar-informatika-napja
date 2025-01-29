
function szamol()
{
    let kor = parseInt(document.getElementById("kor").value)



    if (kor < 18)
    {
        document.getElementById("szoveg").innerHTML = "Nem megfelelő életkor."
    }
}


