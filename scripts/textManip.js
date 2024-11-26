function textToggle(){

var toggleText = document.getElementById('toggleText')
{
        if (toggleText.innerHTML === "Original text") {
            toggleText.innerHTML = "New text";
        } else {
            toggleText.innerHTML = "Original text";
        }
}
}
let imgButton = document.getElementById('imgButton')
let img = document.getElementById('img')
    imgButton.addEventListener('click', function(){
        if (img.src.includes('images/rexburg-temple.webp')){
            img.src='images/portland-temple.webp';
        } else {
            img.src = 'images/rexburg-temple.webp';
        }
    })
