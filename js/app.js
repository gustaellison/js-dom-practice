const buttonEl = document.querySelector('button')
console.log(buttonEl)

const inputEl = document.querySelector('input');
console.log(buttonEl)

const ulEl = document.querySelector('ul')
console.log(ulEl)

buttonEl.addEventListener('click', function(){
    console.log('click is happening')
    const newComment = document.createElement('li')
    //when we click on the button we want to create a new comment
    //create space for new element with new li tag
    const commentText = document.querySelector('input').value
    //newComment.document.querySelector('input').value
    console.log(commentText)

    // and we need the text from the input to put inside of the new li element we will create
    console.log(inputEl.value)
    newComment.innerText = commentText
    //check our work with the 
    // console.log(newComment)
    // document.querySelector('li').appendChild(newComment)

    ulEl.appendChild(newComment)

    inputEl.value = ''
    

}
)
