function fallbackCopyTextToClipboard(text) {
  const output = document.getElementById("commandOutput");

  output.focus();
  output.select();

  try {
    const successful = document.execCommand("copy");
    new Toast({
      message: successful
        ? "Command copied to clipboard! 📋"
        : "Unable to copy the command! 😭",
      type: successful ? "success" : "danger",
    });
  } catch (err) {
    new Toast({ message: "Unable to copy the command! 😭", type: "danger" });
  }
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text)
    .then(() => {
      new Toast({ message: "Command copied to clipboard! 📋", type: "success" });
    })
    .catch(() => {
      new Toast({ message: "Unable to copy the command! 😭", type: "danger" });
    });
}
