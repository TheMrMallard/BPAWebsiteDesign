// Create object based array
var carList = new Array();
carList.push(
    {carId: getId(0), model: '2016 White Land Rover Ranger Rover', fuelType: "Gasoline", price: 87990, mileage: 23421, exteriorColor: 'White', img: '/images/car1.jpeg', alt: 'A car of a white land Rover Ranger Rover suv on the road', link: 'https://www.edmunds.com/land-rover/range-rover/2016/vin/SALGS2EFXGA311272/?radius=500'},
    {carId: getId(1), model: '2018 Blue Mercedes Benz 5', fuelType: "Gasoline", price: 27990, mileage: 12832, exteriorColor: 'Blue', img: '/images/car2.webp', alt: 'A car of a blue Mercedes Benz front-side view looking right', link: 'https://www.kbb.com/mercedes-benz/b-class/'},
    {carId: getId(2), model: '2018 Grey Ford Focus Hatchback', fuelType: "Gasoline", price: 15895, mileage: 12421, exteriorColor: 'Grey', img: '/images/car3.jpeg', alt: 'A car of a grey Ford front-side view looking left', link: 'https://www.edmunds.com/ford/focus/2018/vin/1FADP3K21JL281955/car-buying-online/?national=true'},
    {carId: getId(3), model: '2017 Blue Audi RS 6', fuelType: "Gasoline", price: 123590, mileage: 3832, exteriorColor: 'Blue', img: '/images/car4.jpeg', alt: 'A car of a blue Audi on its back-side', link: 'https://www.topgear.com/car-news/classic/heres-why-well-miss-audi-rs6-avant'},
    {carId: getId(4), model: '2020 KIA Picanto', fuelType: "Electric", price: 17020, mileage: 23421, exteriorColor: 'White', img: '/images/car5.jpeg', alt: 'A car of a white KIA that has all of the doors open with the back as well', link: 'https://www.carsdirect.com/2023/ford/ecosport'},
    {carId: getId(5), model: 'White Ford Thunderbird (fourth generation)', fuelType: "Gasoline", price: 23995, mileage: 12232, exteriorColor: 'White', img: '/images/car6.jpeg', alt: 'A car of a white Ford Thunderbird that is parked outside a building facing right', link: 'https://en.wikipedia.org/wiki/Ford_Thunderbird_%28fourth_generation%29'},
    {carId: getId(6), model: '2023 Ford Ecosport', fuelType: "Electric", price: 24912, mileage: 23232, exteriorColor: 'Black', img: '/images/car7.webp', alt: 'A car of a black Ford looking front-side looking right', link: 'https://www.edmunds.com/land-rover/range-rover/2016/vin/SALGS2EFXGA311272/?radius=500'},
);

function getId(index) {
    // Get the items from the localStorage to the sampleArray
    var localIds = JSON.parse(localStorage.getItem('ids'))

    // Check if localIds does not exist
    if(!localIds) {
        localIds = new Array(carList.length)
        for(i = 0; i < localIds.length; i++) {
            localIds[i] = generateId();
        }

        localStorage.setItem('ids', JSON.stringify(localIds))   
    } 

    // If current local id is null, set current index to a randomly generated id, and then
    if(localIds[index] == null) {
        localIds[index] = generateId()
        localStorage.setItem('ids', JSON.stringify(localIds))   
    }

    return localIds[index]
}

function generateId() {
    let randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26))
    let randomId = Date.now()

    return randomLetter + randomId
}
