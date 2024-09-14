let input = document.querySelector("input")
let button = document.querySelector("button")
let data  = document.querySelector("span")

button.onclick = function () {
    creatRepo();
    
}
//   <!-- n /  b   ` -->

function creatRepo() {
   if ( input.value == '' ) {
    data.innerHTML = "<span>please write githup name</span>"
   } else {
        fetch (`https://api.github.com/users/${input.value}/repos`)
        .then((response) => response.json())
        .then((repoies) => {
            data.innerHTML = '';
            repoies.forEach(repo => {
                let maiDiv = document.createElement("div")
                maiDiv.className = "divs"
                let textDiv = document.createTextNode(repo.name)
                maiDiv.append(textDiv)
                let repoUrl = document.createElement("a")
                repoUrl.className = "links"
                let textUrl = document.createTextNode("visit")
                repoUrl.href = `https://github.com/${input.value}/${repo.name}`;
                repoUrl.setAttribute("target", "_blank")
                repoUrl.appendChild(textUrl)
                maiDiv.appendChild(repoUrl)
                let stars = document.createElement("span")
                let starsCou = document.createTextNode(`Stars ${repo.stargazers_count}`)
                stars.appendChild(starsCou);
                maiDiv.appendChild(stars)

                data.appendChild(maiDiv)
            })
            
        })
   }
}
