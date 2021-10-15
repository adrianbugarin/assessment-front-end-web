console.log("hello world")

let favColor = document.getElementById("color")

let favPlace = document.getElementById("place")

let favRitual = document.getElementById("ritual")




favColor.addEventListener('click', (e) => {
    alert('Yellow');
})


favPlace.addEventListener('click', (e) => {
    alert('My Home')
})


favRitual.addEventListener('click', (e) => {
    alert('Grabbing snacks before a movie')
})