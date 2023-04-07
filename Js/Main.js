const sectionstart = document.querySelector('.intro')
const sections = document.querySelectorAll('section')
const fadestyle = document.querySelectorAll('.fade_in')

const options ={
    root: null,
    threshold:1,
  
};

const sectionobserver = new IntersectionObserver(function(entires,options){
    entires.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add("apear");
            sectionobserver.unobserve(entry.target);    
        };
        
    })
},options);

fadestyle.forEach(fader=>{
    sectionobserver.observe(fader);
}
);

//-----------------------------------------------------------

const modalopenbtn = document.querySelectorAll('[data-modal-target]')
const modalclosebtn = document.querySelectorAll('[data-ftr-close]')

modalopenbtn.forEach(button =>{
    button.addEventListener('click',() =>{
        const modal= document.querySelector(button.dataset.modalTarget)
        openmodal(modal)
    })
})
modalclosebtn.forEach(button =>{
    button.addEventListener('click',() =>{
        const modal= button.closest('.modal-back')
       closemodal(modal)
    })
})

function openmodal(modal){
    if(modal==null)return   
    modal.classList.add('modal-activate')
}

function closemodal(modal){
       
    modal.classList.remove('modal-activate')
}
//-------------------------------------------------------------------------
const modalopen3d = document.querySelectorAll('[data-modal-parrot]') 
modalopen3d.forEach(a =>{
a.addEventListener('click',() =>{
    const modal= document.querySelector(a.dataset.modalParrot)
    openmodal(modal)
})
})  
//-------------------------------------------------------------------------
const modalopenfallen = document.querySelectorAll('[data-modal-fallen]') 
modalopenfallen.forEach(fallen =>{
fallen.addEventListener('click',() =>{
    const modal= document.querySelector(fallen.dataset.modalFallen)
    openmodal(modal)
})
})  
//-------------------------------------------------------------------------
const modalopenremember = document.querySelectorAll('[data-modal-remember]') 
modalopenremember.forEach(a =>{
a.addEventListener('click',() =>{
    const modal= document.querySelector(a.dataset.modalRemember)
    openmodal(modal)
})
})  
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------








