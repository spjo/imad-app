console.log('Loaded!');

document.getElementById('main-text').innerHTML = "new Text";

var pic = document.getElementById('madi');

var marginLeft = 10;
function moveRight (){
    marginLeft += 3;
    pic.style.marginLeft = marginLeft + 'px';
}

pic.onclick = function(){
    var interval = setInterval(moveRight, 30);
//    pic.style.marginLeft = '200px';
};

var counter = 0;
var button = document.getButtonById('counter');
button.onClick = function() {
    
    counter++;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
}