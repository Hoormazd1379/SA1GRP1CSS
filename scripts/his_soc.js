// Handler for history page - 'Social Impact' section.
// Author: Edoardo Riggio

var selected = -1
var selected_sub = -1

function milestones(id, numb){
    elements = document.getElementsByClassName('milestone');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="#545454";
    }

    hover_str = document.getElementsByClassName('date-mil');
    for (var i = 0; i < hover_str.length; i++) {
        if (i == numb){
            hover_str[numb].style.display = 'block';
        } else {
            hover_str[i].style.display = 'none';
        }
    }

    elements2 = document.getElementsByClassName('normal');
    for (var i = 0; i < elements2.length; i++) {
        if (i == selected_sub){
            elements2[selected_sub].style.backgroundColor = '#C3073F';
        } else {
            elements2[i].style.backgroundColor = "#545454";
        }
    }

    elements3 = document.getElementsByClassName('date-nor');
    for (var i = 0; i < elements3.length; i++) {
        if (i == selected_sub){
            elements3[selected_sub].style.display = "block";
        } else {
            elements3[i].style.display = "none";
        }
    }

    document.getElementById(id).style.backgroundColor = "#C3073F";
    
    sub_cat = document.getElementsByClassName('normal');
    for (var i = 0; i < sub_cat.length; i++) {
        sub_cat[i].style.display = 'none';
    }

    selected = numb
}

function normal(id, numb){
    elements = document.getElementsByClassName('normal');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "#545454";
    }

    document.getElementById(id).style.backgroundColor = "#C3073F";

    hover_str = document.getElementsByClassName('date-nor');
    for (var i = 0; i < hover_str.length; i++) {
        if (i == numb){
            hover_str[numb].style.display = 'block';
        } else {
            hover_str[i].style.display = 'none';
        }
    }

    selected_sub = numb
}

function multiple(){
    selected_sub = -1

    elements2 = document.getElementsByClassName('normal');
    for (var i = 0; i < elements2.length; i++) {
        elements2[i].style.backgroundColor = "#545454";
    }

    elements3 = document.getElementsByClassName('date-nor');
    for (var i = 0; i < elements3.length; i++) {
        elements3[i].style.display = "none";
    }
}

function showSub3_1(){
    sub_cat = document.getElementsByClassName('normal');
    sub_cat['n4.1'].style.display = 'block';
    sub_cat['n4.2'].style.display = 'block';
    sub_cat['n4.3'].style.display = 'block';
}

function showSub3_2(){
    sub_cat = document.getElementsByClassName('normal');
    sub_cat['n8.1'].style.display = 'block';
    sub_cat['n8.2'].style.display = 'block';
}

function showSub4_2(){
    sub_cat = document.getElementsByClassName('normal');
    sub_cat['n9.1'].style.display = 'block';
    sub_cat['n9.2'].style.display = 'block';
}

document.getElementById('n1').onmouseover = onMouse;
document.getElementById('n1').onmouseleave = leaveMouse1;

document.getElementById('n2').onmouseover = onMouse2;
document.getElementById('n2').onmouseleave = leaveMouse2;

document.getElementById('n3').onmouseover = onMouse3;
document.getElementById('n3').onmouseleave = leaveMouse3;

document.getElementById('n4').onmouseover = onMouse4;
document.getElementById('n4').onmouseleave = leaveMouse4;
document.getElementById('n4.1').onmouseover = onMouse4_1;
document.getElementById('n4.1').onmouseleave = leaveMouse4_1;
document.getElementById('n4.2').onmouseover = onMouse4_2;
document.getElementById('n4.2').onmouseleave = leaveMouse4_2;
document.getElementById('n4.3').onmouseover = onMouse4_3;
document.getElementById('n4.3').onmouseleave = leaveMouse4_3;

document.getElementById('n5').onmouseover = onMouse5;
document.getElementById('n5').onmouseleave = leaveMouse5;

document.getElementById('n6').onmouseover = onMouse6;
document.getElementById('n6').onmouseleave = leaveMouse6;

document.getElementById('n7').onmouseover = onMouse7;
document.getElementById('n7').onmouseleave = leaveMouse7;

document.getElementById('n8').onmouseover = onMouse8;
document.getElementById('n8').onmouseleave = leaveMouse8;
document.getElementById('n8.1').onmouseover = onMouse8_1;
document.getElementById('n8.1').onmouseleave = leaveMouse8_1;
document.getElementById('n8.2').onmouseover = onMouse8_2;
document.getElementById('n8.2').onmouseleave = leaveMouse8_2;

document.getElementById('n9').onmouseover = onMouse9;
document.getElementById('n9').onmouseleave = leaveMouse9;
document.getElementById('n9.1').onmouseover = onMouse9_1;
document.getElementById('n9.1').onmouseleave = leaveMouse9_1;
document.getElementById('n9.2').onmouseover = onMouse9_2;
document.getElementById('n9.2').onmouseleave = leaveMouse9_2;

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

// Actions for n4

function onMouse4(){
    document.getElementById('n4').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-mil');
    hover_str[3].style.display = "block"
}

function leaveMouse4(){
    if (selected == 3) {
        document.getElementById('n4').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n4').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-mil');
        hover_str[3].style.display = "none"
    }
}

// Actions for n4.1

function onMouse4_1(){
    document.getElementById('n4.1').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[0].style.display = "block"
}

function leaveMouse4_1(){
    if (selected_sub == 0) {
        document.getElementById('n4.1').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n4.1').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[0].style.display = "none"
    }
}

// Actions for n4.2

function onMouse4_2(){
    document.getElementById('n4.2').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[1].style.display = "block"
}

function leaveMouse4_2(){
    if (selected_sub == 1) {
        document.getElementById('n4.2').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n4.2').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[1].style.display = "none"
    }
}
// Actions for n4.3

function onMouse4_3(){
    document.getElementById('n4.3').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[2].style.display = "block"
}

function leaveMouse4_3(){
    if (selected_sub == 2) {
        document.getElementById('n4.3').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n4.3').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[2].style.display = "none"
    }
}

// Actions for n5

function onMouse5(){
    document.getElementById('n5').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-mil');
    hover_str[4].style.display = "block"
}

function leaveMouse5(){
    if (selected == 4) {
        document.getElementById('n5').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n5').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-mil');
        hover_str[4].style.display = "none"
    }
}

// Actions for n6

function onMouse6(){
    document.getElementById('n6').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-mil');
    hover_str[5].style.display = "block"
}

function leaveMouse6(){
    if (selected == 5) {
        document.getElementById('n6').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n6').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-mil');
        hover_str[5].style.display = "none"
    }
}

// Actions for n7

function onMouse7(){
    document.getElementById('n7').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-mil');
    hover_str[6].style.display = "block"
}

function leaveMouse7(){
    if (selected == 6) {
        document.getElementById('n7').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n7').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-mil');
        hover_str[6].style.display = "none"
    }
}

// Actions for n8

function onMouse8(){
    document.getElementById('n8').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-mil');
    hover_str[7].style.display = "block"
}

function leaveMouse8(){
    if (selected == 7) {
        document.getElementById('n8').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n8').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-mil');
        hover_str[7].style.display = "none"
    }
}

// Actions for n8.1

function onMouse8_1(){
    document.getElementById('n8.1').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[3].style.display = "block"
}

function leaveMouse8_1(){
    if (selected_sub == 3) {
        document.getElementById('n8.1').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n8.1').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[3].style.display = "none"
    }
}

// Actions for n8.2

function onMouse8_2(){
    document.getElementById('n8.2').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[4].style.display = "block"
}

function leaveMouse8_2(){
    if (selected_sub == 4) {
        document.getElementById('n8.2').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n8.2').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[4].style.display = "none"
    }
}

// Actions for n9

function onMouse9(){
    document.getElementById('n9').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-mil');
    hover_str[8].style.display = "block"
}

function leaveMouse9(){
    if (selected == 8) {
        document.getElementById('n9').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n9').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-mil');
        hover_str[8].style.display = "none"
    }
}

// Actions for n9.1

function onMouse9_1(){
    document.getElementById('n9.1').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[5].style.display = "block"
}

function leaveMouse9_1(){
    if (selected_sub == 5) {
        document.getElementById('n9.1').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n9.1').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[5].style.display = "none"
    }
}

// Actions for n9.2

function onMouse9_2(){
    document.getElementById('n9.2').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[6].style.display = "block"
}

function leaveMouse9_2(){
    if (selected_sub == 6) {
        document.getElementById('n9.2').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n9.2').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[6].style.display = "none"
    }
}