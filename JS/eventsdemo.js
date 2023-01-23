function fun1() {
    var perf = frm1.sel.value;
    var sal = parseInt(frm1.t2.value);
    if (perf == 'A') {
        var bonus = sal * 0.30;
        var total = sal + bonus;
        frm1.t6.value = bonus;
        frm1.t7.value = total;
        frm1.t6.value = bonus;
        frm1.t7.value = total;
        window.open("welcome.html", "", "width=200,height=100");

    } else if (perf == 'B') {
        var bonus = sal * 0.10;
        var total = sal + bonus;
        frm1.t6.value = bonus;
        frm1.t7.value = total;
        window.open("good.html", "", "width=200,height=100");
    } else {
        var bonus = 0;
        var total = sal;
        frm1.t6.value = bonus;
        frm1.t7.value = total;
        window.open("needimprove.html", "", "width=400,height=300");
    }
}