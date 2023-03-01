// Create object based array
var carList = new Array();
carList.push(
    {carId: getId(0), model: 'White Land Rover Ranger Rover', fuelType: "Gasoline", price: 87990, mileage: 23421, exteriorColor: 'White', img: '/images/car1.jpeg', alt: 'A car of a white land Rover Ranger Rover suv on the road'},
    {carId: getId(1), model: 'Blue Mercedes Benz 5', fuelType: "Gasoline", price: 27990, mileage: 12832, exteriorColor: 'Blue', img: '/images/car2.webp', alt: 'A car of a blue Mercedes Benz front-side view looking right'},
    {carId: getId(2), model: 'Grey Ford Focus Hatchback', fuelType: "Gasoline", price: 15895, mileage: 12421, exteriorColor: 'Grey', img: '/images/car3.jpeg', alt: 'A car of a grey Ford front-side view looking left'},
    {carId: getId(3), model: 'Blue Audi RS 6', fuelType: "Gasoline", price: 123590, mileage: 3832, exteriorColor: 'Blue', img: '/images/car4.jpeg', alt: 'A car of a blue Audi on its back-side'},
    {carId: getId(4), model: 'KIA', fuelType: "Electric", price: 17020, mileage: 23421, exteriorColor: 'White', img: '/images/car5.jpeg', alt: 'A car of a white KIA that has all of the doors open with the back as well'},
    {carId: getId(5), model: 'White Ford Thunderbird', fuelType: "Gasoline", price: 23995, mileage: 12232, exteriorColor: 'White', img: '/images/car6.jpeg', alt: 'A car of a white Ford Thunderbird that is parked outside a building facing right'},
    {carId: getId(6), model: 'Ford', fuelType: "Electric", price: 24912, mileage: 23232, exteriorColor: 'Black', img: '/images/car7.webp', alt: 'A car of a black Ford looking front-side looking right'},
);

function getId(index) {
    // Iterate through the array and check if carId already has an id, if so get the id, if not, generate one and store it in localStorage
    var sampleArray = new Array(carList.length)

    // Get the items from the localStorage to the sampleArray
    var localIds = JSON.parse(localStorage.getItem('ids'))
    var id;

    if(localIds[index] == null) {
        sampleArray[index] = generateId()
        id = sampleArray[index]
    } else {
        id = localIds[index]
    }
    
    localStorage.setItem('ids', JSON.stringify(sampleArray))   

    return id
}

function generateId() {
    let randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26))
    let randomId = Date.now()

    return randomLetter + randomId
}
