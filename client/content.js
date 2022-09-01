
chrome.runtime.getManifest()
console.log("H")
chrome.runtime.onMessage.addListener((req, sender, req)=>{
    console.log(req)
    var image = new Image();
        image.src = req.imageBase64;
        
        image.onload = function() {
            console.log(image.width + " " + image.height )
            ctx.drawImage(image,0, 0, image.width,    image.height,     // source rectangle
            0, 0, canvas.width, canvas.height);
        };
        
        //console.log(imageBase64)
        var canvas = document.getElementById("canvasCrop");
       // canvas.width = req.width;
       // canvas.height = req.height;
        var ctx = canvas.getContext("2d");

    fetch(chrome.runtime.getURL('/overlay.html')).then(r => r.text()).then(html => {
        
        // not using innerHTML as it would break js event listeners of the page

        if(req.requested ==="createCanvas"){

            sendResponse({confirmation:"Done"})
        }
      });
      
        
})