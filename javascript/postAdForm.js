/* 
	The below code only pretains to the <form> on the Post Ad page
	of the website.
*/

function readURL(input) {

    if (input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            document.getElementById("imgPreview").src = e.target.result;
            document.getElementById("imgPreview").style = "display: block";
        }

        reader.readAsDataURL(input.files[0]);
    }
}

document.getElementById("photos").onchange = function(){
    readURL(this);
};