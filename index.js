const input = document.querySelectorAll('input');


function submit(e){
    e.preventDefault()
    input.forEach(element => {
        console.log(element)
    });
}