let loginVerification = prompt("Введите логин:");
if (loginVerification == "admin") {
    let passwordVerification = prompt("Введите пароль:");
    if (passwordVerification == "12345") {
        alert("e salom uzbelaga!");
    } else if (passwordVerification == "" || passwordVerification == null) {
        alert("otmena ku yana,sassiq");
    } else {
        alert('fu');
    };
} else if (loginVerification == "" || loginVerification == null) {
    alert("Otmen buldi");
} else {
    alert("admin mas san,toba");
}