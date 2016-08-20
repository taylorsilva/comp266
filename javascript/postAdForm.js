/* 
	The below code only pretains to the <form> on the Post Ad page
	of the website.
*/

function previewImages(input) {
	// Ensure at least one image is selected and there's no more than 4
    if (input.files[0] && (input.files.length <= 4)) {
    	// counter to keep track of the element ID to be modified
    	var i = 0; 
    	// Queue containing all the images
    	var images = new Array();
    	// put each image into the queue
    	for (var j = 0; j <= input.files.length - 1; j++) {
    		images.push(input.files[j]);
    	};

    	var reader = new FileReader();

    	// Function that will set the image(s) recursively
    	function setImage() {
    		var imgElementId = "imgPreview" + i;
    		
    		reader.onload = function (e) {
        		console.log(imgElementId);
        		var imgElement = document.getElementById(imgElementId);
	            imgElement.src = e.target.result;
	            imgElement.style.display = "inline-block";

	            // increment counter to get right element ID
	            i++;

	            // check if any images are still in the queue
	            if (images.length > 0) {
	            	// Images still left, set the next one
	            	setImage();
	            } else{
	            	// no images left, exits function
	            };
        	};
        	// Will set the url and remove it from the queue
        	var imageData = images.shift();
        	reader.readAsDataURL(imageData);
    	};  

    	// begin setting images
    	setImage();	

    } else {
    	// Error handling. Most likely case is more than 4 images selected
    	if (input.files.length > 4) {
    		alert("You can only upload 4 photos");
    	} else {
    		// Unable to preview image(s) for other reason, fail silently
    	};
    };
};

function resetImageHtml () {
	var imgElementId;

	for (var i = 0; i <= 3; i++) {
		imgElementId = "imgPreview" + i;
		var imgElement = document.getElementById(imgElementId);
		imgElement.src = "";
		imgElement.style = "";
	};
};

document.getElementById("photos").onchange = function(){
	// reset HTML in case user has re-selected photos
	resetImageHtml();
    previewImages(this);
};