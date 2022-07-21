const fullName = document.querySelector('#fullName').value;
const email = document.querySelector('#email').value;
const phone = document.querySelector('#phone').value;
const submitBtn = document.querySelector('#submitBtn');



submitBtn.addEventListener('click' , function(){
    if(fullName === '' || fullName === null){
        alert('Check Full Name');
    }
})