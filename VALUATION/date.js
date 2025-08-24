function calage(birthdate) {
  const today = new Date();
  const age = today.getFullYear() - birthdate.getFullYear() - 
             (today.getMonth() < birthdate.getMonth() || 
             (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()));
  return age;
}
var age = $('#age').val();
var dob = $('#dob').val();

if (age ==""){
  document.getElementById('#age').innerHTML=" ";
}else{
  document.age.innerHTML=calage(dob)
}

calage(25/05/1998)