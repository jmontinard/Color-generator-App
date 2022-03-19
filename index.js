
const seedColor = document.querySelector('#seedColor')

const colorSchemeBtn = document.querySelector('#colorSchemeBtn')
// const colorScheme = document.querySelector('#colorScheme').value

const color1 = document.querySelector('#color1')
const color2 = document.querySelector('#color2')
const color3 = document.querySelector('#color3')
const color4 = document.querySelector('#color4')
const color5 = document.querySelector('#color5')

// const colorArray = Array.from(document.querySelectorAll('.color'))
const colorArray = document.querySelectorAll('.color')

// console.log(colorArray)
// add in copy code
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
    
    
        console.log(data) 
    
    
    })
    .catch(err => console.log(err))


}


const copyColor = () =>{
    document.execCommand("copy");
  }


const copyColorLogic = () =>{
   

    // console.log(colorTextArr)
    
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
  

const copyHexLogic = () =>{
colorTextArr.forEach(hexText =>{
    hexText.addEventListener("copy", (e) => {
        e.preventDefault();
        if (e.clipboardData) {
          e.clipboardData.setData("text/plain", hexText.textContent);
          console.log(e.clipboardData.getData("text"))
        }
      });
})
}

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

// add in dark mode 




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
    
    
        console.log(data) 
    
    
    })
    .catch(err => console.log(err))


})


//Dark mode 

const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")
const getStyle = (element, style) => 
  window
    .getComputedStyle(element)
    .getPropertyValue(style);
const initialColors = {
  bg: getStyle(html, "--bg"),
}
const darkMode = {
  bg: "#1f2937", // override styles here
}
const transformKey = key => 
  "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();
const changeColors = (colors) => {
  Object.keys(colors).map(key => 
    html.style.setProperty(transformKey(key), colors[key]) 
  );
}

// const darkModeSwitcherLogic = () =>{
//     const colorScheme = document.querySelector('#colorScheme')
//     const hexTextArr = document.querySelectorAll('.hex')
//     checkbox.addEventListener("change", (
        
        
//         {target}) => {
//         target.checked ? changeColors(darkMode) : changeColors(initialColors);

//         target.checked ? colorScheme.style.backgroundColor = "#1f2937"  : colorScheme.style.backgroundColor = "#FCFCFC";

//         target.checked ? colorScheme.style.color = "#FCFCFC"  : colorScheme.style.color = "#1f2937";
        
//         target.checked ? colorSchemeBtn.style.backgroundColor = "#1f2937"   : colorSchemeBtn.style.backgroundColor = "#FCFCFC";

//         target.checked ? colorSchemeBtn.style.color = "#FCFCFC"  : colorSchemeBtn.style.color = "#000000";

//         target.checked ? hexTextArr.forEach(hex => hex.style.color = "#FCFCFC") : hexTextArr.forEach(hex => hex.style.color = "#1f2937")
//             console.log(target)
       
//     });
// }



const darkModeSwitcherLogic = (target) =>{
        const colorScheme = document.querySelector('#colorScheme')

             target.checked ? colorScheme.style.backgroundColor = "#1f2937"  : colorScheme.style.backgroundColor = "#FCFCFC";
    
            target.checked ? colorScheme.style.color = "#FCFCFC"  : colorScheme.style.color = "#1f2937";
            
            target.checked ? colorSchemeBtn.style.backgroundColor = "#1f2937"   : colorSchemeBtn.style.backgroundColor = "#FCFCFC";
    
            target.checked ? colorSchemeBtn.style.color = "#FCFCFC"  : colorSchemeBtn.style.color = "#000000";
    
            target.checked ? colorTextArr.forEach(hex => hex.style.color = "#FCFCFC") : colorTextArr.forEach(hex => hex.style.color = "#1f2937")

    }

    checkbox.addEventListener("change", ({target}) => {
      darkModeSwitcherLogic(target)
    });

const isExistLocalStorage = (key) => 
  localStorage.getItem(key) != null;
const createOrEditLocalStorage = (key, value) => 
  localStorage.setItem(key, JSON.stringify(value));
const getValeuLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key));
// checkbox.addEventListener("change", ({target}) => {

// // darkModeSwitcherLogic(target)
//   if (target.checked) {
//     // changeColors(darkMode);
   
   
//     createOrEditLocalStorage('mode','darkMode');
//   } else {
//     // changeColors(initialColors);
   

//     createOrEditLocalStorage('mode','initialColors');
//   }
// })
// if(!isExistLocalStorage('mode'))
//   createOrEditLocalStorage('mode', 'initialColors');
// if (getValeuLocalStorage('mode') === "initialColors") {
//   checkbox.removeAttribute('checked');
//   changeColors(initialColors);
// } else {
//   checkbox.setAttribute('checked', "");
//   changeColors(darkMode);
// }

// darkModeSwitcherLogic()