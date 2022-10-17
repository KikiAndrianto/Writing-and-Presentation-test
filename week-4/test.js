const URL = "https://api.themoviedb.org/3/movie/popular?api_key=d41688cb0f0ee69b62145a634b120198&language=en-US"
const Options = {
    method : "GET"/"POST",
    headers : {
        "Content-type" : "Aplication/json"
    },
    body : user
}
fetch(URL, Options)

const getDataAPI = () => {
    const URL_API = "https://api.themoviedb.org/3/movie/popular?api_key=d41688cb0f0ee69b62145a634b120198&language=en-US"
    const Options = {
        method : "GET"
    }
    fetch (URL_API, Options)
.then((respons => respons.json))
.then(results => console.log(results))
.catch((err => console.log("ERROR")))
}

const getDataAPIAsnc = async () => {
    const URL_API = "https://api.themoviedb.org/3/movie/popular?api_key=d41688cb0f0ee69b62145a634b120198&language=en-US"
    const Options = {
        method : "GET"
    }
    let respons = await fetch(URL_API, Options)
    respons = await respons.json()
    console.log(respons);
}
getDataAPIAsnc()

async function hallo() {
    let results = await "Helloooo"
    return results
}
// es6
const hello = async () => {
    let results = await "Helloooo"
    return results
}
