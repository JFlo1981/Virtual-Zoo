
function validate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username == "jowstafford17@gmail.com" && password == "Zoolander") {
        alert("login successfully");
        return false;
    } else {
        alert("login failed");
    }
}