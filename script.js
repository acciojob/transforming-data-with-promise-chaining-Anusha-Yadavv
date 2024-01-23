//your JS code here. If required.
document.getElementById('btn').addEventListener('click', performAsyncOperations);

function performAsyncOperations() {
    // Get the input value
    const inputNumber = document.getElementById('ip').value;

    // Create a promise that resolves after 2 seconds with the inputNumber
    const promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve(inputNumber);
        }, 2000);
    });

    // Chain promises using then
    promise1.then((result1) => {
        // Display result1 in the div with id 'output'
        document.getElementById('output').textContent = `Result: ${result1}`;

        // Create a promise that multiplies result1 by 2 and resolves after 1 second
        const promise2 = new Promise((resolve) => {
            setTimeout(() => {
                resolve(result1 * 2);
            }, 1000);
        });

        return promise2;
    })
    .then((result2) => {
        // Display result2 in the div with id 'output'
        document.getElementById('output').textContent = `Result: ${result2}`;

        // Create a promise that subtracts 3 from result2 and resolves after 1 second
        const promise3 = new Promise((resolve) => {
            setTimeout(() => {
                resolve(result2 - 3);
            }, 1000);
        });

        return promise3;
    })
    .then((result3) => {
        // Display result3 in the div with id 'output'
        document.getElementById('output').textContent = `Result: ${result3}`;

        // Create a promise that divides result3 by 2 and resolves after 1 second
        const promise4 = new Promise((resolve) => {
            setTimeout(() => {
                resolve(result3 / 2);
            }, 1000);
        });

        return promise4;
    })
    .then((result4) => {
        // Display result4 in the div with id 'output'
        document.getElementById('output').textContent = `Result: ${result4}`;

        // Create a promise that adds 10 to result4 and resolves after 1 second
        const promise5 = new Promise((resolve) => {
            setTimeout(() => {
                resolve(result4 + 10);
            }, 1000);
        });

        return promise5;
    })
    .then((finalResult) => {
        // Update the text content of the output div with the final result
        document.getElementById('output').textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}