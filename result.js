let box_result=document.querySelector('.box_result h3 ')
let label_score=document.querySelector('.box_result label')
let button_result=document.querySelector('.box_result button')
const res=JSON.parse (localStorage.getItem('result'))


 box_result.textContent= res && res>2?'Congratulation':'Failed';
 label_score.textContent=res && res?`your Score is ${res}`:'your Score is 0'
button_result.onclick=()=>{
    window.location.href='./index.html'
}
