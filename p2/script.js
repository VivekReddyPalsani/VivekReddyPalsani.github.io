const showLogin = () => {
    let str=`
    <div class='App-Container'>
    <center>
    <h1>Login Form</h1>
    <p><input type="text" id="txtEmail" placeholder = 'Enter your Email'></p>
    <p><input type="password" id="txtPass" placeholder = 'Enter your password'></p>
    <p><button onclick = 'showHome()'>Log In</button></p>
    <p><button onclick='showRegister()'>Create Account</button></p>
    </center>
    </div>
    `
    root.innerHTML = str
}

const showRegister = () => {
    let str=`
    <div class='App-Container'>
    <center>
    <h1>Register Form</h1>
    <p><input type="text" id="txtName" placeholder = 'Enter your name'></p>
    <p><input type="text" id="txtEmail" placeholder = 'Enter your Email'></p>
    <p><input type="password" id="txtPass" placeholder = 'Enter your password'></p>
    <p><button>Register</button></p>
    <p><button onclick = 'showLogin()'>Login to Existing Account</button></p>
    </center>
    </div>
    `
    root.innerHTML = str
}

const showHome = () => {
    let str = `
    <div class='App-Container'>
    <center><h1>WELCOME</h1></center>
    </div>
    `
    root.innerHTML = str
}