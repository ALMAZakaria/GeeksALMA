//   Exercise: Car Inventory Processing

const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

/*   Part I: Find first Honda */
// This function returns details of the first Honda using `find()`
const getCarHonda = carInventory => {
  const hondaCar = carInventory.find(car => car.car_make === "Honda");
  return `This is a ${hondaCar.car_make} ${hondaCar.car_model} from ${hondaCar.car_year}.`;
};

console.log(getCarHonda(inventory)); 
// Expected output: "This is a Honda Accord from 1983."

 

/*   Part II: Sort Inventory by Year */
// This function sorts cars by `car_year` in ascending order using `.sort()`
const sortCarInventoryByYear = carInventory => carInventory.sort((a, b) => a.car_year - b.car_year);

console.log(sortCarInventoryByYear(inventory));
/* Expected output:
[
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 }
]
*/