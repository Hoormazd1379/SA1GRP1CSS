// Handler for history page - 'All' section.
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

function showSub1(){
    sub_cat = document.getElementsByClassName('normal');
    sub_cat['n2.1'].style.display = 'block';
    sub_cat['n2.2'].style.display = 'block';
}

function showSub2(){
    sub_cat = document.getElementsByClassName('normal');
    sub_cat['n5.1'].style.display = 'block';
    sub_cat['n5.2'].style.display = 'block';
}

function showSub3(){
    sub_cat = document.getElementsByClassName('normal');
    sub_cat['n6.1'].style.display = 'block';
    sub_cat['n6.2'].style.display = 'block';
}

function showSub4(){
    sub_cat = document.getElementsByClassName('normal');
    sub_cat['n11.1'].style.display = 'block';
    sub_cat['n11.2'].style.display = 'block';
    sub_cat['n11.3'].style.display = 'block';
}

function showSub5(){
    sub_cat = document.getElementsByClassName('normal');
    sub_cat['n17.1'].style.display = 'block';
    sub_cat['n17.2'].style.display = 'block';
    sub_cat['n17.3'].style.display = 'block';
    sub_cat['n17.4'].style.display = 'block';
    sub_cat['n17.5'].style.display = 'block';
}

function showSub6(){
    sub_cat = document.getElementsByClassName('normal');
    sub_cat['n19.1'].style.display = 'block';
    sub_cat['n19.2'].style.display = 'block';
}

function showSub7(){
    sub_cat = document.getElementsByClassName('normal');
    sub_cat['n20.1'].style.display = 'block';
    sub_cat['n20.2'].style.display = 'block';
}

function showSub8(){
    sub_cat = document.getElementsByClassName('normal');
    sub_cat['n21.1'].style.display = 'block';
    sub_cat['n21.2'].style.display = 'block';
    sub_cat['n21.3'].style.display = 'block';
    sub_cat['n21.4'].style.display = 'block';
    sub_cat['n21.5'].style.display = 'block';
    sub_cat['n21.6'].style.display = 'block';
    sub_cat['n21.7'].style.display = 'block';
}

function showSub9(){
    sub_cat = document.getElementsByClassName('normal');
    sub_cat['n22.1'].style.display = 'block';
    sub_cat['n22.2'].style.display = 'block';
    sub_cat['n22.3'].style.display = 'block';
}

document.getElementById('n1').onmouseover = onMouse;
document.getElementById('n1').onmouseleave = leaveMouse1;

document.getElementById('n2').onmouseover = onMouse2;
document.getElementById('n2').onmouseleave = leaveMouse2;
document.getElementById('n2.1').onmouseover = onMouse2_1;
document.getElementById('n2.1').onmouseleave = leaveMouse2_1;
document.getElementById('n2.2').onmouseover = onMouse2_2;
document.getElementById('n2.2').onmouseleave = leaveMouse2_2;

document.getElementById('n3').onmouseover = onMouse3;
document.getElementById('n3').onmouseleave = leaveMouse3;

document.getElementById('n4').onmouseover = onMouse4;
document.getElementById('n4').onmouseleave = leaveMouse4;

document.getElementById('n5').onmouseover = onMouse5;
document.getElementById('n5').onmouseleave = leaveMouse5;
document.getElementById('n5.1').onmouseover = onMouse5_1;
document.getElementById('n5.1').onmouseleave = leaveMouse5_1;
document.getElementById('n5.2').onmouseover = onMouse5_2;
document.getElementById('n5.2').onmouseleave = leaveMouse5_2;

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

document.getElementById('n11').onmouseover = onMouse11;
document.getElementById('n11').onmouseleave = leaveMouse11;
document.getElementById('n11.1').onmouseover = onMouse11_1;
document.getElementById('n11.1').onmouseleave = leaveMouse11_1;
document.getElementById('n11.2').onmouseover = onMouse11_2;
document.getElementById('n11.2').onmouseleave = leaveMouse11_2;
document.getElementById('n11.3').onmouseover = onMouse11_3;
document.getElementById('n11.3').onmouseleave = leaveMouse11_3;

document.getElementById('n12').onmouseover = onMouse12;
document.getElementById('n12').onmouseleave = leaveMouse12;

document.getElementById('n13').onmouseover = onMouse13;
document.getElementById('n13').onmouseleave = leaveMouse13;

document.getElementById('n14').onmouseover = onMouse14;
document.getElementById('n14').onmouseleave = leaveMouse14;

document.getElementById('n15').onmouseover = onMouse15;
document.getElementById('n15').onmouseleave = leaveMouse15;

document.getElementById('n16').onmouseover = onMouse16;
document.getElementById('n16').onmouseleave = leaveMouse16;

document.getElementById('n17').onmouseover = onMouse17;
document.getElementById('n17').onmouseleave = leaveMouse17;
document.getElementById('n17.1').onmouseover = onMouse17_1;
document.getElementById('n17.1').onmouseleave = leaveMouse17_1;
document.getElementById('n17.2').onmouseover = onMouse17_2;
document.getElementById('n17.2').onmouseleave = leaveMouse17_2;
document.getElementById('n17.3').onmouseover = onMouse17_3;
document.getElementById('n17.3').onmouseleave = leaveMouse17_3;
document.getElementById('n17.4').onmouseover = onMouse17_4;
document.getElementById('n17.4').onmouseleave = leaveMouse17_4;
document.getElementById('n17.5').onmouseover = onMouse17_5;
document.getElementById('n17.5').onmouseleave = leaveMouse17_5;

document.getElementById('n18').onmouseover = onMouse18;
document.getElementById('n18').onmouseleave = leaveMouse18;

document.getElementById('n19').onmouseover = onMouse19;
document.getElementById('n19').onmouseleave = leaveMouse19;
document.getElementById('n19.1').onmouseover = onMouse19_1;
document.getElementById('n19.1').onmouseleave = leaveMouse19_1;
document.getElementById('n19.2').onmouseover = onMouse19_2;
document.getElementById('n19.2').onmouseleave = leaveMouse19_2;

document.getElementById('n20').onmouseover = onMouse20;
document.getElementById('n20').onmouseleave = leaveMouse20;
document.getElementById('n20.1').onmouseover = onMouse20_1;
document.getElementById('n20.1').onmouseleave = leaveMouse20_1;
document.getElementById('n20.2').onmouseover = onMouse20_2;
document.getElementById('n20.2').onmouseleave = leaveMouse20_2;

document.getElementById('n21').onmouseover = onMouse21;
document.getElementById('n21').onmouseleave = leaveMouse21;
document.getElementById('n21.1').onmouseover = onMouse21_1;
document.getElementById('n21.1').onmouseleave = leaveMouse21_1;
document.getElementById('n21.2').onmouseover = onMouse21_2;
document.getElementById('n21.2').onmouseleave = leaveMouse21_2;
document.getElementById('n21.3').onmouseover = onMouse21_3;
document.getElementById('n21.3').onmouseleave = leaveMouse21_3;
document.getElementById('n21.4').onmouseover = onMouse21_4;
document.getElementById('n21.4').onmouseleave = leaveMouse21_4;
document.getElementById('n21.5').onmouseover = onMouse21_5;
document.getElementById('n21.5').onmouseleave = leaveMouse21_5;
document.getElementById('n21.6').onmouseover = onMouse21_6;
document.getElementById('n21.6').onmouseleave = leaveMouse21_6;
document.getElementById('n21.7').onmouseover = onMouse21_7;
document.getElementById('n21.7').onmouseleave = leaveMouse21_7;

document.getElementById('n22').onmouseover = onMouse22;
document.getElementById('n22').onmouseleave = leaveMouse22;
document.getElementById('n22.1').onmouseover = onMouse22_1;
document.getElementById('n22.1').onmouseleave = leaveMouse22_1;
document.getElementById('n22.2').onmouseover = onMouse22_2;
document.getElementById('n22.2').onmouseleave = leaveMouse22_2;
document.getElementById('n22.3').onmouseover = onMouse22_3;
document.getElementById('n22.3').onmouseleave = leaveMouse22_3;

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

// Actions for n2.1

function onMouse2_1(){
    document.getElementById('n2.1').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[0].style.display = "block"
}

function leaveMouse2_1(){
    if (selected_sub == 0) {
        document.getElementById('n2.1').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n2.1').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[0].style.display = "none"
    }
}

// Actions for n2.2

function onMouse2_2(){
    document.getElementById('n2.2').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[1].style.display = "block"
}

function leaveMouse2_2(){
    if (selected_sub == 1) {
        document.getElementById('n2.2').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n2.2').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
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

// Actions for n5.1

function onMouse5_1(){
    document.getElementById('n5.1').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[2].style.display = "block"
}

function leaveMouse5_1(){
    if (selected_sub == 2) {
        document.getElementById('n5.1').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n5.1').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[2].style.display = "none"
    }
}

// Actions for n5.2

function onMouse5_2(){
    document.getElementById('n5.2').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[3].style.display = "block"
}

function leaveMouse5_2(){
    if (selected_sub == 3) {
        document.getElementById('n5.2').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n5.2').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[3].style.display = "none"
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
    hover_str[4].style.display = "block"
}

function leaveMouse6_1(){
    if (selected_sub == 4) {
        document.getElementById('n6.1').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n6.1').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[4].style.display = "none"
    }
}

// Actions for n6.2

function onMouse6_2(){
    document.getElementById('n6.2').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[5].style.display = "block"
}

function leaveMouse6_2(){
    if (selected_sub == 5) {
        document.getElementById('n6.2').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n6.2').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
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

// Actions for n11.1

function onMouse11_1(){
    document.getElementById('n11.1').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[6].style.display = "block"
}

function leaveMouse11_1(){
    if (selected_sub == 6) {
        document.getElementById('n11.1').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n11.1').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[6].style.display = "none"
    }
}

// Actions for n11.2

function onMouse11_2(){
    document.getElementById('n11.2').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[7].style.display = "block"
}

function leaveMouse11_2(){
    if (selected_sub == 7) {
        document.getElementById('n11.2').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n11.2').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[7].style.display = "none"
    }
}

// Actions for n11.3

function onMouse11_3(){
    document.getElementById('n11.3').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[8].style.display = "block"
}

function leaveMouse11_3(){
    if (selected_sub == 8) {
        document.getElementById('n11.3').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n11.3').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[8].style.display = "none"
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

// Actions for n15

function onMouse15(){
    document.getElementById('n15').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-mil');
    hover_str[14].style.display = "block"
}

function leaveMouse15(){
    if (selected == 14) {
        document.getElementById('n15').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n15').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-mil');
        hover_str[14].style.display = "none"
    }
}

// Actions for n16

function onMouse16(){
    document.getElementById('n16').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-mil');
    hover_str[15].style.display = "block"
}

function leaveMouse16(){
    if (selected == 15) {
        document.getElementById('n16').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n16').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-mil');
        hover_str[15].style.display = "none"
    }
}

// Actions for n17

function onMouse17(){
    document.getElementById('n17').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-mil');
    hover_str[16].style.display = "block"
}

function leaveMouse17(){
    if (selected == 16) {
        document.getElementById('n17').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n17').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-mil');
        hover_str[16].style.display = "none"
    }
}

// Actions for n17.1

function onMouse17_1(){
    document.getElementById('n17.1').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[9].style.display = "block"
}

function leaveMouse17_1(){
    if (selected_sub == 9) {
        document.getElementById('n17.1').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n17.1').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[9].style.display = "none"
    }
}

// Actions for n17.2

function onMouse17_2(){
    document.getElementById('n17.2').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[10].style.display = "block"
}

function leaveMouse17_2(){
    if (selected_sub == 10) {
        document.getElementById('n17.2').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n17.2').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[10].style.display = "none"
    }
}

// Actions for n17.3

function onMouse17_3(){
    document.getElementById('n17.3').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[11].style.display = "block"
}

function leaveMouse17_3(){
    if (selected_sub == 11) {
        document.getElementById('n17.3').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n17.3').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[11].style.display = "none"
    }
}

// Actions for n17.4

function onMouse17_4(){
    document.getElementById('n17.4').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[12].style.display = "block"
}

function leaveMouse17_4(){
    if (selected_sub == 12) {
        document.getElementById('n17.4').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n17.4').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[12].style.display = "none"
    }
}

// Actions for n17.5

function onMouse17_5(){
    document.getElementById('n17.5').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[13].style.display = "block"
}

function leaveMouse17_5(){
    if (selected_sub == 13) {
        document.getElementById('n17.5').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n17.5').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[13].style.display = "none"
    }
}

// Actions for n18

function onMouse18(){
    document.getElementById('n18').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-mil');
    hover_str[17].style.display = "block"
}

function leaveMouse18(){
    if (selected == 17) {
        document.getElementById('n18').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n18').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-mil');
        hover_str[17].style.display = "none"
    }
}

// Actions for n19

function onMouse19(){
    document.getElementById('n19').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-mil');
    hover_str[18].style.display = "block"
}

function leaveMouse19(){
    if (selected == 18) {
        document.getElementById('n19').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n19').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-mil');
        hover_str[18].style.display = "none"
    }
}

// Actions for n19.1

function onMouse19_1(){
    document.getElementById('n19.1').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[14].style.display = "block"
}

function leaveMouse19_1(){
    if (selected_sub == 14) {
        document.getElementById('n19.1').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n19.1').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[14].style.display = "none"
    }
}

// Actions for n19.2

function onMouse19_2(){
    document.getElementById('n19.2').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[15].style.display = "block"
}

function leaveMouse19_2(){
    if (selected_sub == 15) {
        document.getElementById('n19.2').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n19.2').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[15].style.display = "none"
    }
}

// Actions for n20

function onMouse20(){
    document.getElementById('n20').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-mil');
    hover_str[19].style.display = "block"
}

function leaveMouse20(){
    if (selected == 19) {
        document.getElementById('n20').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n20').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-mil');
        hover_str[19].style.display = "none"
    }
}

// Actions for n19.1

function onMouse20_1(){
    document.getElementById('n20.1').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[16].style.display = "block"
}

function leaveMouse20_1(){
    if (selected_sub == 16) {
        document.getElementById('n20.1').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n20.1').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[16].style.display = "none"
    }
}

// Actions for n19.2

function onMouse20_2(){
    document.getElementById('n20.2').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[17].style.display = "block"
}

function leaveMouse20_2(){
    if (selected_sub == 17) {
        document.getElementById('n20.2').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n20.2').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[17].style.display = "none"
    }
}

// Actions for n21

function onMouse21(){
    document.getElementById('n21').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-mil');
    hover_str[20].style.display = "block"
}

function leaveMouse21(){
    if (selected == 20) {
        document.getElementById('n21').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n21').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-mil');
        hover_str[20].style.display = "none"
    }
}

// Actions for n21.1

function onMouse21_1(){
    document.getElementById('n21.1').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[18].style.display = "block"
}

function leaveMouse21_1(){
    if (selected_sub == 18) {
        document.getElementById('n21.1').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n21.1').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[18].style.display = "none"
    }
}

// Actions for n21.2

function onMouse21_2(){
    document.getElementById('n21.2').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[19].style.display = "block"
}

function leaveMouse21_2(){
    if (selected_sub == 19) {
        document.getElementById('n21.2').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n21.2').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[19].style.display = "none"
    }
}

// Actions for n21.3

function onMouse21_3(){
    document.getElementById('n21.3').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[20].style.display = "block"
}

function leaveMouse21_3(){
    if (selected_sub == 20) {
        document.getElementById('n21.3').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n21.3').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[20].style.display = "none"
    }
}

// Actions for n21.4

function onMouse21_4(){
    document.getElementById('n21.4').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[21].style.display = "block"
}

function leaveMouse21_4(){
    if (selected_sub == 21) {
        document.getElementById('n21.4').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n21.4').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[21].style.display = "none"
    }
}

// Actions for n21.5

function onMouse21_5(){
    document.getElementById('n21.5').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[22].style.display = "block"
}

function leaveMouse21_5(){
    if (selected_sub == 22) {
        document.getElementById('n21.5').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n21.5').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[22].style.display = "none"
    }
}

// Actions for n21.6

function onMouse21_6(){
    document.getElementById('n21.6').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[23].style.display = "block"
}

function leaveMouse21_6(){
    if (selected_sub == 23) {
        document.getElementById('n21.6').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n21.6').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[23].style.display = "none"
    }
}

// Actions for n21.7

function onMouse21_7(){
    document.getElementById('n21.7').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[24].style.display = "block"
}

function leaveMouse21_7(){
    if (selected_sub == 24) {
        document.getElementById('n21.7').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n21.7').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[24].style.display = "none"
    }
}

// Actions for n22

function onMouse22(){
    document.getElementById('n22').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-mil');
    hover_str[21].style.display = "block"
}

function leaveMouse22(){
    if (selected == 21) {
        document.getElementById('n22').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n22').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-mil');
        hover_str[21].style.display = "none"
    }
}

// Actions for n21.1

function onMouse22_1(){
    document.getElementById('n22.1').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[25].style.display = "block"
}

function leaveMouse22_1(){
    if (selected_sub == 25) {
        document.getElementById('n22.1').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n22.1').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[25].style.display = "none"
    }
}

// Actions for n21.2

function onMouse22_2(){
    document.getElementById('n22.2').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[26].style.display = "block"
}

function leaveMouse22_2(){
    if (selected_sub == 26) {
        document.getElementById('n22.2').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n22.2').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[26].style.display = "none"
    }
}

// Actions for n22.3

function onMouse22_3(){
    document.getElementById('n22.3').style.backgroundColor = '#C3073F'

    hover_str = document.getElementsByClassName('date-nor');
    hover_str[27].style.display = "block"
}

function leaveMouse22_3(){
    if (selected_sub == 27) {
        document.getElementById('n22.3').style.backgroundColor = '#C3073F'
    } else {
        document.getElementById('n22.3').style.backgroundColor = '#535353'

        hover_str = document.getElementsByClassName('date-nor');
        hover_str[27].style.display = "none"
    }
}