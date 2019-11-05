/* 
Javascript page loader by Hoormazd Pirayeshfar

Blocks the page view by a division until the images are fully loaded.

to activate put the following tags in your html file

<link rel="stylesheet" href="../stylesheets/main.css">
<script src="../scripts/pageloader.js"></script>

<div id="loadingDiv">
        <div id="loadingBox">
            <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <br>
            <h3> Please wait while we load the page!</h3>
        </div>
</div>


known issues:
if you add it to a page with no images, it will block the view forever.
simple to fix, but why even bother. just dont use this script in pages with no images. tnx

-H.P*/

window.onload = function() 
{

    var images = document.getElementsByTagName('img'),
        totalImages = images.length,
        imagesLoaded = 0,
        img;

    function checkForLoaded() 
    {

        if(imagesLoaded === totalImages) 
        {
            var loadingDiv = document.getElementById('loadingDiv');
            loadingDiv.parentNode.removeChild(loadingDiv);
        }
    }

    for (var i = 0; i < totalImages; i++) 
    {
        img = new Image();

        img.onload = function () 
        {

            imagesLoaded++;
            checkForLoaded();
        }

        img.src = images[i].src;

    }
}