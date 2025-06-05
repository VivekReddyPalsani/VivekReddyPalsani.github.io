const showLogin = () => {
    let str=`
    <div class='App-Container'>
    <h1>Login Form</h1>
    <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <p><button onclick = 'showHome()'>Log In</button></p>
    <p><button onclick='showRegister()'>Create Account</button></p>
    </div>
    `
    root.innerHTML = str
}

const showRegister = () => {
    let str=`
    <div class='App-Container'>
    <h1>Register Form</h1>
    <p><input type="text" id="txtName"></p>
    <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <p><button>Register</button></p>
    <p><button onclick = 'showLogin()'>Login to Existing Account</button></p>
    </div>
    `
    root.innerHTML = str
}

const showHome = () => {
    let str = `
    <div class='App-Container'>
    <h1>WELCOME</h1>
    </div>
    `
    root.innerHTML = str
}