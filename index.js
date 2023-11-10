const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = 0;
function batteries( acc,init)
{ 
    
   acc+=init;
   totalBatteries= acc;
   return  totalBatteries;
}
console.log(batteryBatches.reduce(batteries,0))
// Code your solution here
