var topics = ["Dogs", "Cats", "Hamsters", "Parrots", "Ferrets", "Canaries", "Cuckatoos" ];
//loop through

function renderButtons() {

$("#box1").empty();

for (var i=0; i<topics.length; i++) {
//append button after assigning its attributes
var appendButton = $("<button>");

appendButton.addClass("Animals");

appendButton.attr("data-name", topics[i]);

appendButton.text(topics[i]);

$("#box1").append(appendButton);
}
}
renderButtons();

   //queryURL for Giphy API when a rendered button is clicked
   var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=DrxOpMz9DiitBgSKLik5pfJGJU0FqW2T&q=animals&limit=10&offset=0&rating=G&lang=en";

   $(".Animals").on("click", function(event) {
    event.preventDefault();
   
   $.ajax({
     url: queryURL,
     method: "GET"
   })
   
   .then(function(response) {
     console.log(response);
     var imageUrl = response.data.image_original_url;

     // tell jquery to create an image tag
     var animalImage = $("<img>");

     //set the new image src and alt attributes
     animalImage.attr("src", imageUrl);
     animalImage.attr("alt", "data-animals image");

     //'prepend' the image tag to the images div
     $("#box2").prepend(animalImage);
   });
   });
