function login()
{
    var uname = document.forms.form.uname.value;
    var pass = document.forms.form.pass.value;

    if(uname == "rutu" && pass == "21121997")
    {
        window.location.href="index.html";
    }else
    {
        alert('Invalid Username or Password');
    }
}