const colors = {
  "yellow": "&e",
  "gold": "&6",
  "red": "&c",
  "dark_red": "&4",
  "light_purple": "&d",
  "dark_purple": "&5",
  "blue": "&9",
  "dark_blue": "&1",
  "dark_aqua": "&3",
  "aqua": "&b",
  "dark_green": "&2",
  "green": "&a",
  "dark_gray": "&8",
  "gray": "&7",
  "black": "&0",
  "white": "&f",
}

function getColor(color) {
  return colors[color] || "&r"
}

function convertir() {
  let json;
  try {
    json = JSON.parse(document.getElementById("input").value);
  } catch (error) {
    new Toast({ message: "Invalid JSON! 🤨", type: "danger" });
    return
  }
  var styledText = "/itemname ";

  for (const item of Object.values(json)) {
    if (!item.text) continue;
    let convWord = "";

    if (item.color) {
      convWord += item.color.startsWith("#") ? `{${item.color}}` : getColor(item.color);
    } else {
      convWord += "&r";
    }

    if (item.bold) convWord += "&l";
    if (item.italic) convWord += "&o";
    if (item.underlined) convWord += "&n";

    convWord += item.text;
    styledText += convWord;
  }

  const output = document.getElementById("commandOutput");
  const input = document.getElementById("input");

  output.value = styledText;
  input.value = "";
  input.focus();

  copyTextToClipboard(styledText);
}
