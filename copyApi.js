function fallbackCopyTextToClipboard(text) {
  var output = document.getElementById("commandOutput");

  output.focus();
  output.select();

  try {
    var successful = document.execCommand("copy");
    var msg = successful
      ? "Command copied to clipboard! 📋"
      : "Unable to copy the command! 😭";
    new Toast({
      message: msg,
      type: "success",
    });
  } catch (err) {
    new Toast({
      message: "Unable to copy the command! 😭",
      type: "danger",
    });
  }
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function () {
      new Toast({
        message: "Command copied to clipboard! 📋",
        type: "success",
      });
    },
    function (err) {
      new Toast({
        message: "Unable to copy the command! 😭",
        type: "danger",
      });
    }
  );
}
