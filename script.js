function calculateMinCost() {
  //your code here
 var input = document.querySelector('input[type="text"]').value;

  // Convert input string to array of numbers
  var ropes = input.split(',');
  var arr = [];

  for (var i = 0; i < ropes.length; i++) {
    var num = parseInt(ropes[i].trim());
    if (!isNaN(num)) {
      arr.push(num);
    }
  }

  if (arr.length <= 1) {
    document.getElementById('result').innerHTML = '0';
    return;
  }

  var totalCost = 0;

  while (arr.length > 1) {
    // Sort to get two smallest elements
    arr.sort(function (a, b) {
      return a - b;
    });

    var first = arr.shift();
    var second = arr.shift();

    var cost = first + second;
    totalCost += cost;

    arr.push(cost);
  }

  document.getElementById('result').innerHTML = totalCost;
  
}  
