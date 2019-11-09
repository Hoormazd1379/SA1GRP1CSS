// handler for his page.
// Author: Edoardo Riggio

var selected = -1

function milestones(id, numb){
    elements = document.getElementsByClassName('milestone');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="#545454";
    }

    document.getElementById(id).style.backgroundColor = "#C3073F";

    hover_str = document.getElementsByClassName('date-mil');
    for (var i = 0; i < hover_str.length; i++) {
        if (i == numb){
            hover_str[numb].style.display = 'block';
        } else {
            hover_str[i].style.display = 'none';
        }
    }
    
    sub_cat = document.getElementsByClassName('normal');
    for (var i = 0; i < sub_cat.length; i++) {
        sub_cat[i].style.display = 'none';
    }

    selected = numb
}

function sbuCat(id, numb){
    elements = document.getElementsByClassName('milestone');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="#545454";
    }

    document.getElementById(id).style.backgroundColor = "#C3073F";

    hover_str = document.getElementsByClassName('date-hover-mil');
    for (var i = 0; i < hover_str.length; i++) {
        if (i == numb){
            hover_str[numb].style.display = 'block';
        } else {
            hover_str[i].style.display = 'none';
        }
    }

    sub_cat = document.getElementsByClassName('normal');
    for (var i = 0; i < sub_cat.length; i++) {
        sub_cat[i].style.display = 'none';
    }
}

function showSub1(){
    sub_cat = document.getElementsByClassName('normal');
    sub_cat['n2.1'].style.display = 'block';
    sub_cat['n2.2'].style.display = 'block';
}

document.getElementById('n1').onmouseover = onMouse;
document.getElementById('n1').onmouseleave = leaveMouse1;
document.getElementById('n2').onmouseover = onMouse2;
document.getElementById('n2').onmouseleave = leaveMouse2;
document.getElementById('n3').onmouseover = onMouse3;
document.getElementById('n3').onmouseleave = leaveMouse3;

// Actions for n1

function onMouse(){
    document.getElementById('n1').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-mil');
    hover_str[0].style.display = "block"
}

function leaveMouse1(){
    if (selected == 0) {
        document.getElementById('n1').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n1').style.backgroundColor = '#535353'
        
        hover_str = document.getElementsByClassName('date-mil');
        hover_str[0].style.display = "none"
    }
}

// Actions for n2

function onMouse2(){
    document.getElementById('n2').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-mil');
    hover_str[1].style.display = "block"
}

function leaveMouse2(){
    if (selected == 1) {
        document.getElementById('n2').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n2').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-mil');
        hover_str[1].style.display = "none"
    }
}

// Actions for n3

function onMouse3(){
    document.getElementById('n3').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-mil');
    hover_str[2].style.display = "block"
}

function leaveMouse3(){
    if (selected == 2) {
        document.getElementById('n3').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n3').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-mil');
        hover_str[2].style.display = "none"
    }
}