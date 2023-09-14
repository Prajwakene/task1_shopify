let itemsSelected = [];

// array of objects to store the name and price
let itemList = [
  {
    name: "Cadbury Dairy Milk Chocolate",
    price: 127,
    quantity: 0,
  },
  {
    name: "Cadbury Nutties Sugar Coated",
    price: 127,
    quantity: 0,
  },
  {
    name: "CSNICKERS Peanut Filled Milk",
    price: 2127,
    quantity: 0,
  },
  {
    name: "Ferrero Rocher Premium Chocolates",
    price: 127,
    quantity: 0,
  },
  {
    name: "Cadbury Fuse Peanut & Caramel filled Chocolate",
    price: 1127,
    quantity: 0,
  },
  {
    name: "Fabelle Open Secret - Dark, Centre- Filled Luxury Chocolate",
    price: 127,
    quantity: 0,
  },
  {
    name: "Cadbury 5 Star Chocolate ",
    price: 1127,
    quantity: 0,
  },
  {
    name: "Kisses Hershey's Milk Chocolate",
    price: 127,
    quantity: 0,
  },
  {
    name: "Nestle Munch Chocolate Coated Crunchy Wafer Share Pack",
    price: 127,
    quantity: 0,
  },
  {
    name: "Amul India Twilight Tryst Dark Chocolate",
    price: 1127,
    quantity: 0,
  },
  {
    name: "Cadbury Dairy Milk Shots",
    price: 127,
    quantity: 0,
  },
  {
    name: "Cadbury Bournville Rich Cocoa 70% Dark Chocolate Bar",
    price: 1127,
    quantity: 0,
  },
  {
    name: "Amul Dark Chocolate, 150g",
    price: 2127,
    quantity: 0,
  },
  {
    name: "Amul Chocomini Chocolate, 250 g",
    price: 127,
    quantity: 0,
  },
  {
    name: "Hershey's Exotic Dark Chocolate",
    price: 1127,
    quantity: 0,
  },
  {
    name: "dairy perk chocolate",
    price: 1127,
    quantity: 0,
  },
];

function addItem(event) {
  event.preventDefault();

  // To get the item that was clicked
  const item = event.target;
  // To get the name of the chocolate which is clicked
  const itemName = item.getAttribute("data-name");

  // Find the item in itemList by name
  const selectedItem = itemList.find((item) => item.name === itemName);

  if (selectedItem) {
    // Check if adding the item will exceed the maximum limit of 8 items
    if (getTotalQuantity() < 8) {
      selectedItem.quantity++;
      itemsSelected.push(selectedItem);
    } else {
      console.log("You can't add more than 8 items.");
    }
  }

  // Calculate the total price
  const totalPrice = calculateTotalPrice();
  console.log("Selected Items:", itemsSelected);
  console.log("Total Price:", totalPrice);
}

function getTotalQuantity() {
  return itemsSelected.reduce((total, item) => total + item.quantity, 0);
}

function calculateTotalPrice() {
  return itemsSelected.reduce((totalPrice, item) => {
    return totalPrice + item.price * item.quantity;
  }, 0);
}




let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  //to remove the current open section when we click on another section
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  //to remove the current open section when we click on another section
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  //to remove the current open section when we click on another section

  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};
let addToCart = document.querySelector(".menu");

document.querySelector("#btn").onclick = () => {
  addToCart.classList.add("cart-items-container");
  //to remove the current open section when we click on another section
};

// //javascript
// // JavaScript code to handle chocolate selection and price calculation
// const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// const quantityInputs = document.querySelectorAll('input[type="number"]');
// const totalPrice = document.getElementById('total-price');
// const form = document.getElementById('chocolate-pack-form');

// // Add event listeners to checkboxes and quantity inputs to calculate total price
// // and ensure that the total quantity does not exceed 8

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     // Add logic to add the selected chocolates to the cart here
// });

// // Define a function to calculate the total price based on selected chocolates and quantities

// function updateTotalPrice() {
//     let total = 0;
//     checkboxes.forEach((checkbox, index) => {
//         if (checkbox.checked) {
//             total += calculateChocolatePrice(index) * quantityInputs[index].valueAsNumber;
//         }
//     });
//     totalPrice.textContent = `$${total.toFixed(2)}`;
// }

// function calculateChocolatePrice(index) {
//     // Implement the logic to fetch the price of the selected chocolate based on the index
//     // from your Shopify product data
//     // For simplicity, you can use a hardcoded price for each chocolate or fetch it from Shopify.
//     const prices = [2.127, /* Add prices for other chocolates */];
//     return prices[index] || 0;
// }

// // Add event listeners to checkboxes and quantity inputs to update the total price

// checkboxes.forEach((checkbox, index) => {
//     checkbox.addEventListener('change', updateTotalPrice);
// });

// quantityInputs.forEach((input) => {
//     input.addEventListener('input', updateTotalPrice);
// });
