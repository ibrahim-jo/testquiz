
let box_questions= document.querySelector('.box_questions')
let question=document.querySelector('.question h3')
let option_ans=document.querySelector('.option_ans') 
let btn_Next=document.querySelector('.footer button')
let numQues=document.querySelector('.footer span')
let box_timer=document.querySelector('.timer h4')
const  getQuestions=()=>{
    const questions= JSON.parse(localStorage.getItem('quiz'))
    return questions
}

const data=getQuestions()
let numberOfques=data.length 
let i=1
let result=0
let timer=15
    const loadQuestions=()=>{
        console.log(data)
        currentQues(0)
    }
    
    const currentQues=(index)=>{
       const  options=[...data[index].incorrectAnswers,data[index].correctAnswer]
       options.join()
       options.sort()
       setTimer(timer)
        question.textContent= data[index].question.text
        options.forEach(element=>{
            let btn_ans=document.createElement('button')
            btn_ans.innerText=element
            if(element===data[index].correctAnswer){
                btn_ans.dataset.correct=element
            }
            btn_ans.onclick=(e)=>handleSelect(e)
            option_ans.appendChild(btn_ans)
        })
        numQues.innerText=`${index+1}/${numberOfques}`
    }
    const handleSelect=(e)=>{
        if(e.target.dataset.correct){
            e.target.classList.add('correct')
            result++
        }
        else{
            e.target.classList.add('incorrect') 
        }
        option_ans.classList.add('disable')
        btn_Next.style.display='block'
        console.log('handle')
    }
    btn_Next.onclick=()=>{
        resetStatus()
        if(i<numberOfques){
            currentQues(i)
            i++
        }
        else{
            window.location.href='./result.html'
        }
        localStorage.setItem('result',JSON.stringify(result))
    }
    
    const resetStatus=()=>{
        while (option_ans.firstChild) {
            option_ans.removeChild(option_ans.firstChild)
        }
        option_ans.classList.remove('disable')
        btn_Next.style.display='none'
        clearInterval(counter)
        
    }
    
    const setTimer=(timer)=>{
        
        counter=setInterval(time,1000)
        function time() {
            box_timer.textContent=timer
            const zeroTimer=box_timer.textContent
              timer--
             
            if(timer<9){
                box_timer.textContent=`0${zeroTimer}`
            }

            if(timer<0){
                clearInterval(counter)
                btn_Next.style.display='block'
                option_ans.classList.add('disable')
                for (let i = 0; i < option_ans.children.length; i++) {
                   // const element = array[i];
                  if(option_ans.children[i].dataset.correct){
                      
                      option_ans.children[i].classList.add('correct')
                  }
                }
            }
            
        }
    }
    loadQuestions()
    
    

