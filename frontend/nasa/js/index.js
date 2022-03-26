let searchButton = document.querySelector("#search");

searchButton.addEventListener("click", ()=>{
    console.log("button pressed")
    sendApiRequest()
})

async function sendApiRequest(){
    document.getElementById("txt", ).innerHTML = ""
    document.getElementById("title").innerHTML = ""
    document.getElementById("img").innerHTML = ""
    let mot =document.getElementById("searchTerm").value;
    let API_KEY = "qXmZBaq0hZkcKFUqIP6FrUKyDhIrt5O3QVaUfI1K"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${mot}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}

function useApiData(data){
    document.querySelector("#title").innerHTML += data.title
    document.querySelector("#img").innerHTML += `<img src="${data.url}">`
    document.querySelector("#txt").innerHTML += data.explanation

}