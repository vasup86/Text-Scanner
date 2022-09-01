# Text Scanner

## Overview
Text Scanner is a Full-stack chrome extension used to extract text from image and other formats, where text cannot be copied, ex: code from a youtube tutorial. The chrome extension takes a screenshot of the current tab and utilizes Tesseractjs OCR to extract text from image by sending data to custom API. The project is divided into two folders, client and server. The client folder is used to handle client related codebase such as popup and taking the image as a base64 encoded string. The server folder is used to handle parsing the image string into text. Currently, the extension is not available on chrome store. The extension repository can be pulled from github.

## Limitations
The major limitation for the extension is that the image cannot be croped to only parse a specific part. Currenlty, the extension takes a "screenshot" of the tab and parse the tab, which contains unwanted strings.

## Future Version
Based on current limiation mentioned, current focus is to implement a crop tool for user to crop the image and select the specific part which the user wants to parse.