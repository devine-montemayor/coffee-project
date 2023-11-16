const coffees = [
    {id: 1, name: 'Light City', roast: 'Light'},
    {id: 2, name: 'Half City', roast: 'Light'},
    {id: 3, name: 'Cinnamon', roast: 'Light'},
    {id: 4, name: 'City', roast: 'Medium'},
    {id: 5, name: 'American', roast: 'Medium'},
    {id: 6, name: 'Breakfast', roast: 'Medium'},
    {id: 7, name: 'High', roast: 'Dark'},
    {id: 8, name: 'Continental', roast: 'Dark'},
    {id: 9, name: 'New Orleans', roast: 'Dark'},
    {id: 10, name: 'European', roast: 'Dark'},
    {id: 11, name: 'Espresso', roast: 'Dark'},
    {id: 12, name: 'Viennese', roast: 'Dark'},
    {id: 13, name: 'Italian', roast: 'Dark'},
    {id: 14, name: 'French', roast: 'Dark'},
];
const renderCoffee = (coffees) => {
    const coffeeCard = document.createElement('div');
    coffeeCard.classList.add('col', 'flex-wrap', 'justify-content-center', 'align-items-center', 'd-flex');
    let coffeeImage;
    switch (coffees.name.toLowerCase()) {
        case "light city":
            coffeeImage = "img/darkRoast1.webp";
            break;
        case "half city":
            coffeeImage = "img/darkRoast2.jpeg";
            break;
        case "cinnamon":
            coffeeImage = "img/darkRoast3.jpeg";
            break;
        case "city":
            coffeeImage = "img/darkRoast4.jpeg";
            break;
        case "american":
            coffeeImage = "img/darkRoast5.jpeg";
            break;
        case "breakfast":
            coffeeImage = "img/darkRoast6.jpeg";
            break;
        case "high":
            coffeeImage = "img/darkRoast7.jpeg";
            break;
        case "continental":
            coffeeImage = "img/darkRoast8.jpeg";
            break;
        case "new orleans":
            coffeeImage = "img/darkRoast9.jpeg";
            break;
        case "european":
            coffeeImage = "img/darkRoast10.jpeg";
            break;
        case "espresso":
            coffeeImage = "img/darkRoast11.jpeg";
            break;
        case "viennese":
            coffeeImage = "img/darkRoast12.jpeg";
            break;
        case "italian":
            coffeeImage = "img/darkRoast13.jpeg";
            break;
        case "french":
            coffeeImage = "img/darkRoast14.jpeg";
            break;
        default:
            coffeeImage = "img/coffee-med.jpg";
    }
    coffeeCard.innerHTML = `
        <div class="card custom border border-black rounded m-2" style="width: 18rem;">
        <img src="${coffeeImage}" class="card-img-top" alt="coffee pic">
        <div class="d-flex flex-column coffee">
            <p style="margin: 10px 10px 2px 10px">${coffees.name}</p>
            <p>${coffees.roast}</p>
        </div>
    </div>
    `;
    return coffeeCard;
}
const updateCoffees = (coffees) => {
    const coffeeContainer = document.querySelector('.start-cards');
    coffeeContainer.innerHTML = '';
    const roastValue = document.querySelector('#roast-selection').value;
    let filteredCoffees = coffees;
    filteredCoffees = filteredCoffees.filter((coffee)=>{
        if(!roastValue){
            return true;
        }
        return coffee.roast.toLowerCase() === roastValue.toLowerCase();
    });

    const searchValue = document.querySelector('#search').value;
    filteredCoffees = filteredCoffees.filter((coffee) => {
        if(!searchValue){
            return true;
        }
        return coffee.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    const coffeeFragment = document.createDocumentFragment();
    for (let coffee of filteredCoffees) {
        coffeeFragment.appendChild(renderCoffee(coffee));
    }
    coffeeContainer.appendChild(coffeeFragment);
}

// MAIN
(() => {

    updateCoffees(coffees);
    const roastSelection = document.querySelector('#roast-selection');
    const searchSection = document.querySelector('#search');
    roastSelection.addEventListener('change', e=>{
        e.preventDefault();
        updateCoffees(coffees);
    });
    searchSection.addEventListener('input', e=>{
        e.preventDefault();
        updateCoffees(coffees);
    });
    const addBtn = document.querySelector('#addBox');
    addBtn.addEventListener('click', e=>{
        const roastValue = document.querySelector('#roastSelect').value;
        const coffeeName = document.querySelector('#inputForm').value;
        const newCoffee = {
            id: coffees.length + 1,
            name: coffeeName.charAt(0).toUpperCase() + coffeeName.slice(1),
            roast: roastValue.charAt(0).toUpperCase() + roastValue.slice(1)
        };
        coffees.push(newCoffee);
        updateCoffees(coffees);
    });
})();
