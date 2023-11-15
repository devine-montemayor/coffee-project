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
    coffeeCard.classList.add('d-flex','col-4');
    coffeeCard.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="" class="card-img-top" alt="coffee pic">
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
