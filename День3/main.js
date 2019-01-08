let acc = document.querySelector(".exampleAcc");
let headers = acc.querySelectorAll(".accordeonHeader");

for (let i = 0; i < headers.length; i++){
    headers[i].addEventListener('click', showBody)
}

function showBody(event) {
    acc.querySelector(".accordeonVis").classList.remove("accordeonVis");
    acc.querySelector(".active").classList.remove("active");

    event.target.classList.add("active");
    event.target.nextElementSibling.classList.add('accordeonVis')
}