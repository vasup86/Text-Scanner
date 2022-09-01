chrome.runtime.getManifest()

let string = ''
document.getElementById("selector").addEventListener("click", () => {
  //take image
  //send image to api
  //inject the data into textarea
  console.log("HI");


  document.getElementById("textArea").value = string;
  chrome.tabs.captureVisibleTab()
    .then(async imageBase64 => { 
     // console.log(imageBase64)
      var image = new Image();
      image.src = imageBase64;
      
      image.onload = function() {
        console.log(image.width + " " + image.height )
        ctx.drawImage(image,0, 0, image.width,    image.height,     // source rectangle
        0, 0, canvas.width, canvas.height);
      };
      
      //console.log(imageBase64)
      
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");

      //image crop file
      
      // chrome.tabs.create({ url: chrome.runtime.getURL("overlay.html") }, tabs=>{
      //   chrome.tabs.sendMessage({createCanvas:{
      //     width:image.width,
      //     height:image.height,
      //     imageBase64:imageBase64
      //   }}, res=>{
      //     console.log(res.confirmation);
      //   })
      // });
      
      
      // chrome.tabs.query({active:true, currentWindow:true}, tabs=>{
      //   chrome.tabs.sendMessage(tabs[0].id, {createCanvas:{
      //     width:image.width,
      //     height:image.height,
      //     imageBase64:imageBase64
      //   }}, res=>{
      //     console.log(res.confirmation);
      //   })
      // })



      // var canvas = document.getElementById("canvasCrop");
      // var ctx = canvas.getContext("2d");
      


      //parse api
      imageBase64 = imageBase64.replace("data:image/jpeg;base64,","")
      let result = await fetch("http://localhost:1337/api", {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({
          imageBase64
        })
      })

      const data = await result.json();
      console.log(data.result)
      string = data.result;
      document.getElementById("textArea").value = string;


      //next step save the data to chrome local storage \
      //and implement area capture
    })

  // html2canvas(document.body).then(async canvas => {
    
  //   let imageBase64 = canvas.toDataURL();
  //   //console.log(imageBase64);
  //   imageBase64 = imageBase64.replace("data:image/png;base64,","")
  //   let result = await fetch("http://localhost:1337/api", {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': "application/json",
  //     },
  //     body: JSON.stringify({
  //       imageBase64
  //     })
  //   })

    
//     const data = await result.json()
//     console.log(data.result)
//     document.getElementById("textArea").value = data.result;
    
//    });

});