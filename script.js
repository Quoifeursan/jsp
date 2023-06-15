function saveToFile() {
  // Récupère les valeurs des champs de texte
  var id = Math.floor(Math.random() * 1000000000000000000000);
  var name = document.getElementById("name").value;
  var mdp = document.getElementById("mdp").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Concatène les réponses
  var content ="SEND FROM ZQ SYSTEM \n"+"ASANID&"+id+"&HVENME&" + name +  "&FRMPWD&" + mdp + "&IFNEEDCONTACT&" + email + "\nHAVE SEND: " + message + "\n\n";

  // Crée le fichier avec une extension personnalisée
  var fileContent = new Blob([content], { type: "text/plain" });

  // Crée le lien de téléchargement
  var downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(fileContent);
  downloadLink.setAttribute("download", "configlog.zq");

  // Clique sur le lien pour déclencher le téléchargement
  downloadLink.click();
}
