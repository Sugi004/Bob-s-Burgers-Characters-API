// Creating the necessary elements using DOM

let root = document.createElement("div")
root.setAttribute("class", "container-fluid")
root.setAttribute("id", "root")
document.body.appendChild(root)

let h1 = document.createElement("h1")
h1.setAttribute("id","h1")
h1.innerHTML = "The Bob's Burgers"
root.appendChild(h1)

let div = document.createElement("div")
div.setAttribute("class", "container-fluid")
root.appendChild(div)

let body = document.createElement("div")
body.setAttribute("class", "card-wrapper")
root.appendChild(body)


const url = "https://bobsburgers-api.herokuapp.com/characters/?limit=16&skip=60"


async function getData() // Fetching data from url = https://bobsburgers-api.herokuapp.com/characters/?limit=15&skip=70
{
    try{
        let res = await fetch(url)
        let data = await res.json()
        constructData(data)
        console.log(data)
    }
    catch(error)
    {
        console.log(error)
        throw error;
    }
}
getData()



async function constructData(data)  // Displaying the fetched data
{
    data.forEach(async (e) => {
        let div = document.createElement("div")
        div.innerHTML = `<div class="card " style="width: 20rem; >
            <div   div class="card-body" id="text"  >
                 <img src="${e.image}">              
                <h5 class="card-title">${e.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted"><strong>First Episode:</strong> ${e.firstEpisode}</h6>
                <p><strong>Gender </strong>${e.gender}</p>
                <p><strong>Occupation: </strong> ${e.occupation}</p>
                <p><strong>Voiced By: </strong> ${e.voicedBy}</p>
                               
            </div>
        </div>`    
        body.appendChild(div)  
    });
}
