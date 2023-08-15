const body = document.querySelector('body')
const box = document.querySelectorAll('.box')
box.forEach(function(box){
    box.addEventListener('click',function(e){
        console.log(e.target)
        if(e.target.id==='red'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='green'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='pink'){
            body.style.backgroundColor=e.target.id
        }
    })
})