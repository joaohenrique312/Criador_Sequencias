let res = document.getElementById('res');
let botao = document.getElementById('confirmar');

botao.addEventListener('click', function () {
    let startInput = document.getElementById('inicio');
    let endInput = document.getElementById('fim');
    let amplitudeInput = document.getElementById('amplitude');

    let start = parseFloat(startInput.value);
    let end = parseFloat(endInput.value);
    let amplitude = parseFloat(amplitudeInput.value);

    if (!isNaN(start) && !isNaN(end) && !isNaN(amplitude)) {
        let sequence = '';

        for (let i = start; i <= end; i += amplitude) {
            sequence += i;
            if (i + amplitude <= end) {
                sequence += ', ';
            }
        }
        res.innerText = 'Sequência: ' + sequence;

        startInput.value = '';
        endInput.value = '';
        amplitudeInput.value = '';
    } else {
        alert("Número inválido!");
    }
});
