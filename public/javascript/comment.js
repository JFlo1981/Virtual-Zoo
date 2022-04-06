console.log("listening for comment");
async function commentFormHandler(event) {
  event.preventDefault();

  console.log("Posting Comment");

  const comment_text = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();

  const video_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  console.log(comment_text, video_id);

  if (comment_text) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        video_id,
        comment_text,
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
}

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
