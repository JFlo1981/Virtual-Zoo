async function favClickHandler(event) {
  event.preventDefault();
  console.log("----------------------------Faving vid");

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch("/api/videos/fav", {
    method: "PUT",
    body: JSON.stringify({
      video_id: id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}
document.querySelector("#fav-btn").addEventListener("click", favClickHandler);
