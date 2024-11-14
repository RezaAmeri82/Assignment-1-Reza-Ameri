let foo = 0;
let bar = 0;

document.getElementById('divideButton').addEventListener('click', function() {
    console.log('divide');

    foo = parseFloat(document.getElementById('input1').value);
    bar = parseFloat(document.getElementById('input2').value);

    if (bar === 0) {
        alert('You cant divide us!');
    } else {
        let result = foo / bar;
        console.log('Result:', result);
        document.body.insertAdjacentHTML('beforeend', `<p>Result: ${result}</p>`);
    }
});