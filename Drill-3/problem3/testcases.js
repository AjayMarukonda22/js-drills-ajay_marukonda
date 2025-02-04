import { inventory } from "../cars.js";
import { sortCarModelNamesAplhabetically } from "./solution.js";

//Test-cases

//1.Valid(Happy-path)
console.log(sortCarModelNamesAplhabetically(inventory));
/* Expetced Output: 
  '300M',           '4000CS Quattro',       '525',
  '6 Series',       'Accord',               'Aerio',
  'Bravada',        'Camry',                'Cavalier',
  'Ciera',          'Defender Ice Edition', 'E-Class',
  'Econoline E250', 'Escalade',             'Escort',
  'Esprit',         'Evora',                'Express 1500',
  'Familia',        'Fortwo',               'G35',
  'Galant',         'GTO',                  'Intrepid',
  'Jetta',          'LSS',                  'Magnum',
  'Miata MX-5',     'Montero Sport',        'MR2',
  'Mustang',        'Navigator',            'Prizm',
  'Q',              'Q7',                   'R-Class',
  'Ram Van 1500',   'Ram Van 3500',         'riolet',
  'Sebring',        'Skylark',              'Talon',
  'Topaz',          'Town Car',             'TT',
  'Windstar',       'Wrangler',             'XC70',
  'Yukon'
] */

//2. Empty Array
console.log(sortCarModelNamesAplhabetically([]))
//Expected Output: invalid input

//3.car model names is case-insensitive
console.log(sortCarModelNamesAplhabetically([ 
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "aviator", car_year: 2001 },
    {id: 3,car_make: "Land Rover",car_model: "Avenger",car_year: 2010}]));
//Expected Output: [ 'Avenger', 'aviator', 'Navigator' ]

//4.Null, undefined arguments or invalid Arguments
console.log(sortCarModelNamesAplhabetically({}));
console.log(sortCarModelNamesAplhabetically());
console.log(sortCarModelNamesAplhabetically("string"));
// Expected output: invalid input;