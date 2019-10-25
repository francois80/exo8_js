function fVerifAge(champ){
  let age = parseInt(champ.value);
  if(isNaN(age)){
    alert('Veuillez saisir un nombre');
    document.getElementById('age').focus();
  }else {
    if(age < 18){
      alert("Vous n\' êtes pas majeur");
      }
      else {
        if(age >= 18){
        alert('Vous êtes majeur');
        }
      }
    }
  }
