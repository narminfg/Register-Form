
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');




if(localStorage.getItem('users')===null){
    localStorage.setItem('users',JSON.stringify([]))
}
function Check(){
    console.log('salam');
let btn=document.querySelector('#btn_add');
let username=document.getElementById('username').value;
let email=document.getElementById('email').value;
let password=document.getElementById('password').value;


let usrs=JSON.parse(localStorage.getItem('users'));
if (usrs.find(x=>x.Email === email) && (x=>x.Name === username) && (x=>x.Password === password)) {
    alert('You have successfully signed in')
 }

 else{
    alert('User is not registered with this username')
 }
}