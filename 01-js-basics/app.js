var username = document.getElementById("username");
const divEl = document.getElementById("msg")

function submitForm(event) {
  event.preventDefault();
  if (username.value.includes("@")) {
    divEl.innerHTML = 'Thanks for submitting email';
  } else {
    divEl.innerHTML = "Error : Not proper email format";
  }
}

function getPosts(event){
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function(response) {
            return response.json()
        }).then(function(posts) {
            console.log(posts);
        })
}

// var x = 20;

// var y = '20';

// console.log(x == y);            // true
// console.log(x === y);            // value but also type

// x = "Some string";          //
// console.log(typeof(x));         // string

// x = true;

// console.log(typeof(x));         // boolean
