const dish_list = [];

// btns
const btnAll = document.getElementById("btnAll");
const btnBreakfast = document.getElementById("btnBreakfast");
const btnLunch = document.getElementById("btnLunch");
const btnShakes = document.getElementById("btnShakes");

// grid

const dishGrid = document.querySelector(".dishGrid");

btnAll.addEventListener("click", filterGrid);
btnBreakfast.addEventListener("click", filterGrid);
btnLunch.addEventListener("click", filterGrid);
btnShakes.addEventListener("click", filterGrid);

loadDishes();
//loadAll();

console.log(dish_list);

function loadDishes() {
    let dish1 = {
        id: 1,
        cat: 'breakfast',
        title: 'Buttermilk Pancakes',
        pict: 'item-1.jpeg',
        price: 15,
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    };
    let dish2 = {
        id: 2,
        cat: 'lunch',
        title: 'Diner Double',
        pict: 'item-2.jpeg',
        price: 15,
        desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
    };
    let dish3 = {
        id: 3,
        cat: 'shakes',
        title: 'Godzilla Milkshake',
        pict: 'item-3.jpeg',
        price: 15,
        desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    };
    let dish4 = {
        id: 4,
        cat: 'breakfast',
        title: 'Country Delight',
        pict: 'item-4.jpeg',
        price: 15,
        desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,"
    };
    let dish5 = {
        id: 5,
        cat: 'lunch',
        title: 'Egg Attack',
        pict: 'item-5.jpeg',
        price: 15,
        desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"
    };
    let dish6 = {
        id: 6,
        cat: 'shakes',
        title: 'Oreo Dream',
        pict: 'item-6.jpeg',
        price: 15,
        desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
    };
    let dish7 = {
        id: 7,
        cat: 'breakfast',
        title: 'Bacon Overflow',
        pict: 'item-7.jpeg',
        price: 15,
        desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"
    };
    let dish8 = {
        id: 8,
        cat: 'lunch',
        title: 'American Classic',
        pict: 'item-8.jpeg',
        price: 15,
        desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
    };
    let dish9 = {
        id: 9,
        cat: 'shakes',
        title: 'Quarantine Buddy',
        pict: 'item-9.jpeg',
        price: 15,
        desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
    };

    dish_list.push(dish1, dish2, dish3, dish4, dish5, dish6, dish7, dish8, dish9);
}

window.addEventListener("DOMContentLoaded", displayDishs(dish_list));

function displayDishs(items) {
    let displayMenu = items.map(function (item) {
        return `<div class="gridElem">
        <div class="pictDiv" id="pict${item.id}">
        </div>
        <div class="gridElemTxt">
            <div class="dish_head">
                <span class="dish_name">${item.title}</span>
                <span class=dish_price>$${item.price}</span>
            </div>
            <div><hr class= "dish_horizontal"></div>
            <div class="dish_txt">${item.desc}</div>
        </div>
    </div>`;
     })
     displayMenu = displayMenu.join("");
     dishGrid.innerHTML = displayMenu;
}

function filterGrid(event) {
    
    const filterFlag = event.target.innerHTML.toLowerCase();

    let filteredMenu = dish_list.filter(dish => dish.cat == filterFlag);

    if (filterFlag == "all") {
        filteredMenu = dish_list;
    }

    displayDishs(filteredMenu);
    
};

function addDish(id) {
    console.log(id);
};