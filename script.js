function saveToFile() {
  // Récupère les valeurs des champs de texte
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Concatène les réponses
  var content = "Nom: " + name + "\nEmail: " + email + "\nMessage: " + message + "\n\n";

  // Crée le lien de téléchargement
  var fileContent = new Blob([content], { type: "text/plain" });
  var downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(fileContent);
  downloadLink.download = "reponses.txt";
  downloadLink.style.display = "none";
  
  // Ajoute le lien au corps du document et clique dessus pour déclencher le téléchargement
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}
