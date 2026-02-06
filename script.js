function calculateMinCost() {
  //your code here
  const input = document.querySelector("input[type='text']").value;

  // Convert input to array of numbers
  let ropes = input
    .split(",")
    .map(num => parseInt(num.trim()))
    .filter(num => !isNaN(num));

  if (ropes.length <= 1) {
    document.getElementById("result").innerText = 0;
    return;
  }

  // Min-heap simulation using sorting
  let totalCost = 0;

  while (ropes.length > 1) {
    // Always sort to get two smallest ropes
    ropes.sort((a, b) => a - b);

    const first = ropes.shift();
    const second = ropes.shift();

    const cost = first + second;
    totalCost += cost;

    // Push the combined rope back
    ropes.push(cost);
  }

  document.getElementById("result").innerText = totalCost;
  
  
}  
