
const handleSignInButton = (target) => {

    console.log("click")

    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    console.log(username)
    console.log(password)
    const data = {
        identifier: username,
        password: password,
    }
    // Request API.
    fetch('http://192.168.10.102:1337/api/auth/local', {
        method: "POST",
        mode: 'no-cors',
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    })
        .then((response) => {
            // Handle success.
            console.log('Well done!');
            console.log(response)
            // console.log('User profile', response.data.user);
            // console.log('User token', response.data.jwt);
            return response.json()
        })
        .then((data) => console.log(data))
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);
        });

}