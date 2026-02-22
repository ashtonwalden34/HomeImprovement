document.querySelector('#calculate').addEventListener('click', () => {
    // console.log('clicked')
    const width = Number(document.querySelector('#width').value);
    const height = Number(document.querySelector('#width').value);
    const depth = Number(document.querySelector('#width').value);
    const paintType = document.querySelector('#quality').selectedOptions[0].text;
    const quality = document.querySelector('#quality').selectedOptions[0].value;
    // console.log(paintType)
    // console.log(quality)
}) // end of calculate function
