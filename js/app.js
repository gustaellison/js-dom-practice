const buttonEl = document.querySelector('button')
console.log(buttonEl)

const inputEl = document.querySelector('input');
console.log(buttonEl)

const ulEl = document.querySelector('ul')
//console.log(ulEl)

ulEl.addEventListener('click', function(event){

    console.log(event.target.style.textDecoration = 'line-through'
    )
})



buttonEl.addEventListener('click', function(){
    console.log('click is happening')
    const liEl = document.createElement('li')
    //when we click on the button we want to create a new comment
    //create space for new element with new li tag
    const commentText = document.querySelector('input').value
    //newComment.document.querySelector('input').value
    console.log(commentText)

    // and we need the text from the input to put inside of the new li element we will create
    //console.log(inputEl.value)
    liEl.innerText = commentText
    //check our work with the 
    // console.log(newComment)
    // document.querySelector('li').appendChild(newComment)

    ulEl.appendChild(liEl)

    inputEl.value = ''
    liEl.className = 'comment'
    console.log(liEl)

}
)

/*

const buttonEl = document.querySelector('button');
// selecting the input Element so we can retrieve the text when the button is clicked!
const inputEl = document.querySelector('input');
const ulEl = document.querySelector('ul');
console.log(buttonEl)
console.log(ulEl)
console.log(inputEl)


ulEl.addEventListener('click', function(event){
	// see if you can find the property that identifies the element that was clicked on!
	console.log(event.target)
	event.target.style.textDecoration = 'line-through';
	// update the element clicked on to have a line through the words, apply a css property to the element to have line through it
})


buttonEl.addEventListener('click', function(event){
	// console.log(event)
	// console.log('click is happening')

	// Goal 
	// When we click on the button we want to create a new comment
	// What element is a new comment? li
	// create an li element!
	const liEl = document.createElement('li');
	// console.log(liEl)

	// and we need the text from the input to put inside of the li element we created
	// Google: How to get the text from an input element using javascript?
    // be able log out the text in the input. 
	// select the input

	// the text in the input is the code below
	// console.log(inputEl.value)

	// Lets take the input text and put it inside of the liEl tag we created
	liEl.innerText = inputEl.value;
	liEl.className = 'comment'
	// to check our work log the liEl element
	console.log(liEl)
	// add the liEl element inside ul element in the html
	ulEl.appendChild(liEl)

	// clear the input after we create the comment
	inputEl.value = '';

}) */