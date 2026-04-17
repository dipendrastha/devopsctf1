const search = new URLSearchParams(window.location.search);
const value = search.get("html");

const outputEl = document.getElementById("output");

function escape(input) {
    
    input = input.replace(/<([a-zA-Z])/g, '<_$1');
    
    
    input = input.toUpperCase();
 
    return '<h1>' + input + 'alert()' + '>' + '</h1>';
}

if (value === null) {
  outputEl.innerHTML = "No comment added";
} else {
  outputEl.innerHTML = escape(value);
}
