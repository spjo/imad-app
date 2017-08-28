
var counter = 0;
var button = document.getElementById('counter');
button.onClick = function() {
    
    counter++;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
}