
let numberOfElements = document.querySelector("[name = 'elements']");
let elementsText = document.querySelector("[name = 'texts']");
let type = document.querySelector("[name = 'type']");
let btn = document.querySelector("[name = 'create']");
let mainDiv = document.querySelector(".results");
btn.onclick = function (){
while(mainDiv.firstChild){
  mainDiv.firstChild.remove();
}
 let elementsNo = numberOfElements.value;
 for(let i = 0; i < elementsNo ; i++){
  let text =  document.createTextNode(`${elementsText.value}`);
  let ty = document.createElement(type.value);
  mainDiv.appendChild(ty);
  ty.appendChild(text);
  ty.className = "box";
}
}
