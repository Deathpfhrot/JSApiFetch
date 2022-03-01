// JS API's - Projekt

let output = document.querySelector('#output')

// ?page=2 weiter leiten zur 2ten seite zumbeispiel

// fetch('https://picsum.photos/v2/list?page=2')
//     .then(response => response.json())
//     .then(json => {
//         console.log(json)
//         json.forEach(ele => {
//             console.log(ele.author);
//             output.innerHTML += (`<div><img src="${ele.download_url}" alt="">
//             <h3>${ele.author}</h3>
//             <a href="${ele.url}">See more</a>
//             </div>
//             `)
//         });
//     })
// console.log(json[0].author);

//

// API Lev1_1: fetch()
// verwende loop
// appendChild


let section = document.createElement('section')
document.body.appendChild(section)
console.log(section);

let out = document.querySelector('section')

let figure = document.getElementById('figure')
console.log(figure);

fetch('https://picsum.photos/v2/list')
    .then(response => response.json())
    .then(json => {
        json.forEach(ele => {
            console.log(ele.author);
            figure.innerHTML += (`<div><img src="${ele.download_url}" alt=""><h3>${ele.author}</h3></div>`)
        })

    })