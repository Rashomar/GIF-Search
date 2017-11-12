var search = document.getElementById('search');
var remove = document.getElementById('remove');
var input = document.getElementById('val');
var containerImage = document.getElementById('container-image');
var rand;
search.addEventListener('click', function(){
	        var div = document.createElement('div');
				var img = document.createElement('img');
	fetch('https://api.giphy.com/v1/gifs/search?q='+input.value+'&limit=10&rating=g&api_key=dc6zaTOxFJmzC').then(function(response){ //fetch API
	    return response.json().then(function(data){
				console.log(data.data.length);
				rand = Math.floor(Math.random()* data.data.length);
				div.className = "col-6 col-sm-3 gif";
				containerImage.appendChild(div);
				img.src = data.data[rand].images.fixed_height.url;
				div.appendChild(img);
	    });
	}); //end fetch API
}); //end addEventListener

remove.addEventListener('click', function(){
	input.value = "";
	var divsWithImages = [].slice.call(document.getElementsByClassName('gif'), 0);
	  divsWithImages.forEach(function(img) { 
	    img.parentNode.removeChild(img); 
	  });			
});