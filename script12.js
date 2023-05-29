let user = document.getElementById("name-field");
const avatar = document.getElementById("userpic-field");
const comment = document.querySelector(".form__comment-field");
let chat = document.querySelector(".chat");
let chatuserpic = document.getElementById("chatuserpic");
let chatname = document.getElementById("chatname");
let chatcomment = document.getElementById("chatcomment");
const button = document.querySelector(".button");
user.addEventListener("input", function(){
   checkName(this);
});
function checkName(user){
    user = user.value.replaceAll(' ', "");
    return user[0].toUpperCase() + user.slice(1).toLowerCase();
}
function addNewMessage() {
    chatuserpic.setAttribute('src', `${avatar.value}`);
    chatname.textContent = `${checkName(user)}`;
    chatcomment.textContent = `${comment.value.replace(/(xxx|viagra)/gi,"***")}`;
}
button.addEventListener("click", addNewMessage);
