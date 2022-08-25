let answer = prompt('What is your name?');
if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1')
    h1.innerText = answer;
    document.body.innerText = '';
    document.body.appendChild(h1);
}
// You can code a script which will take an input from an HTML form and display the text that a user types in on the screen.

var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);


// updated 
/*Remember you can access the console from the developer tools in your browser.

Another opinionated thing that you did in the code above is: setting my variables using the var keyword.

Although it's better to use either let or const, you're just running a quick experiment on a live website, and you want to use the most lenient variable keyword, the one which will not complain about you having already set the h1 or the input variables.

If you had a complete project with a modern JavaScript tooling setup, you'd be using let or const, but this is just a quick demo, so using var in this case is ok.

The next thing that you need to do is: set up an event listener. The event you're listening for is the change event. In this case, the change event will fire after you've typed into the input and pressed the ENTER key.

Here's your updated code:
*/

var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    console.log(input.value)
})

// interchangeable prompt box 