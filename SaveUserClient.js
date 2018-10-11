let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password')
let warn = document.getElementById('warn')
let userreg = /[a-z,A-Z]/
let emailreg = /[@,.com]/
let passreg = /[a-z,A-Z,0-9]/

// write fns and handlers
const onSubmit = (e) => {
  e.preventDefault();

  if (validate()) {
    submitData(username.value, email.value,password.value)
    console.log(username.value, email.value,password.value)
  } else {
    // report err
  }
}

const validate = () => {
  let isValid = true;

  if (username.value === '' ){
    warn.innerHTML = 'check the form for errors'
    isValid = false;
  } else if (email.value === '' ){
    warn.innerHTML = 'check the form for errors'
    isValid = false;
  } else if (password.value === ''){
    warn.innerHTML = 'check the form for errors'
    isValid = false;
  }
  return isValid;
}


const submitData = (username, email, password) => {
  fetch('http://localhost:5000/SaveUser', {
    method:'post',
    headers: {
      'Content-Type': 'Application/json',
      'Accept':'Application/json'
    },
    body: JSON.stringify({
      username,
      email, 
      password
    })
  })
  .then((res) => res.json())
  .then((resp) => {

    console.dir(resp)
    let username = resp.message.username,
        email = resp.message.email,
        password = resp.message.password;

    console.log(`
username: ${username}
email: ${email}
password: ${password}
    `)

    renderDOM(username, email)
    location.href = `/dashboard.html`
    console.log(username)
  })
  .catch((err) => console.log('not saved', err))
}

const renderDOM = (username, email) => {
  const nameDiv = document.querySelector('.name')
  const emailDiv = document.querySelector('.email')

  nameDiv.innerHTML = username;
  emailDiv.innerHTML =  email;
}

document.querySelector('form').addEventListener('submit', onSubmit)
