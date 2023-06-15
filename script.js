function saveToFile() {
  // Récupère les valeurs des champs de texte
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Concatène les réponses
  var content = "Nom: " + name + "\nEmail: " + email + "\nMessage: " + message + "\n\n";

  // Crée le fichier avec une extension personnalisée
  var fileContent = new Blob([content], { type: "text/plain" });

  // Crée le lien de téléchargement
  var downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(fileContent);
  downloadLink.setAttribute("download", "configlog.zq");

  // Clique sur le lien pour déclencher le téléchargement
  downloadLink.click();
}
