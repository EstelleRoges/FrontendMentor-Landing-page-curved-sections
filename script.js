const subscribe = (event) => {
  event.preventDefault();

  const mail = document.getElementById("mailAddress");
  const errorMessage = document.getElementById("errorMessage");

  console.log(mail.value);
  console.log(errorMessage);

  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

  if (!pattern.test(mail.value)) {
    mail.classList.add("badMail");
    errorMessage.style.display = "block";
  } else {
    mail.classList.remove("badMail");
    errorMessage.style.display = "none";
    alert("Thanks for subscribing!");
  }
};
