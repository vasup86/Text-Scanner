# Text Scanner

## Overview
Text Scanner is a Full-stack chrome extension used to extract text from image and other formats, where text cannot be copied, ex: code from a youtube tutorial. The chrome extension takes a screenshot of the current tab and utilizes Tesseractjs OCR to extract text from image by sending data to custom API. The project is divided into two folders, client and server. The client folder is used to handle client related codebase such as popup and taking the image as a base64 encoded string. The server folder is used to handle parsing the image string into text. Currently, the extension is not available on chrome store. The extension repository can be pulled from github.

## Client
Client side is used to get the image and display the data. The extension takes a full page screenshot of the current tab and send it to the API for parsing. The output is injected into a textarea on the extension popup window.

## Server
Server side is used to parse the image using Tesseractjs. The server is created using node and express. The API is functional to parse the image is to be deployed. The server accepts a GET request with image encoded as base64 string as a JSON payload and returns a JSON object containing the result.

## Limitations
The major limitation for the extension is that the image cannot be croped to only parse a specific part. Currenlty, the extension takes a "screenshot" of the tab and parse the tab, which contains unwanted strings.

## Future Version
Based on current limiation mentioned, current focus is to implement a crop tool for user to crop the image and select the specific part which the user wants to parse.