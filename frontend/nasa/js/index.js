let searchButton = document.querySelector("#search");

searchButton.addEventListener("click", ()=>{
    console.log("button pressed")
    sendApiRequest()
})

async function sendApiRequest(){
    document.getElementById("content").innerHTML = ""
    let mot =document.getElementById("searchTerm").value;
    let API_KEY = "qXmZBaq0hZkcKFUqIP6FrUKyDhIrt5O3QVaUfI1K"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${mot}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}

function useApiData(data){
    if(data == undefined){
        document.querySelector("#content").innerHTML += "Aucune image pour cette Date"
    }
    else{
        document.querySelector("#content").innerHTML += data.explanation
        document.querySelector("#content").innerHTML += `<img src="${data.url}">`
    }

}