// handler for his page.
// Author: Edoardo Riggio

function milestones(id, numb){
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

function onMouse(id){
    document.getElementById(id).style.backgroundColor = '#C3073F'
}