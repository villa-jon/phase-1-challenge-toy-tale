let addToy = false;
const andy = 'http://localhost:3000/toys'

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toyCollection = document.querySelector('#toy-collection')

  const likeToys = () => {
    fetch(andy)
    .then(response => response.json())
    .then(data => 
        {
          // console.log(data)
      data.map((toy) => getToys(toy)) 
    }
    )
  }
 
  function getToys(toy) {
    console.log(toy)
    let div = document.createElement('div')
    let h2 = document.createElement('h2')
    let img = document.createElement('img')
    let pTag = document.createElement('p')
    let button = document.createElement('button')

    div.className = "card"
    button.className = "like-btn"
    img.className = "toy-avatar"

    h2.innerText = toy.name
    img.src = toy.image
    pTag.innerText = toy.likes
    button.innerText = "like-button"
    
    div.append(h2, pTag, img, button)
    toyCollection.appendChild(div)
  }

  toyFormContainer.addEventListener("submit", function(w) {
    w.preventDefault()
    let name = w.target.name.value  
    let image = w.target.image.value 

    fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(
        {"name": name, 
        "image": image, 
        "likes": 0,
      })
    })
  })

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
 
  likeToys()
});
