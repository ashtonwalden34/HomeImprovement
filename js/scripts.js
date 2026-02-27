// function to add list item
let addLI = (list, message) => {
    theList = document.querySelector(list);
    let myListItem = document.createElement('li');
    myListItem.textContent = message;
    theList.appendChild(myListItem);
} // end of add list item function

document.querySelector('#calculate').addEventListener('click', () => {
    // clean out the existing lists
document.querySelector('#paint').innerHTML = "";
document.querySelector('#carpet').innerHTML = "";

    const width = Number(document.querySelector('#width').value);
    const height = Number(document.querySelector('#height').value);
    const depth = Number(document.querySelector('#depth').value);
    const paintType = document.querySelector('#quality').selectedOptions[0].text;
    const quality = document.querySelector('#quality').selectedOptions[0].value;

    let carpet = Math.ceil((width * depth) / 9);
    let tackstrip = (width + depth) * 2;

    let walls = ((width * height) * 2) + ((depth * height) * 2);
    walls = Math.ceil(walls / quality);
    let ceiling = Math.ceil((width * depth) / quality);
    let primer = ceiling + walls;

    addLI("#paint", `${primer} gallons of primer paint for the walls and ceiling`);
    addLI("#paint", `${walls} gallons of semi gloss paint for the walls (easy to clean)`)
    addLI("#paint", `${ceiling} gallons of flat paint for the ceiling`)

    addLI("#carpet", `${carpet} yards of carpet`)
    addLI("#carpet", `${carpet} yards of padding`)
    addLI("#carpet", `${tackstrip} feet of tackstrip for the carpet`)

}) // end of calculate function
