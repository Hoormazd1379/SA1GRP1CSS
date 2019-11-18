// Handler for history page - 'Financial Impact' section.
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

function showSub1_1(){
    sub_cat = document.getElementsByClassName('normal');
    sub_cat['n6.1'].style.display = 'block';
    sub_cat['n6.2'].style.display = 'block';
}

function showSub1_2(){
    sub_cat = document.getElementsByClassName('normal');
    sub_cat['n10.1'].style.display = 'block';
    sub_cat['n10.2'].style.display = 'block';
}

function showSub1_3(){
    sub_cat = document.getElementsByClassName('normal');
    sub_cat['n13.1'].style.display = 'block';
    sub_cat['n13.2'].style.display = 'block';
}

document.getElementById('n1').onmouseover = onMouse;
document.getElementById('n1').onmouseleave = leaveMouse1;

document.getElementById('n2').onmouseover = onMouse2;
document.getElementById('n2').onmouseleave = leaveMouse2;

document.getElementById('n3').onmouseover = onMouse3;
document.getElementById('n3').onmouseleave = leaveMouse3;

document.getElementById('n4').onmouseover = onMouse4;
document.getElementById('n4').onmouseleave = leaveMouse4;

document.getElementById('n5').onmouseover = onMouse5;
document.getElementById('n5').onmouseleave = leaveMouse5;

document.getElementById('n6').onmouseover = onMouse6;
document.getElementById('n6').onmouseleave = leaveMouse6;
document.getElementById('n6.1').onmouseover = onMouse6_1;
document.getElementById('n6.1').onmouseleave = leaveMouse6_1;
document.getElementById('n6.2').onmouseover = onMouse6_2;
document.getElementById('n6.2').onmouseleave = leaveMouse6_2;

document.getElementById('n7').onmouseover = onMouse7;
document.getElementById('n7').onmouseleave = leaveMouse7;

document.getElementById('n8').onmouseover = onMouse8;
document.getElementById('n8').onmouseleave = leaveMouse8;

document.getElementById('n9').onmouseover = onMouse9;
document.getElementById('n9').onmouseleave = leaveMouse9;

document.getElementById('n10').onmouseover = onMouse10;
document.getElementById('n10').onmouseleave = leaveMouse10;
document.getElementById('n10.1').onmouseover = onMouse10_1;
document.getElementById('n10.1').onmouseleave = leaveMouse10_1;
document.getElementById('n10.2').onmouseover = onMouse10_2;
document.getElementById('n10.2').onmouseleave = leaveMouse10_2;

document.getElementById('n11').onmouseover = onMouse11;
document.getElementById('n11').onmouseleave = leaveMouse11;

document.getElementById('n12').onmouseover = onMouse12;
document.getElementById('n12').onmouseleave = leaveMouse12;

document.getElementById('n13').onmouseover = onMouse13;
document.getElementById('n13').onmouseleave = leaveMouse13;
document.getElementById('n13.1').onmouseover = onMouse13_1;
document.getElementById('n13.1').onmouseleave = leaveMouse13_1;
document.getElementById('n13.2').onmouseover = onMouse13_2;
document.getElementById('n13.2').onmouseleave = leaveMouse13_2;

document.getElementById('n14').onmouseover = onMouse14;
document.getElementById('n14').onmouseleave = leaveMouse14;

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

// Actions for n6.1

function onMouse6_1(){
    document.getElementById('n6.1').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[0].style.display = "block"
}

function leaveMouse6_1(){
    if (selected_sub == 0) {
        document.getElementById('n6.1').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n6.1').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[0].style.display = "none"
    }
}

// Actions for n6.2

function onMouse6_2(){
    document.getElementById('n6.2').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[1].style.display = "block"
}

function leaveMouse6_2(){
    if (selected_sub == 1) {
        document.getElementById('n6.2').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n6.2').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[1].style.display = "none"
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

// Actions for n10

function onMouse10(){
    document.getElementById('n10').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-mil');
    hover_str[9].style.display = "block"
}

function leaveMouse10(){
    if (selected == 9) {
        document.getElementById('n10').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n10').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-mil');
        hover_str[9].style.display = "none"
    }
}

// Actions for n10.1

function onMouse10_1(){
    document.getElementById('n10.1').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[2].style.display = "block"
}

function leaveMouse10_1(){
    if (selected_sub == 2) {
        document.getElementById('n10.1').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n10.1').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[2].style.display = "none"
    }
}

// Actions for n10.2

function onMouse10_2(){
    document.getElementById('n10.2').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[3].style.display = "block"
}

function leaveMouse10_2(){
    if (selected_sub == 3) {
        document.getElementById('n10.2').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n10.2').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[3].style.display = "none"
    }
}

// Actions for n11

function onMouse11(){
    document.getElementById('n11').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-mil');
    hover_str[10].style.display = "block"
}

function leaveMouse11(){
    if (selected == 10) {
        document.getElementById('n11').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n11').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-mil');
        hover_str[10].style.display = "none"
    }
}

// Actions for n12

function onMouse12(){
    document.getElementById('n12').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-mil');
    hover_str[11].style.display = "block"
}

function leaveMouse12(){
    if (selected == 11) {
        document.getElementById('n12').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n12').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-mil');
        hover_str[11].style.display = "none"
    }
}

// Actions for n13

function onMouse13(){
    document.getElementById('n13').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-mil');
    hover_str[12].style.display = "block"
}

function leaveMouse13(){
    if (selected == 12) {
        document.getElementById('n13').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n13').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-mil');
        hover_str[12].style.display = "none"
    }
}

// Actions for n13.1

function onMouse13_1(){
    document.getElementById('n17.1').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[4].style.display = "block"
}

function leaveMouse13_1(){
    if (selected_sub == 4) {
        document.getElementById('n13.1').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n13.1').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[4].style.display = "none"
    }
}

// Actions for n13.2

function onMouse13_2(){
    document.getElementById('n13.2').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[5].style.display = "block"
}

function leaveMouse13_2(){
    if (selected_sub == 5) {
        document.getElementById('n13.2').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n13.2').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[5].style.display = "none"
    }
}

// Actions for n14

function onMouse14(){
    document.getElementById('n14').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-mil');
    hover_str[13].style.display = "block"
}

function leaveMouse14(){
    if (selected == 13) {
        document.getElementById('n14').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n14').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-mil');
        hover_str[13].style.display = "none"
    }
}