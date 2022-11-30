function convertir() {
  try {
    var json = JSON.parse(document.getElementById("input").value);
  } catch (error) {
    new Toast({
      message: "Invalid JSON! 🤨",
      type: "danger",
    });
    return
  }
  var styledText = "/itemname ";
  for (itemN in json) {
    var convWord = "";
    var item = json[itemN];
    var text = item.text;
    var color = item.color;

    if (text === "") {
      continue;
    }
    if (color) {
      if (color.startsWith("#")) {
        convWord += "{" + color + "}";
      } else {
        convWord += getColor(color);
      }
    }else{
        convWord += "&r"
    }
    if (item.bold) {
      convWord += "&l";
    }
    if (item.italic) {
      convWord += "&o";
    }
    if (item.underlined) {
      convWord += "&n";
    }
    convWord += text;

    styledText += convWord;
  }

  document.getElementById("commandOutput").value = styledText;
  document.getElementById("input").value = "";
  document.getElementById("input").focus();
  copyTextToClipboard(styledText);
}

function getColor(color) {
  switch (color) {
    case "yellow":
      return "&e";
    case "gold":
      return "&6";
    case "red":
      return "&c";
    case "dark_red":
      return "&4";
    case "light_purple":
      return "&d";
    case "dark_purple":
      return "&5";
    case "blue":
      return "&9";
    case "dark_blue":
      return "&1";
    case "dark_aqua":
      return "&3";
    case "aqua":
      return "&b";
    case "dark_green":
      return "&2";
    case "green":
      return "&a";
    case "dark_gray":
      return "&8";
    case "gray":
      return "&7";
    case "black":
      return "&0";
    	case "white":
      return "&f";
  }
}
document.getElementById("input").focus();
