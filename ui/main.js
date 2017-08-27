console.log('Loaded!');

document.getElementById('main-text').innerHTML = "new Text";

var pic = document.getElementById('madi');

function moveRight (){
    marginLeft += 10;
    img.style.marginLeft = marginLeft + 'px';
}

pic.onclick = function(){
    var interval = setInterval(moveRight, 100);
//    pic.style.marginLeft = '200px';
};