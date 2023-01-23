function fun1(){
    //alert("Welcome to javaScript");
    var name=frm1.t1.value;
    if(name==""){
        alert("Name Required");
    }
    else{
        alert("Go Ahead");
    }
}

function fun2(){
    var maths=parseInt(frm2.t3.value);
    var english=parseInt(frm2.t4.value);
    var computer=parseInt(frm2.t5.value);
    var total_value= maths+english+computer;
    frm2.t6.value=total_value;
}

function fun3(){
    var maths=parseInt(frm2.t3.value);
    var english=parseInt(frm2.t4.value);
    var computer=parseInt(frm2.t5.value);
    var per=((maths+english+computer)/300)*100;
    frm2.t7.value=per;
}

function fun4(){
    var maths=parseInt(frm2.t3.value);
    var english=parseInt(frm2.t4.value);
    var computer=parseInt(frm2.t5.value);
    var max=Math.max(maths,english,computer);
    frm2.t8.value=max;
}

function fun5(){
    var maths=parseInt(frm2.t3.value);
    var english=parseInt(frm2.t4.value);
    var computer=parseInt(frm2.t5.value);
    var min=Math.min(maths,english,computer);
    frm2.t9.value=min;
}