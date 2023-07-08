const accessToken = '';
const searchInput = document.querySelector('form')
const userList = document.getElementById('user-list')

function fetchData(){

    searchInput.addEventListener("submit", (e) => {
        e.preventDefault()
    
        // const user = e.target.username.value
    
        fetch(`https://api.github.com/users/${searchInput.username.value}`, {
            method: 'GET',
            headers:{
                Authorization: `${accessToken}`,
                Accept: 'application/vnd.github.v3+json'
            },
        })
        .then(res => res.json())
        .then(userData => {
            console.log(userData)
            printUserCard(userData)
        })
        .catch(error => {
            console.log("Error:", error)
            })
    })
}

//Github from API displayed on a list format 
function printUserCard(userData){

    userList.innerHTML = ""

    const list = document.createElement("li");
    list.className = "user-list"

    list.innerHTML = `
        <img src=${userData.avatar_url} alt="avatar">
        <h2>${userData.name}</h2>
        <p>Bio:${userData.bio}</p>
        <a href="${userData.followers_url}">Followers:${userData.followers}</a>
        <a href="${userData.following_url}">Followers:${userData.following}</a>
        <a href="${userData.html_url}">Github Repo</a>
    `
    userList.append(list)
}

function initialize(){

    fetchData()
}
initialize()