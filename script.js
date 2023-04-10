function replaceText() {
  // Get the input data, find text, and replace with values
  const inputData = document.getElementById("input-data").value;
  const findText = document.getElementById("find-text").value;
  const replaceWith = document.getElementById("replace-with").value;

  // Replace the text
  const outputData = inputData.replace(new RegExp(findText, "g"), replaceWith);

  // Display the output
  const outputElement = document.getElementById("output");
  outputElement.innerText = outputData;
  outputElement.style.display = "block";
}

function copyToClipboard() {
  // Get the output data
  const outputData = document.getElementById("output").innerText;

  // Create a temporary textarea element and set its value to the output data
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = outputData;

  // Add the textarea element to the document
  document.body.appendChild(tempTextarea);

  //
// Select the text inside the textarea element
  tempTextarea.select();

  // Copy the selected text to clipboard
  document.execCommand("copy");

  // Remove the textarea element from the document
  document.body.removeChild(tempTextarea);

  // Show a message to indicate that the text has been copied to clipboard
  const copyButton = document.getElementById("copy-button");
  copyButton.innerText = "Copied!";
  setTimeout(function() {
    copyButton.innerText = "Copy to Clipboard";
  }, 3000);
}
