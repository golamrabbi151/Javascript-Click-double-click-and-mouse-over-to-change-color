var txtOne = document.querySelector("#one");
var txtTwo = document.getElementById("two");
var txtThree = document.querySelector("#three");

//mouse hover
txtOne.addEventListener('mouseover', function(){
    txtOne.textContent = "Mous Currently Over";
    txtOne.style.color = "red";
});

txtOne.addEventListener('mouseout',function(){
    txtOne.textContent = "Hover Over Me!";
    txtOne.style.color = "black";
})




  count = 0;
txtTwo.onclick = function() {
  count += 1;
   if(count%2==0){
    txtTwo.textContent = "Click on me!";
    txtTwo.style.color = "green";
  }else{
  txtTwo.textContent = "Click again!";
    txtTwo.style.color = "black";
  }
};


// double click and color change



txtThree.addEventListener('dblclick',function(){
  txtThree.textContent = "It was Double Clicked ";
  txtThree.style.color = "yellow";
});
