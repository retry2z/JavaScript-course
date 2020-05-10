function attachEventsListeners() {

    const fromKm = (number, cmd) => {
        let result = 0;
        if (cmd === 'from') {
            result = number * 1000;
        } else if (cmd === 'to') {
            result = number / 1000;
        }
        return result;
    };
    const fromM = (number, cmd) => {
        let result = 0;
        if (cmd === 'from') {
            result = number * 1;
        } else if (cmd === 'to') {
            result = number / 1;
        }
        return result;
    };
    const fromCm = (number, cmd) => {
        let result = 0;
        if (cmd === 'from') {
            result = number * 0.01;
        } else if (cmd === 'to') {
            result = number / 0.01;
        }
        return result;
    };
    const fromMm = (number, cmd) => {
        let result = 0;
        if (cmd === 'from') {
            result = number * 0.001;
        } else if (cmd === 'to') {
            result = number / 0.001;
        }
        return result;
    };
    const fromMi = (number, cmd) => {
        let result = 0;
        if (cmd === 'from') {
            result = number * 1609.34;
        } else if (cmd === 'to') {
            result = number / 1609.34;
        }
        return result;
    };
    const fromYrd = (number, cmd) => {
        let result = 0;
        if (cmd === 'from') {
            result = number * 0.9144;
        } else if (cmd === 'to') {
            result = number / 0.9144;
        }
        return result;
    };
    const fromFt = (number, cmd) => {
        let result = 0;
        if (cmd === 'from') {
            result = number * 0.3048;
        } else if (cmd === 'to') {
            result = number / 0.3048;
        }
        return result;
    };
    const fromIn = (number, cmd) => {
        let result = 0;
        if (cmd === 'from') {
            result = number * 0.0254;
        } else if (cmd === 'to') {
            result = number / 0.0254;
        }
        return result;
    };

    const input = document.getElementById('inputDistance');
    const outputForm = document.getElementById('outputDistance');
    const inputUnit = document.getElementById('inputUnits');
    const outputUnit = document.getElementById('outputUnits');
    const btn = document.getElementById('convert');

    btn.addEventListener('click', () => {
        let output = 0;
        switch (inputUnit.value) {
            case 'km':
                output = fromKm(input.value, 'from');
                break;
            case 'm':
                output = fromM(input.value, 'from');
                break;
            case 'cm':
                output = fromCm(input.value, 'from');
                break;
            case 'mm':
                output = fromMm(input.value, 'from');
                break;
            case 'mi':
                output = fromMi(input.value, 'from');
                break;
            case 'yrd':
                output = fromYrd(input.value, 'from');
                break;
            case 'in':
                output = fromIn(input.value, 'from');
                break;
            case 'ft':
                output = fromFt(input.value, 'from');
                break;
        }
        console.log(output + ' from');

        switch (outputUnit.value) {
            case 'km':
                output = fromKm(output, 'to');
                break;
            case 'm':
                output = fromM(output, 'to');
                break;
            case 'cm':
                output = fromCm(output, 'to');
                break;
            case 'mm':
                output = fromMm(output, 'to');
                break;
            case 'mi':
                output = fromMi(output, 'to');
                break;
            case 'yrd':
                output = fromYrd(output, 'to');
                break;
            case 'in':
                output = fromIn(output, 'to');
                break;
            case 'ft':
                output = fromFt(output, 'to');
                break;
        }
        console.log(output + ' to');
        outputForm.value = output;
    });
}