const Tesseract = require("tesseract.js");

async function ocr(img) {
  console.log("starting");
  let imageBuffer = Buffer.from(img, "base64");
  let res = await Tesseract.recognize(imageBuffer, "eng")
  return res.data.text;
}

module.exports.ocr = ocr;
