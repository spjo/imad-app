
var counter = 0;
var button = document.getButtonById('counter');
button.onClick = function() {
    
    counter++;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
}