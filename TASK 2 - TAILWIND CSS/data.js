const productsGrid = document.getElementById('products-grid');
const data = [{
    noOfStudentsEnrolled: 1957,
    durationOfCourse: "1h 57mins",
    title: "Motion Graphics: Create a Nice Typography Animation",
    price: 499,
    isActive: false,
    image: "./assets/3d-map-pins-gps-navigator-pin-checking-poins-3d-render-illustration 1.png",
    },
    {
        noOfStudentsEnrolled: 1957,
        durationOfCourse: "2h 57mins",
        title: "Education Software and PHP and JS System Script",
        price: 599,
        isActive: false,
        image: "./assets/3d-jigsaw-puzzle-pieces-pink-background-problem-solving-business-concept-3d-render-illustration 1 (1).png"
    },
    {
        noOfStudentsEnrolled: 1957,
        durationOfCourse: "2h 57mins",
        title: "Education Software and PHP and JS System Script",
        price: 599,
        isActive: false,
        image: "./assets/rocket-launch-laptop-flying-rocket-icon-business-startup-project-concept 1.png"
    },
    {
        noOfStudentsEnrolled: 1957,
        durationOfCourse: "2h 57mins",
        title: "Education Software and PHP and JS System Script",
        price: 599,
        isActive: false,
        image: "./assets/red-up-arrow-coin-stacks-pink-background-financial-success-growth-concept-3d-render-illustration 1.png"
    },
    {
        noOfStudentsEnrolled: 1957,
        durationOfCourse: "2h 57mins",
        title: "Education Software and PHP and JS System Script",
        price: 599,
        isActive: false,
        image: "./assets/travel-concept-3d-illustration-airplane-flying-map-pin 1 (1).png"
    },
    {
        noOfStudentsEnrolled: 1957,
        durationOfCourse: "2h 57mins",
        title: "Education Software and PHP and JS System Script",
        price: 599,
        isActive: false,
        image: "./assets/online-banking-icon-money-saving-bank-bundles-money-coins-floating-around-purple-background 1.png"
    },
    
];

for (let x = 0; x < data.length; x++) {
            renderProducts(data[x]);
}

function renderProducts(data = {}) {
    const div = document.createElement("div");
        div.setAttribute("class", "products-card");
            div.innerHTML = `<img class="w-full" src="${data.image}" />
                        <div class="content">
                            <div class="flex justify-between text-gray-600 text-xs mb-6">
                                <p>${data.noOfStudentsEnrolled} Students</p>
                                <p>${data.durationOfCourse}</p>
                            </div>
                            <h2 class="text-sm mb-2 font-semibold text-gray-700">
                                ${data.title}
                            </h2>
                            <div class="flex justify-between text-sm text-gray-700 font-semibold items-center">
                                <p>Rs.${data.price}</p>
                                <button class="flex items-center text-sm gap-x-2 btn">
                                    <img src="./assets/cart.svg" />
                                    <span>Add To Cart</span>
                                </button>
                            </div>
                        </div>`;
            productsGrid.appendChild(div);
}
