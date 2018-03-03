(function () {

  var input =  document.getElementById('iris-input'),
      submit = document.getElementById('iris-submit'),
      message= document.getElementById('iris-message')
      validInputs = [
        "Where do you live?",
        "What are you?",
        "How old are you?",
        "What is the meaning of life?",
        "Tell me a joke."],
      responses = [
        "Deada**? Ny my guy",
        "I am the of the famale species",
        "Not old enough for you to talk to me.",
        "There is no meaning. You waste oxyegen space and resources and then you die. YAY",
        "Look in the mirror... You're welcome"];
var string = validInputs [4];
console.log(string);

var index = validInputs.indexOf(string);
  // Add event listeners to text input and submit button below
        input.addEventListener("keyPressed", checkKey);
        submit.addEventListener ("click", processInput);

var nums = [1,1,2,3,4]
var index3 = nums.indexOf(1);
console.log (index3);
// will give out 0 because it looks for the first one and it was in the 0 place
  // This function checks if the user has pressed "ENTER" on their keyboard.
  function checkKey(event) {
    var keyCode = event.which || event.keyCode;
    if(keyCode == "13") {
      processInput();
    }
  }

  /*
   * processInput()
   * This function does the following (in order):
   * -Set a new variable, "currentInput", to the text in the text area.
   * -Clear the text area.
   * -If currentInput is NOT contained in the array of validInputs, set
   *  the innerHTML of the message element to something like "Sorry, I don't
   *  understand you."
   * -Otherwise, set the innerHTML of the message element to the valid
   *  response. Hint: Each response has the same index as its valid input.
   *  So if the user enters "What is the meaning of life" (index 3 in the
   *  validInputs array), the response would be "42. Duh" (index 3 in the
   *  responses array).
   */


function processInput(){
	var currentInput = input.value;
	input.value = "";

	if(validInputs.indexOf(currentInput) == -1 ) {
		message.innerHTML = "Aw try again";
	}
	else {
		responses [validInputs.indexOf(currentInput)];
		message.innerHTML = responses [validInputs.indexOf(currentInput)];
	}
}

})();