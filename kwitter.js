function addUser() {
    user_name = document.getElementById("user_name").value;
    if (user_name == "") {
        window.alert("Enter User Name")
    }else{
    localStorage.setItem("User Name", user_name)
    window.location = "kwitter_room.html"}
}