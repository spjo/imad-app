console.log('Loaded!');

document.getElementById('main-text').innerHTML = "new Text";

var pic = document.getElementById('madi');

var marginLeft = 10;
function moveRight (){
    marginLeft += 3;
    pic.style.marginLeft = marginLeft + 'px';
}

pic.onclick = function(){
    var interval = setInterval(moveRight, 100);
//    pic.style.marginLeft = '200px';
};