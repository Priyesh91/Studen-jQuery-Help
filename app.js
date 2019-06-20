console.log("linked")

var crystalObject = [
  { name: "red", number: 5 },
  { name: "blue", number: 10 },
  { name: "purple", number: 15 },
  { name: "black", number: 20 }
]

//Goal loop through crystalObject and create div to be added to html div, add class that = name, and add data attribute that is the number assigned to it.

  for (let i = 0; i < crystalObject.length; i++) {
    $(".crystal-div").append('<div class="' + crystalObject[i].name + '" data-value="' + crystalObject[i].number + '"></div>')
  };




//function to alert data value when div is clicked
$(".red, .blue, .purple, .black").on("click", function () {
  var value = $(this).attr("data-value")
  alert("The value of this div is " + value);
})
