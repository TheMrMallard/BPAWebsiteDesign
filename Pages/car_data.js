// Create array
var list = new Array();
list.push(
    {carId: 1, model: 'Ford TUWORN', fuelType: "Gasoline", price: 1000, mileage: 12421, interiorColor: 'Black', exteriorColor: 'White'},
    {carId: 2, model: 'Chevron', fuelType: "Gasoline", price: 5200, mileage: 5832},
    {carId: 3, model: 'Ford', fuelType: "Gasoline", price: 1000, mileage: 12421},
    {carId: 4, model: 'Chevron', fuelType: "Electric", price: 5200, mileage: 5832},
    {carId: 5, model: 'Nissan', fuelType: "Electric", price: 1000, mileage: 12421},
    {carId: 6, model: 'Chevron', fuelType: "Gasoline", price: 5200, mileage: 5832},
    {carId: 7, model: 'Tesla', fuelType: "Electric", price: 52000, mileage: 5832},
);

// ---------------- Database ----------------

exports.carList = list;