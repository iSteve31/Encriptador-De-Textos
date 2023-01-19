// Algorithm to Encrypt and Decrypt Texts

let input = document.querySelector(".body-input-text");
let output = document.querySelector(".body-output-card-text");
let btnEncrypt = document.getElementById("encrypting");
let btnDecrypt = document.getElementById("decrypting");
let btnCopy = document.getElementById("copy");
let hidding = document.getElementById("face");
let showing = document.getElementById("to-show");

input.focus();

function encrypt(){
  let textMod = input.value.replace(/(a|e|i|o|u)/g, function(match){
    if(match == "a"){
      return "ai";
    } else if(match == "e"){
      return "enter";
    } else if(match == "i"){
      return "imes";
    } else if(match == "o"){
      return "ober";
    } else if(match == "u"){
      return "ufat";
    } else{
      return match;
    }
  });
  return textMod;
}
function decrypt(){
  let textMod = input.value.replace(/(ai|enter|imes|ober|ufat)/g, function(match){
    if(match == "ai"){
      return "a";
    } else if(match == "enter"){
      return "e";
    } else if(match == "imes"){
      return "i";
    } else if(match == "ober"){
      return "o";
    } else if(match == "ufat"){
      return "u";
    } else{
      return match;
    }
  });
  return textMod;
}
function acceptedText(){
  const pattern = /[a-zñ\d\s]/g
  const nonpattern = /[^a-zñ\d\s]/
  accepted = pattern.test(input.value);
  notaccepted = nonpattern.test(input.value);
  if(accepted == true && notaccepted == false){
    return true;
  } else{
    alert("Por favor introducir caracteres válidos");
  }
}
function copyText(){
  navigator.clipboard.writeText(output.innerText);
}
/*Hide image and show the encrypted or decrypted text*/
function showText(){
  hidding.classList.add("to-hide");
  showing.classList.remove("to-hide");
}
/*Hide the encrypted or decrypted text and show image */
function hideText(){
  hidding.classList.remove("to-hide");
  showing.classList.add("to-hide");
}
/*Adjust input height for tablet and smarphone*/
function textHeight(){
  if(window.innerWidth <= 1250){
    let lines = input.value.split("\n").length; /*36px x line*/
    input.style.height = (lines*36) + "px";
  } else{
    input.style.removeProperty("height");
  };
}
input.addEventListener("input", textHeight);
window.addEventListener("resize", textHeight);

btnEncrypt.addEventListener("click", function(){
  if(input.value == ""){
    hideText();
  } else if(acceptedText() == true){
    output.innerText = encrypt();
    showText();
  };
});
btnDecrypt.addEventListener("click", function(){
  if(input.value == ""){
    hideText();
  } else if(acceptedText() == true){
    output.innerText = decrypt();
    showText();
  }
});
btnCopy.addEventListener("click", copyText);