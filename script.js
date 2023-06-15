document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupère les valeurs des champs de texte
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Concatène les réponses
  var content = "Nom: " + name + "\nEmail: " + email + "\nMessage: " + message + "\n\n";

  // Appel à la fonction pour stocker les réponses dans un fichier texte
  saveToFile(content);
});

function saveToFile(content) {
  var fileContent = new Blob([content], { type: "text/plain" });
  var newFilename = "config.za";

  var a = document.createElement("a");
  a.href = URL.createObjectURL(fileContent);
  a.download = "reponses.txt";
  a.click();
}
