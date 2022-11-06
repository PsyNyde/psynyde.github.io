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

//make repos load automatically

var projects = document.querySelector('.projects')
const repos = 'https://api.github.com/users/SimplyVoid/repos?sort=updated';
const api = 'https://api.github.com/users/SimplyVoid';

fetch(api)
  .then(res => res.json())
  .then(data => {
    var followers = data.followers;
  })

fetch(repos)
  .then(res => res.json())
  .then(data => {
    i = 0;
    num = 6;
    while (i < num) {
      
      repo=data[i]
      
      projects.innerHTML += `
      <div class=project-holder>
      <a href="${repo.html_url}" target=_blank>
      <div>
      <h4>
      <span>
      <span class=iconify data-icon=bx:book></span> ${repo.name}
      </span>
      <span class="star">${repo.stargazers_count} <span class="iconify" data-icon="fluent-emoji-high-contrast:star"></span></span>
      </h4>
      <p class=description>${repo.description}</p>
      </div>
      </a>
      </div>
      `;
      i++;
      
    }
  })

const age = document.querySelector(".age");
age.textContent = `${((new Date()-new Date(2003,11,10))/31557600000).toFixed(2)}`
