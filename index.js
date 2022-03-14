
const seedColor = document.querySelector('#seedColor')

const colorSchemeBtn = document.querySelector('#colorSchemeBtn')
// const colorScheme = document.querySelector('#colorScheme').value

const color1 = document.querySelector('#color1')
const color2 = document.querySelector('#color2')
const color3 = document.querySelector('#color3')
const color4 = document.querySelector('#color4')
const color5 = document.querySelector('#color5')


const colorText1 = document.querySelector('#color-text-1')
const colorText2 = document.querySelector('#color-text-2')
const colorText3 = document.querySelector('#color-text-3')
const colorText4 = document.querySelector('#color-text-4')
const colorText5o = document.querySelector('#color-text-5o')


let hexColor = seedColor.value.substring(1)


colorSchemeBtn.addEventListener('click', ()=>{
    const colorScheme = document.querySelector('#colorScheme').value
    console.log(colorScheme)

    let URL = `https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=${colorScheme}`
    fetch(URL)
    .then(res => res.json())
    .then(data =>{
    console.log(data)    
    })
    // .catch(err => console.log(err))


})



