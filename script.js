$(document).ready(function() {
  // Listen for change event on the input element with id "fishName"
  $("#fishSubmit").click(function() {
    // Retrieve the entered fish name
    var fishName = $("#fishName").val();
    // Call the convertFish function with the entered fish name as an argument
    convertFish(fishName);
    //timer();
  });
});

function convertFish(name) {
  var fishlist = [];
  $.ajax({
    url: "https://www.fishbase.us/country/CountryChecklist.php?&what=list&trpp=50&c_code=840B&csub_code=&cpresence=present&sortby=alpha2&vhabitat=reef&showAll=yes",
    method: "GET",
    dataType: 'html',
    success: function(data) {
      var links = $(data).find('a[href^="CountrySpeciesSummary.php?c_code="]');
      links.each(function() {
        var family = $(this).text().trim();
        var occur = $(this).closest('td').next('td');
        var occurContent = occur.text().trim();
        var name = occur.next('td');
        var nameContent = name.text().trim();
        var Local_name = name.next('td');
        var Local_nameContent = Local_name.text().trim();

        var obj = {
          species: family,
          occur: occurContent,
          name: nameContent,
          Local_name: Local_nameContent,
        };
        fishlist.push(obj);
      });
      find(name, fishlist); // Pass the entered fish name and the retrieved fish list to the find function
    },
    error: function(status, error) {
      console.error(status + ": " + error); // Log any errors to the console
    }
  });
}

function timer(){
  $('#timer').html("<span id='time'>18</span>Seconds"); 
  var counter = 18;
  var interval = setInterval(function() {
      counter--;
      // Display 'counter' wherever you want to display it.
      if (counter <= 0) {
          clearInterval(interval);
          $('#timer').html("<h3>Count down complete</h3>");  
          return;
      }else{
        $('#time').text(counter);
        console.log("Timer --> " + counter);
      }
  }, 1000);
}



function find(name, fishlist) {
  var fish = fishlist.find(function(fish) {
    return fish.name === name;
  });

  if (fish) {
    console.log("Found:", fish);
    $("#result1").text("Species: " + fish.species); // Display the found fish name in the HTML
    $("#result3").text("Local_name: " + fish.Local_name); 
    if (fish.occur === "native"){
      $("#result2").text("Occurance: " + fish.occur).css("color", "green");
    }
    else if(fish.occur === "endemic"){
      $("#result2").text("Occurance: " + fish.occur).css("color", "green");
    }
    else{
      $("#result2").text("Occurance: " + fish.occur).css("color", "red");
    }
  } else {
    console.log("Fish not found");
    $("#result").text("Fish not found"); // Display a message in the HTML indicating that the fish was not found
  }
}


