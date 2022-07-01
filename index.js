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

  localStorage.removeItem("darkTheme");
  localStorage.setItem("darkTheme", "enabled");
};

const disableDarkMode = () => {
    document.querySelector("body").classList.remove("dark");
    document.querySelector("body").classList.add("light");
  icon = document.getElementById("btn-icon");
  icon.removeAttribute("data-icon");
  icon.setAttribute("data-icon","bx:moon");

  localStorage.removeItem("darkTheme");
  localStorage.setItem("darkTheme", "disabled");
};

if((theme == "enabled") || (window.matchMedia('(prefers-color-scheme: dark)').matches && theme !== "disabled")){
  enableDarkMode();
} else {
  disableDarkMode();
}

const changetheme = () => {
  theme = localStorage.getItem("darkTheme");

      theme !== "enabled" ? enableDarkMode() : disableDarkMode();
}
