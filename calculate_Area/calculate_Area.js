let breadth;
let length;

function calculateArea() {
    length= parseFloat(document.getElementById('length').value);
    breadth= parseFloat(document.getElementById('breadth').value);

    let area= length*breadth;
    document.getElementById('result').innerText= `The area of the rectangle is: ${area} `;
}