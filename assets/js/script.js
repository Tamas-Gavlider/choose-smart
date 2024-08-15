document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('entry').addEventListener('submit',getName);
});

let name = document.getElementById('name');
    let age = document.getElementById('age');

 function getName(event){
    event.preventDefault();
    console.log(age.value);
    console.log(name.value)
    return name.value;

 }

