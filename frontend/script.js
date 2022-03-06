function validationForm() {
  let cancel = document.getElementsByClassName(".cancel");
  let send = document.getElementsByClassName(".send");

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let tel = document.getElementById("number");
  let message = document.getElementById("message");

  cancel.addEventListener("click", () => {
    name.value = "";
    email.value = "";
    tel.value = "";
    message.value = "";
  });
  send.addEventListener("click", () => {
    let messageArr = Array.from(message.value);

    if (
      name.value === "" ||
      email.value === "" ||
      tel.value === "" ||
      message.value === ""
    ) {
      alert("all input boxes must be filled");
    } else if (messageArr.length > 100) {
      alert("message cannot be more than 100");
    } else {
      alert(`welcome ${name}`);
    }
  });
}
