
const seedColor = document.querySelector('#seedColor')
const colorSchemeBtn = document.querySelector('#colorSchemeBtn')
const colorSchemeID = document.querySelector('#colorScheme')
const color1 = document.querySelector('#color1')
const color2 = document.querySelector('#color2')
const color3 = document.querySelector('#color3')
const color4 = document.querySelector('#color4')
const color5 = document.querySelector('#color5')
const colorArray = document.querySelectorAll('.color')
const colorTextArr = document.querySelectorAll('.hex')

const colorText1 = document.querySelector('#hex-text-1')
const colorText2 = document.querySelector('#hex-text-2')
const colorText3 = document.querySelector('#hex-text-3')
const colorText4 = document.querySelector('#hex-text-4')
const colorText5 = document.querySelector('#hex-text-5')

const defaultState = () =>{
    let URL = `https://www.thecolorapi.com/scheme?hex=0047AB&mode=monochrome`
    fetch(URL)
    .then(res => res.json())
    .then(data =>{
    color1.style.backgroundColor = `${data.colors[0].hex.value}`
    color2.style.backgroundColor = `${data.colors[1].hex.value}`
    color3.style.backgroundColor = `${data.colors[2].hex.value}`
    color4.style.backgroundColor = `${data.colors[3].hex.value}`
    color5.style.backgroundColor = `${data.colors[4].hex.value}`
    
    colorText1.textContent = `${data.colors[0].hex.value}`
    colorText2.textContent = `${data.colors[1].hex.value}`
    colorText3.textContent = `${data.colors[2].hex.value}`
    colorText4.textContent = `${data.colors[3].hex.value}`
    colorText5.textContent = `${data.colors[4].hex.value}`
    })
    .catch(err => console.log(err))
}

const copyColor = () =>{
    document.execCommand("copy");
  }

const copyColorLogic = () =>{
    colorArray.forEach((color,index) =>{
        color.addEventListener("copy", (e) => {
          e.preventDefault();
          if (event.clipboardData) {
            e.clipboardData.setData("text/plain", colorTextArr[index].textContent);
            console.log(e.clipboardData.getData("text"))
          }
        });
    })  
}
  // this is where we will add in some new logic 

const copyHexLogic = () =>{
colorTextArr.forEach(hexText =>{
    hexText.addEventListener("copy", (e) => {
        e.preventDefault();
        if (e.clipboardData) {
          e.clipboardData.setData("text/plain", hexText.textContent);
          console.log(e.clipboardData.getData("text"))
        }
      });
})}

copyColorLogic()
copyHexLogic()
// mouse and touch events hex code to apear on color block 
const colorHexHoverLogic = () =>{
    colorArray.forEach((color, index) =>{
        color.addEventListener('mouseover', ()=> color.textContent = colorTextArr[index].textContent)

        color.addEventListener('mouseout', ()=> color.textContent= '')
    })}

//  add in touch logic 
colorHexHoverLogic()

colorSchemeBtn.addEventListener('click', ()=>{
    const hexColor = seedColor.value.substring(1)
    const colorScheme = document.querySelector('#colorScheme').value
    console.log(colorScheme)

    let URL = `https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=${colorScheme}`
    fetch(URL)
    .then(res => res.json())
    .then(data =>{
    color1.style.backgroundColor = `${data.colors[0].hex.value}`
    color2.style.backgroundColor = `${data.colors[1].hex.value}`
    color3.style.backgroundColor = `${data.colors[2].hex.value}`
    color4.style.backgroundColor = `${data.colors[3].hex.value}`
    color5.style.backgroundColor = `${data.colors[4].hex.value}`
    
    colorText1.textContent = `${data.colors[0].hex.value}`
    colorText2.textContent = `${data.colors[1].hex.value}`
    colorText3.textContent = `${data.colors[2].hex.value}`
    colorText4.textContent = `${data.colors[3].hex.value}`
    colorText5.textContent = `${data.colors[4].hex.value}`
    })
    .catch(err => console.log(err))
})

//Dark mode 
const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")
const colorChangeDark = () => {
    colorSchemeID.style.backgroundColor = "#1f2937";
    colorSchemeID.style.color = "#FCFCFC" 
    // change all accents to light grey for dark mode no white 
    // colorSchemeBtn.style.backgroundColor = "#1f2937"; 
    // colorSchemeBtn.style.color = "#FCFCFC";
    colorTextArr.forEach(hex => hex.style.color = "#FCFCFC")
    document.body.style.backgroundColor = '#1f2937'
}

const colorChangeLight = () => {
    colorSchemeID.style.backgroundColor = "#FCFCFC";
    colorSchemeID.style.color = "#000" 
    colorTextArr.forEach(hex => hex.style.color = "#000")
    document.body.style.backgroundColor = '#FCFCFC'
}
// const transformKey = key => 
//   "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();
// const changeColors = (colors) => {
//   Object.keys(colors).map(key => 
//     html.style.setProperty(transformKey(key), colors[key]) 
//   );
// }

const darkModeSwitcherLogic = () =>{
    const colorScheme = document.querySelector('#colorScheme')
    const hexTextArr = document.querySelectorAll('.hex')
    checkbox.addEventListener("change", (
        
        
        {target}) => {
target.checked ? colorChangeDark() : colorChangeLight();
       
    });
}
darkModeSwitcherLogic()

const isExistLocalStorage = (key) => 
  localStorage.getItem(key) != null;
const createOrEditLocalStorage = (key, value) => 
  localStorage.setItem(key, JSON.stringify(value));
const getValeuLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key));
checkbox.addEventListener("change", ({target}) => {
  if (target.checked) {
    createOrEditLocalStorage('mode','darkMode');
  } else {
    createOrEditLocalStorage('mode','lightMode');
  }
})

if(!isExistLocalStorage('mode'))
  createOrEditLocalStorage('mode', 'lightMode');
if (getValeuLocalStorage('mode') === "lightMode") {
  checkbox.removeAttribute('checked');
  colorChangeLight();
} else {
  checkbox.setAttribute('checked', "");
 colorChangeDark();
 
}

