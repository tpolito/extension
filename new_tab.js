const links = [
  {
    name: "Mail",
    category: "mail",
    url: "https://mail.proton.me/u/0/inbox",
    icon: "./assets/links/mail.png",
    hotkey: "m",
  },
  {
    name: "Calendar",
    category: "mail",
    url: "https://calendar.proton.me/u/0/",
    icon: "./assets/links/calendar.png",
  },
  {
    name: "YouTube",
    category: "entertainment",
    url: "http://www.youtube.com/feed/subscriptions",
    icon: "./assets/links/youtube.png",
    hotkey: "y",
  },
  {
    name: "Twitch",
    category: "entertainment",
    url: "https://www.twitch.tv/directory/following",
    icon: "./assets/links/twitch.png",
    hotkey: "t",
  },
  {
    name: "tpolito",
    category: "development",
    url: "https://github.com/tpolito",
    icon: "./assets/links/github.png",
    hotkey: "g",
  },
  {
    name: "StudioTwey",
    category: "development",
    url: "https://github.com/StudioTwey",
    icon: "./assets/links/github.png",
    hotkey: "G",
  },
];

function init() {
  setDateTime();
  setupHotkeys();
  populateLinkGrid();
}

function setDateTime() {
  let el = document.querySelector(".dateTime");
  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const dateOfMonth = date.getDate();

  el.textContent = `${day}, ${month} ${dateOfMonth}`;
}

function setupHotkeys() {
  document.addEventListener("keydown", (event) => {
    if (
      event.target.tagName === "INPUT" ||
      event.target.tagName === "TEXTAREA"
    ) {
      return;
    }

    const key = event.key.toLowerCase();
    const isShift = event.shiftKey;

    const matchingLink = links.find((link) => {
      if (!link.hotkey) return false;

      const hotkeyIsUpperCase = link.hotkey === link.hotkey.toUpperCase();
      const hotkeyKey = link.hotkey.toLowerCase();

      return hotkeyKey === key && isShift === hotkeyIsUpperCase;
    });

    if (matchingLink) {
      window.location.href = matchingLink.url;
    }
  });
}

function populateLinkGrid() {
  const linkContainer = document.querySelector(".link-container");

  links.forEach((link) => {
    const container = document.createElement("a");
    container.href = link.url;
    container.classList.add("link");
    if (link.icon !== null) {
      const linkImg = document.createElement("img");
      linkImg.src = link.icon;
      container.appendChild(linkImg);
    } else {
      const linkIcon = document.createElement("span");
      linkIcon.classList.add("linkIcon");
      linkIcon.textContent = "🔗";
      container.appendChild(linkIcon);
    }
    // Add title under the icon
    const linkName = document.createElement("span");
    linkName.textContent = link.name;
    container.appendChild(linkName);

    // Add hotkey span in the top right corner if available
    if (link.hotkey) {
      const hotkeyIcon = document.createElement("span");
      hotkeyIcon.textContent = link.hotkey;
      hotkeyIcon.classList.add("linkHotkey");
      container.appendChild(hotkeyIcon);
    }

    linkContainer.appendChild(container);
  });
}

init();
