const number = document.querySelectorAll('.round');
const button = document.querySelector('.button');
const one = document.querySelector('.display-one');
const two = document.querySelector('.display-two');
const rate = document.querySelector('.ratings');
var active_number;

number.forEach (btn=>{
    btn.addEventListener('click', greyOut);
});

function greyOut (event){
    number.forEach(btn => {
        btn.classList.remove('active');
    });
    if (event.target.classList.contains('active')){
        event.target.classList.remove('active');
    } else {
        event.target.classList.add('active');
}

    active_number = event.target.innerText;
    console.log(active_number)
    return active_number;
}

button.addEventListener('click', onSubmit);
function onSubmit(){
    if (active_number){
        one.classList.add('hidden');
        two.classList.add('show');
        rate.innerHTML = (`You selected ${active_number} out of 5 stars`);
    }
}


