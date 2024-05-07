document.getElementById("changeButton").addEventListener("click", function() {
    var image = document.getElementById("image");
    if (image.src.includes("happy.jpg")) {
        image.src = "sad.jpg";
        document.body.style.backgroundColor = "#ff8080"; 
    } else {
        image.src = "happy.jpg";
        document.body.style.backgroundColor = "#51d186"; 
    }
});