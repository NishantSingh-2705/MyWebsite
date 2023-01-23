function validate() {

    if (document.myForm.First_Name.value == "") {

        alert("Please provide First Name !");
        document.myForm.First_Name.focus();
        return false;
    }

    if (document.myForm.Last_Name.value == "") {

        alert("Please provide Last Name !");
        document.myForm.Last_Name.focus();
        return false;
    }

    if (document.myForm.Mobile.value == "") {

        alert("Please provide mobile number !!");
        document.myForm.Mobile.focus();
        return false;
    }

    if (document.myForm.Email.value == "") {

        alert("Please provide valid Email !!");
        document.myForm.Email.focus();
        return false;
    }

    if (document.myForm.Password.value == "") {

        alert("Please Enter Password !!");
        document.myForm.Password.focus();
        return false;
    }

    if (document.myForm.city.value == "") {

        alert("Please provide city");
        document.myForm.city.focus();
        return false;
    }

    if (document.myForm.state.value == "") {

        alert("Please Enter State !!");
        document.myForm.state.focus();
        return false;
    }

    return (true);

}




function fun1() {
    var nm = myForm.First_Name.value;
    var gndr = document.getElementsByName('Gender');
    for (i = 0; i < gndr.length; i++) {
        if (gndr[i].checked) {
            if (i == 0) {
                score = "male";
            }
            if (i == 1) {
                score = "female";
            }
        }
    }
    var eml = myForm.Email.value;
    selectElement = document.querySelector('#sel')
    output = selectElement.value;
    var other = myForm.Address.value;
    //alert(name);
    alert("Name: " + nm + "\nGender:" + score + "\nEmail:" + eml + "\nCourse Required:" + output + "\nOther Requirement: " + other);
}