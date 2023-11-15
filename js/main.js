const coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

const renderCoffee = (coffees) => {
    const coffeeCard = document.createElement('div');
    coffeeCard.classList.add('col-auto', 'flex-wrap', 'justify-content-center', 'align-items-center', 'd-flex');
    let coffeeImage;
    switch (coffees.roast.toLowerCase()) {
        case "light":
            coffeeImage = "img/darkRoast10.jpeg";
            break;
        case "medium":
            coffeeImage = "img/darkRoast3.jpeg";
            break;
        case "dark":
            coffeeImage = "img/darkRoast4.jpeg";
            break;
        default:
            coffeeImage = "https://via.placeholder.com/84x70?";
    }
    coffeeCard.innerHTML = `
        <div class="card custom border border-black rounded" style="width: 18rem;">
        <img src="${coffeeImage}" class="card-img-top" alt="coffee pic">
        <div class="card-body coffee">
            <p>${coffees.name}</p>
            <p>${coffees.roast}</p>
        </div>
    </div>
    `;
    return coffeeCard;
}
function updateCoffees(coffees) {
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
    const menu = document.querySelector('.start-cards');
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
})();
