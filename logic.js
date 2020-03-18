var colors = ["#c92a2a", "#e5ed07", "#12d40f", "#1a6ced", "#cf15e8"]
/*red, yellow, green, blue, purple*/ 

var master = document.getElementById("master");
var text = document.getElementById("text");
var spans = text.getElementsByTagName("span");
var index = 0;
var changeToBlack = false;

function fade()
{
    index += 1;
    if(index > colors.length-1)
    {
        index = 0;
    }

    master.style.backgroundColor = colors[index];
    text.style.color = colors[index];
    setTimeout(function() {fade()}, 3010);
}

function changeColor() {
    if(changeToBlack == false)
    {
        text.style.backgroundColor = "#ededed";
        changeToBlack = true;
        spans[0].innerHTML = "Light Mode";
    }

    else {
        text.style.backgroundColor = "#000";
        changeToBlack = false;
        spans[0].innerHTML = "Dark Mode";
    }
    
}

fade();