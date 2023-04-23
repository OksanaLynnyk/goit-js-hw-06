const list = document.querySelectorAll('.item');
console.log(`Number of categories: ${list.length}`);

list.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.firstElementChild.nextElementSibling.children.length}`);
})