const check = document.getElementById("check");
const clear = document.getElementById("clear");
const result = document.getElementById("result");
const input = document.getElementById("input");

check.addEventListener("click", function(){
  let inputValue = input.value.toLowerCase();
  let vowalCount = 0;

  for(let i = 0; i < inputValue.length; i++){
    let letter = inputValue[i];

    if(letter.match(/([a,e,i,o,u])/)){
      vowalCount++;
    }
  }
  result.innerHTML = `${input.value.toUpperCase()} has ${vowalCount} vowals`;
});

clear.addEventListener("click", function(){
  input.value = "";
  result.innerHTML = "";
})