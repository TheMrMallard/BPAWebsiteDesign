// Create array
var carList = new Array();
carList.push(
    {carId: generateId(), model: 'Ford TUWORN', fuelType: "Gasoline", price: 9000, mileage: 12421, exteriorColor: 'Black'},
    {carId: generateId(), model: 'Chevron', fuelType: "Gasoline", price: 5200, mileage: 5832, exteriorColor: 'Grey'},
    {carId: generateId(), model: 'Ford', fuelType: "Gasoline", price: 2000, mileage: 12421, exteriorColor: 'Black'},
    {carId: generateId(), model: 'Chevron', fuelType: "Electric", price: 7000, mileage: 5832, exteriorColor: 'Grey'},
    {carId: generateId(), model: 'Nissan', fuelType: "Electric", price: 1000, mileage: 12421, exteriorColor: 'Black'},
    {carId: generateId(), model: 'Chevron', fuelType: "Gasoline", price: 4000, mileage: 5832, exteriorColor: 'Grey'},
    {carId: generateId(), model: 'Tesla', fuelType: "Electric", price: 52000, mileage: 5832, exteriorColor: 'Black'},
);

function generateId() {
    let randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26))
    let randomId = Date.now()

    return randomLetter + randomId
}
