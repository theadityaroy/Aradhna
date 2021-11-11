var inputVal = document.getElementById("name");
var btn = document.getElementById('btn');
var user = document.getElementById('user');
var email = document.getElementById('email');
var pass = document.getElementById('myInput');
var cpw = document.getElementById('myInput2');
var toastTrigger = document.getElementById('close')
var toastLiveExample = document.getElementById('liveToast')


btn.addEventListener('click', function () {

    if (pass.value == cpw.value) {

        alert("CONDITION TRUE ENTER ALL DATA TO DATAASSE LIKE : ");
        $Name = inputVal.value;
        $Username = user.value;
        $Password = pass.value;
        $Email = email.value;

        alert("Name - " + $Name);
        alert("Username - " + $Username);
        alert("Password - " + $Password);
        alert("Email - " + $Email);

        toastTrigger.addEventListener('click', function () {
            location.href = '/login.html';
        });

        var toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
    }
    else {
        alert("Password and Confirm Password did not match");
        alert("Not entering the password to data base yet")
    }
});