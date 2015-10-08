function findLongestWord() {

  //get user input
  var userInput = prompt("Enter a Sentance");
  //split str into array
  array = userInput.split(' ');
  //create empty array
  var lengths = [];
  //iterate through the array pushing the numeric length to the lengths variable
  for(var i = 0; i < array.length; i++) {
    lengths.push(array[i].length);
  }
  //sort the lengths variable descending order
  lengths.sort(function(a, b) {return b - a});
  //return position 0 which will be the largest
  alert(lengths[0] + " Characters long.");
}

var btn = document.getElementById('btn');
btn.addEventListener('click', findLongestWord);

