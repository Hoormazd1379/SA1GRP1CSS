// handler for his page.
// Author: Edoardo Riggio

function n1(){
    elements = document.getElementsByClassName('milestone');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="#545454";
    }

    document.getElementById('n1').style.background = "#C3073F";
    document.getElementsByClassName('date-hover-mil')[0].style.display = 'block'
    
    sub_cat = document.getElementsByClassName('normal');
    for (var i = 0; i < sub_cat.length; i++) {
        sub_cat[i].style.display = 'none';
    }
}

function n2 (){
    
}