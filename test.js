let startButton=document.querySelector('.start_quiz button')
let  categories=document.querySelector('.categories')

const nameCat=[
    {name:'music',cat:'music'},
    {name:'sports',cat:'sport_and_leisure'},
    {name:'history',cat:'history'},
    {name:'geography',cat:'geography'},
    {name:'science',cat:'science'},
 ]

const fetchData  = async(limit,ca) => {
     console.log('server')
   try {
     const res=await fetch(`https://the-trivia-api.com/v2/questions/?categories=${ca}&limit=${limit}`)
     const data=await res.json()
     if(data){
       saveItem(data)
       console.log(data)
       window.location.href='./testQuestion.html'
     }
   } catch (error) {
    console.log('error',error)
   }
}
// fetchData(5,cat)
//  const loadQuestions=async(cat)=>{

//      await fetchData(5,cat)
//  }

 
const loadQuestions=()=>{
    
        nameCat.forEach((element)=>{
          let btn=document.createElement('button')
           btn.textContent=element.name
           btn.onclick=async()=>{
          await fetchData(5,element.cat)
           }
       categories? categories.appendChild(btn):null
      
        })

}

const saveItem=(data)=>{

    localStorage.setItem('quiz',JSON.stringify(data))
}
const  getQuestions=()=>{
   const questions= JSON.parse(localStorage.getItem('quiz'))
   return questions
}

 startButton.onclick =()=>{ 
   loadQuestions()
     categories.classList.add('active')

  }
 