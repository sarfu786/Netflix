const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e)=>{
    let messages = []
    if(name.value === ''|| name.value==null){
        alert('name is required')
    }
    if(password.value.length <=6){
       alert('password should be greater then 6')
    }
    if(password.value.length>10){
      alert('password should not excedd then 10')
    }
    if(messages.length>0){
        e.preventDefault()
        errorElement.innerText=messages.join(',')
    }
})
