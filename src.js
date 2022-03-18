
const task_list = document.querySelector('#task_list')
const form = document.querySelector('form')
const task = document.querySelector('#task')
let array = []
let count = 0
let key

form.addEventListener('submit', function (event) {
  event.preventDefault()

  if (task.value.trim() ==='') {
    alert('enter input')
  } else {
  count += 1
  const new_div = document.createElement('div')
  const new_li = document.createElement('li')
  const key_li = document.createElement('li')
  const text = task.value
  new_li.innerText = text
  const button_1 = document.createElement('button')
  const button_2 = document.createElement('button')
  const button_3 = document.createElement('button')
  button_1.innerText = 'edit'
  button_2.innerText = 'remove'
  button_3.innerText = 'completed' 
  key_li.innerText = 'task_'+count 
  new_div.append(key_li)
  new_div.append(new_li)
  new_div.append(button_1)
  new_div.append(button_2)
  new_div.append(button_3)
  
  localStorage.setItem('task_'+count, text)
  
  task_list.append(new_div)
  form.reset()
  }
})

// FUNCTION TO REMOVE TASK

task_list.addEventListener('click',function(event) {
  if (event.target.innerText === 'remove') {
    event.target.parentElement.remove()
    key = event.target.parentNode.firstChild.innerText
    localStorage.removeItem(key)
  }
}) 

// FUNCTION TO EDIT A TASK

task_list.addEventListener('click',function(event) {
  if (event.target.innerText === 'edit') {
    event.target.className = 'edit_button'
    event.target.previousElementSibling.contentEditable = true
    event.target.nextElementSibling.innerText = 'done'
    event.target.previousElementSibling.style.background = 'lightgray'
    key = event.target.parentNode.firstChild.innerText
  }
})

// FUNCTION TO SAVE CHENGES

task_list.addEventListener('click',function(event) {
  if (event.target.innerText === 'done') {
    event.target.parentNode.children[1].contentEditable = false
    event.target.innerText = 'remove'
    event.target.parentNode.children[1].style.background = 'none'
    localStorage.setItem(key,event.target.parentNode.children[1].innerText)
    
  }
})

// FUNCTION TO MARK COMPLETE

let click_count = 0
task_list.addEventListener('click',function(event) {
  
  if (event.target.innerText === 'completed') {
    click_count += 1 
    if (click_count%2===1) {
    event.target.parentNode.firstChild.style.textDecoration = 'line-through'
    event.target.parentNode.children[1].style.textDecoration = 'line-through'
    event.target.parentNode.children[2].style.display = 'none'
    }

    else {
      event.target.parentNode.firstChild.style.textDecoration = 'none'
    event.target.parentNode.children[1].style.textDecoration = 'none'
    event.target.parentNode.children[2].style.display = 'inline'
    }    
  }
})

// TO GET THE DATA FROM THE LOCALSTORAGE

for (let i=0 ; i<localStorage.length ; i++) {
  const new_div = document.createElement('div')
  const new_li = document.createElement('li')
  const key_li = document.createElement('li')
  new_li.innerText = localStorage.getItem(localStorage.key(i))
  const button_1 = document.createElement('button')
  const button_2 = document.createElement('button')
  const button_3 = document.createElement('button')
  button_1.innerText = 'edit'
  button_2.innerText = 'remove'
  button_3.innerText = 'completed'  
 
  key_li.innerText = localStorage.key(i)
  new_div.append(key_li)
  new_div.append(new_li)
  new_div.append(button_1)
  new_div.append(button_2)
  new_div.append(button_3)
  task_list.append(new_div)
}



