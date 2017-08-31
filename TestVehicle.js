const Vehicle = require('./Vehicle.js');

function main(){
    //make two vehicles and take them for a spin.
let V1 = new Vehicle(4,1,1,1,1);
V1.fill(5);
V1.drive(5);
console.log(V1.totalMiles());
let V2 = new Vehicle();






}
//run the main method
main();
