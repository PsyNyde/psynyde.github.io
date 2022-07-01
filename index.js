console.log(`meow :3
　／l、
ﾞ（ﾟ､ ｡ ７
　l、ﾞ ~ヽ
　じしf_, )ノ
`)

let theme= localStorage.getItem("darkTheme");

const enableDarkMode = () => {
  document.querySelector("body").classList.remove("light");
  document.querySelector("body").classList.add("dark");
  
  icon = document.getElementById("btn-icon");
  icon.removeAttribute("data-icon");
  icon.setAttribute("data-icon","bx:sun");

  localStorage.setItem("darkTheme", "enabled");
  console.log('dark');
};

const disableDarkMode = () => {
    document.querySelector("body").classList.remove("dark");
    document.querySelector("body").classList.add("light");
  icon = document.getElementById("btn-icon");
  icon.removeAttribute("data-icon");
  icon.setAttribute("data-icon","bx:moon");

    localStorage.setItem("darkTheme", null);
  console.log("white");
};

theme === "enabled" ? enableDarkMode() : disableDarkMode();

const changetheme = () => {
  theme = localStorage.getItem("darkTheme");

      theme !== "enabled" ? enableDarkMode() : disableDarkMode();
  console.log("done");
}
