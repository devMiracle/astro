// interface User {
//     jwt: string,
//     id: number,
//     confirmed: boolean,
//     blocked: boolean,
//     username: string,
//     email: string
// }

class CurrentUser {
    private jwt: string
    private id: number
    private confirmed: boolean
    private blocked: boolean
    private username: string
    private email: string
    constructor(jwt: string, id: number, confirmed: boolean, blocked: boolean, username: string, email: string) {
        this.jwt = jwt
        this.id = id
        this.confirmed = confirmed
        this.blocked = blocked
        this.username = username
        this.email = email
    }
}

var currentUser: CurrentUser;

export const handleClick = () => {
    console.log("click")
}

export const handleSignInButton = () => {

    const HOST = "http://192.168.10.102:1337/api/auth/local/"

    let username: string = (document.getElementById("username") as HTMLInputElement).value
    let password: string = (document.getElementById("password") as HTMLInputElement).value

    const data = {
        identifier: username,
        password: password,
    }

    // Request API.
    fetch(HOST, {
        method: "POST",
        // mode: 'no-cors',
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json' // ; charset=utf-8
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    })
        .then((response) => {
            // Handle success.
            if (response.status >= 200)
                return response.json()
            else
                console.log("error")
        })
        .then(data => {
            currentUser = new CurrentUser(data.jwt,
                data.user.id,
                data.user.confirmed,
                data.user.blocked,
                data.user.username,
                data.user.email)
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);
        });
}

export const handleSignUnButton = () => {
    const HOST = "'http://192.168.10.102:1337/api/auth/local/register'"

    let username: string = (document.getElementById("username") as HTMLInputElement).value
    let email: string = (document.getElementById("email") as HTMLInputElement).value
    let password: string = (document.getElementById("password") as HTMLInputElement).value

    const data = {
        username,
        email,
        password
    }

    // Request API.
    fetch(HOST, {
        method: "POST",
        // mode: 'no-cors',
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json' // ; charset=utf-8
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    })
        .then((response) => {
            // Handle success.
            if (response.status >= 200)
                return response.json()
            else
                console.log("error")
        })
        .then(data => {
            console.log(data)

            // currentUser = new CurrentUser(data.jwt,
            //     data.user.id,
            //     data.user.confirmed,
            //     data.user.blocked,
            //     data.user.username,
            //     data.user.email)
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);
        });
}