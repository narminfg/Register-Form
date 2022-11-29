if(localStorage.getItem('users')===null){
    localStorage.setItem('users',JSON.stringify([]))
}


function SignUp(){
    console.log('salam');
let btn=document.querySelector('#btn_add');
let username=document.getElementById('username').value;
let email=document.getElementById('email').value;
let password=document.getElementById('password').value;
let re_password = document.getElementById('re_password');

let usrs=JSON.parse(localStorage.getItem('users'));
console.log(usrs);

if(usrs.length === 0){
    console.log(usrs);
    usrs.push({
        Name: username,
        Email: email,
        Password: password,
        Re_password:re_password

    })

    localStorage.setItem('users',JSON.stringify(usrs))

}
else{

        if (usrs.find(x=>x.Email === email) && (x=>x.Name === username) && (x=>x.Password === password) && (x=>x.Re_password === re_password)) {
           alert('User already exists with this username')
        }
        else {
        usrs.push({
            Name: username,
            Email: email,
            Password: password,
            Re_password:re_password
    
        })
        localStorage.setItem('users',JSON.stringify(usrs))
        alert(`${username} has already registered`)
         console.log(usrs);
    }
    }
}


