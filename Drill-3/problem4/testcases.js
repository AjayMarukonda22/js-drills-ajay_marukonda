import { inventory } from "../cars.js";
import { getTheCarYear } from "./solution.js";

//Test-cases

//1. Valid(Happy-path)
console.log(getTheCarYear(inventory));
/* Expected Output: [
  2009, 2001, 2010, 1983, 1990, 1995,
  2009, 1987, 1996, 2000, 2004, 2004,
  1997, 1999, 2000, 2001, 1987, 1995,
  1994, 1985, 2003, 1997, 1992, 2003,
  2005, 2005, 2000, 2005, 1993, 2010,
  1964, 1999, 2011, 1991, 2000, 2003,
  1997, 1992, 1998, 2012, 1965, 1996,
  2009, 2012, 2008, 1995, 2007, 2008,
  1996, 1999
] */

//2. //2. Empty Array
console.log(getTheCarYear([]))
//Expected Output: invalid input

//3.car year is missing in some cars
console.log(getTheCarYear([ 
    { id: 1, car_make: "Lincoln", car_model: "Navigator"},
    { id: 2, car_make: "Mazda", car_model: "aviator" },
    {id: 3,car_make: "Land Rover",car_model: "Avenger",car_year: 2010}]));
//Expected Output: [ 2010 ]

//4.Null, undefined arguments or invalid Arguments
console.log(getTheCarYear({}));
console.log(getTheCarYear());
console.log(getTheCarYear("string"));
// Expected output: invalid input;