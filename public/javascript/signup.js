async function signupFormHandler(event) {
  event.preventDefault();
  console.log("JS Signup");

  const firstName = document.querySelector("#firstName").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const lastName = document.querySelector("#lastName").value.trim();
  const username = document.querySelector("#username").value.trim();
  console.log(username, email, password, firstName, lastName);

  if (username && email && password && firstName && lastName) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
        firstName,
        lastName,
      }),
      headers: { "Content-Type": "application/json" },
    });

    // check the response status
    if (response.ok) {
      document.location.replace("/homepage");
      // location.redirect("/homepage")
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
