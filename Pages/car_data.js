// Create array
var carList = new Array();
carList.push(
    {carId: generateId(), model: 'White Land Rover Ranger Rover', fuelType: "Gasoline", price: 87990, mileage: 23421, exteriorColor: 'White', img: '/images/car1.jpeg', alt: 'A car of a white land Rover Ranger Rover suv on the road'},
    {carId: generateId(), model: 'Blue Mercedes Benz 5', fuelType: "Gasoline", price: 27990, mileage: 12832, exteriorColor: 'Blue', img: '/images/car2.webp', alt: 'A car of a blue Mercedes Benz front-side view looking right'},
    {carId: generateId(), model: 'Grey Ford Focus Hatchback', fuelType: "Gasoline", price: 15895, mileage: 12421, exteriorColor: 'Grey', img: '/images/car3.jpeg', alt: 'A car of a grey Ford front-side view looking left'},
    {carId: generateId(), model: 'Blue Audi RS 6', fuelType: "Gasoline", price: 123590, mileage: 3832, exteriorColor: 'Blue', img: '/images/car4.jpeg', alt: 'A car of a blue Audi on its back-side'},
    {carId: generateId(), model: 'Ford', fuelType: "Electric", price: 17020, mileage: 23421, exteriorColor: 'White', img: '/images/car5.jpeg', alt: 'A car of a black Ford looking front-side looking right'},
    {carId: generateId(), model: 'White Ford Thunderbird', fuelType: "Gasoline", price: 23995, mileage: 12232, exteriorColor: 'White', img: '/images/car6.jpeg', alt: 'A car of a white Ford Thunderbird that is parked outside a building facing right'},
    {carId: generateId(), model: 'KIA', fuelType: "Electric", price: 24912, mileage: 23232, exteriorColor: 'Black', img: '/images/car7.webp', alt: 'A car of a white KIA that has all of the doors open with the back as well'},
);

function generateId() {
    let randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26))
    let randomId = Date.now()

    return randomLetter + randomId
}
