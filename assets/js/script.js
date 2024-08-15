document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('entry').addEventListener('submit',getName);
});

 function getName(event){
    event.preventDefault();
    let name = document.getElementById('name');
    console.log(name.value)
    return name.value;

 }

console.log("Hello World")