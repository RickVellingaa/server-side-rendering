const guidelineBtn = document.querySelectorAll('.guidelines__btn')
const guidelineInfo = document.querySelectorAll('.principleInfo')

guidelineBtn.forEach(item => {
    item.addEventListener('click', () => {
        const id = item.dataset.id
        const active = document.getElementById(id)

        guidelineInfo.forEach(content => content.classList.add('hide'))
        active.classList.remove('hide')
        
    }) 
  
});