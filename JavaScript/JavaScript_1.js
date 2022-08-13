// Assignment 56
function animalFunction() {
    var animalOutput;
    var animals = document.getElementById("animal_input").value;

    var animalString = " is a cute animal"
    switch (animals) {
        case "Dog":
            animalOutput = "Dog" + animalString
            break;
        case "Cat":
            animalOutput = "Cat" + animalString
            break;
        case "Monkey":
            animalOutput = "Monkey" + animalString
            break;
        case "Tiger":
            animalOutput = "Tiger" + animalString
            break;
        default:
            animalOutput = "Please enter a string from the options above"
    }
    document.getElementById("animalOutput").innerHTML = animalOutput


}

// Assignment 57
function getElementByClassName(){
    var elements = document.getElementsByClassName("commonClass");
    elements[0].innerHTML = "The text changed with JS!"
}
