let Names = [];
let newNamesfortheArray = '';
let nombres = '';

function LastFirst () {
    let last = Names.length - 1;
    console.log(Names[last]);
    console.log(Names[0]);

}
function render () {
    let html = `<p>${nombres}</p>`;
    newNamesfortheArray += html;
    console.log(newNamesfortheArray);
    
    document.querySelector('.finaltext').innerHTML = newNamesfortheArray;
}
function newNames () {
    const namesInput = document.querySelector('.input');
    nombres = namesInput.value;
    Names.push(nombres);
    console.log(Names);
    LastFirst();
    render();

}