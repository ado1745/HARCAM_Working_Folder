# Class Notes
This is a space for us to put highlevel overview of concepts as we cover them. Be sure to use all of the resources available to you such as the video guides, unit-overviews etc.

## JavaScript
### For Loops
```js
var things = [...];
for (var i = 0; i < things.length; i++) {
    // Do something with things[i]
}
```

Be comfortable _iterating_ over an array and accessing elements (or items) in an array.

### IF / Else If / Else
```js
if (canLogin === true) {
    // handle login
} else if (canUpdate === true) {
    // handle can update stuff
} else {
    // handle the default case
}
```

_Note: It would help to be comfortable with the operators, too: *&&* and *||*_

### Functions
Know the difference between:
```js
function foo(myArgs) {
    // function details
}
```

and

```js
foo('Hello');
```

The first is a function _declaration_ and the second is a function _execution_ (also known as calling or invoking the function)

### Strings and Arrays
Before comfortable with working with `strings` and `arrays` as these are the most common data types you'll be encoutering
in your homeworks and in your professional lives as well.
```js
var str = 'I am a string';
var arr = ['I', 'am', 'an', 'array', 'of', 'strings'];

// Don't forget that arrays can have ALL TYPES of data inside
var numArray = [1, 2, 3, 4, 5];
var mixedArray = ['a', 1, {obj: 1}]; // <-- mixed array
```

Here are some good links to consider for learning more about these two APIs:
* String API - [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) & [w3schools](http://www.w3schools.com/js/js_strings.asp)
* Array API - [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) & [w3schools](http://www.w3schools.com/js/js_arrays.asp)

### Objects
In JavaScript objects are a collection of properties (think of a bunch of variables tied together by a parent variable)

```js
var person = {
    name: 'Johhny',
    age: 24
}

// So to access these properties, you'll do something like:
console.log(person.name);
console.log(person.age);
```
## JQuery
### Get the value from an input
$("#inputName").val();

### Creating HTML Elements vs Element Selectors
```js
$('<div>'); //<-- Creates an DIV HTML node
$('<button>'); // <-- Creates a button

// The following are all selectors
$('div'); //<-- tries to find all div elements
$('.myDiv'); //<-- finds all elements with class myDiv
$('#myDiv'); //<-- finds any elements with the ID of myDiv
```
Be comfortable creating any of the different types of elements using this technique. Check out the [jQuery API](http://api.jquery.com/) for more information.
### Adding elements to the DOM and changing Text
```js
// Given some HTML or a new ELEMENT
var childDiv = $('<div>');

$('#parentDiv').append(childDiv);

// Similarly we can use a prepend
$('#otherParentDiv').prepend(childDiv);
```
Have a look at the `.empty()` command as well for tips on erasing the contents of a HTML element.

### Getting/Setting Attributes
```js
// Let's create an image, then set the source of that image
var myImg = $('<img>');
myImg.attr('src', 'path/to/image/file.jpg');
$('#imageDiv').append(myImg);
```

### Custom Data Attributes
Custom data attributes allow us to create our own attribute on an HTML element.

Here's the html for manually adding an attribute:
```html
<div class="hello-world">
    <span id="mySpan" data-username="foobar">baz</span>
</div>
```
Here is the JavaScript that allows us to access the attribute
```js
// Using jQuery...
$('#mySpan').data('username');

// Here's how we can update that same custom data attribute
$('#mySpan').data('newAttr', 'yes');
```
*WARNING* There is an extreme gotcha to be aware of 

Take care to notice how you set a custom attribute:
```js
/*
   using the .data function to set a custom attribute means you need
   to access that attribute with .data (can't use .attr here!)
*/
$('.element').data('foo', 'bar');

/*
  using .attr to set a custom attribute means that it will be accessed through
  both .data nad .attr
*/
$('.element').attr('data-biz', 'baz');

console.log($('.element').data('foo')); // bar
console.log($('.element').attr('data-foo')); // undefined

console.log($('.element').data('biz')); // baz
console.log($('.element').attr('data-biz'));  //baz
```
The overall point is that you need to be consistent here. Check [this](https://jsfiddle.net/5rjg0nng/2/) out
to see it in action.

### Timers, Async vs Sync
In JavaScript, your code falls into synchronous or asynchrous code. In short, this means your code either executes now or later. Synchronous code happens right now, asynchronous code happens later.

```js
function doSomething() {
    //... do some task
}

doSomething(); //<== this code happens now. The function will be called and executed right now.
```

Let's look at some __async__ code. We know about two types of JavaScript timers: __setTimeout__ and __setInterval__. Both of these functions are built into JavaScript and execute _later_. Here's an example:

```js
var timeoutId = setTimeout(function () {
    performATask(); // Whatever this task is, it happens LATER, after 1000ms have passed.
}, 1000);
```

For a __setTimeout__ note that it is only called once after the time. You have to provide a _function_ that will represent the behavior or logic that will be executed after the time has passed. It also takes a _number_ that says how long to wait before the function you passed is actually executed (when that logic happens).

Let's say we want to do something repeatedly at a set cadence, we'd want to turn to our friend __setInterval__. It takes the same _function_ function and a _number_ representing the time.

```js
var intervalId = setInterval(function () {
    performTaskOverAndOver(); // Whatever this task is, it happens LATER but more than once, as many times as it happens until you stop it.
}, 1000);
```

How do we clear an interval or timeout? There's a built in function that can help with that:

```js
clearTimeout(timeoutId); // clears a timeout
clearInterval(intervalId); // clear an interval
```

### ES6
ES6 (ECMA Script version 6) is a standard that the language JavaScript is based on.

## Let and Const
Both of these are a replacement for `var` keyword when defining variables. For example,

```js
let age = 61; // value can change
const drinkingAge = 21; // value cannot change
```

Both of these new ways to declare variables add block scope! That means when declared in certain situations, they are only available in that scope. Let's have a look:

```js
let allowWithdraw = true;

if (allowWithdraw) {
    let amount = 500;
}

console.log(amount); // ❌ Error!
```

There's an important difference here between `let` and `const`. Using the `const` keyword means that the value of the variable cannot be changed. A good way to think about this is that the `=` (assignment) can only happen _once_ for a variable declared with `const`.

```js
const age = 4;

// none of the following are okay
age = 5; // ❌
age++; // ❌ because ++ really means +=
```

One thing to note, you can declare an array or an object using `const` and make changes to the _values_. This works because you wouldn't be re-assigning the variable.

```js
const car = {
    mileage: 100
};

car.mileage = 1000; // ✅ This is okay because the _property_ is being updated, not the variable assignment!
```
