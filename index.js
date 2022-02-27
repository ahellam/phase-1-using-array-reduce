const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution hered
const initAmnt = 0;
const totalBatteries = batteryBatches.reduce((startVal, currentVal) => startVal + currentVal, initAmnt)