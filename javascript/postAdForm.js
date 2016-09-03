/* 
	The below code only pretains to the <form> on the Post Ad page
	of the website.
*/

/* 
	Inserts image elements for each given file up to the given max at the end of the 
	given parent node and applies an ID and class to the image element.
*/
function previewImages(input, imgId, parentId, cssClass, maxImages) {
    // Ensure at least one image is selected and there's no more than maxImagess
    if (input.files[0] && (input.files.length <= maxImages)) {
        // counter to keep track of the element ID to be modified
        var i = 0; 
        // Queue containing all the images
        var images = [];
        // put each image into the queue
        for (var j = 0; j <= input.files.length - 1; j++) {
            images.push(input.files[j]);
        }

        var reader = new FileReader();

        // Create handle to parent element
        var parent = document.getElementById(parentId);

        // Function that will set the image(s) recursively
        function setImage() {
            var imgElementId = imgId + i;
            
            reader.onload = function (e) {
                //console.log(imgElementId); // For debugging

                // Create image element and set attributes
                var imgElement = document.createElement("img");
                imgElement.src = e.target.result;
                imgElement.className = cssClass;
                imgElement.id = imgElementId; 
                // Append image element to the parent element
                parent.appendChild(imgElement);

                // increment counter to get right element ID
                i++;

                // check if any images are still in the queue
                if (images.length > 0) {
                    // Images still left, set the next one
                    setImage();
                } else{
                    // no images left, exits function
                }
            };
            // Will get the image data and remove it from the queue
            var imageData = images.shift();
            reader.readAsDataURL(imageData);
        }

        // begin setting images
        setImage(); 

    } else {
        // Error handling. Most likely case is more than maxImages selected
        if (input.files.length > maxImages) {
            alert("You can only upload " + maxImages + " photos");
        } else {
            // Unable to preview image(s) for other reason, fail silently
        }
    }
}

// Removes all elements with the matching ID + i number, starting at 0
function removeElements (elementId) {
    var i = 0; // counter to keep track of loop
    // Get the first element
    var imgElement = document.getElementById(elementId + i);

    // loop until all elements are removed
    while (imgElement) {
        imgElement.remove();
        // Get next element. Loop will end if no next element exists
        i++;
        imgElement = document.getElementById(elementId + i);
    }
}

// Set listener on the upload button
document.getElementById("photos").onchange = function(){
    // reset HTML in case user has re-selected photos
    removeElements("imgPreview");
    previewImages(this, "imgPreview", "photoSection", "imagePreview", 4);
};

/*
*   Form Listeners
*/

// Set form validation listeners
document.querySelector("#firstname").addEventListener("input", function(e) {
    fieldListener(e.target, TYPE_FNAME, "errorClass", "successClass");
}, false);