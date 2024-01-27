function init() {
  setDateTime();
  populateLinkGrid();
}

function setDateTime() {
  let el = document.querySelector('.dateTime');
  const date = new Date();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const dateOfMonth = date.getDate();

  el.textContent = `${day}, ${month} ${dateOfMonth}`;
}

function populateLinkGrid() {
  const linkContainer = document.querySelector('.linkContainer');
  const links = [
    {
      name: 'Mail',
      category: 'mail',
      url: 'https://mail.proton.me/u/0/inbox',
      icon: './assets/links/mail.png',
    },
    {
      name: 'Calendar',
      category: 'mail',
      url: 'https://calendar.proton.me/u/0/',
      icon: './assets/links/calendar.png',
    },
    {
      name: 'YouTube',
      category: 'entertainment',
      url: 'http://www.youtube.com/feed/subscriptions',
      icon: './assets/links/youtube.png',
    },
    {
      name: 'Twitch',
      category: 'entertainment',
      url: 'https://www.twitch.tv/directory/following',
      icon: './assets/links/twitch.png',
    },
    {
      name: 'tpolito',
      category: 'development',
      url: 'https://github.com/tpolito',
      icon: './assets/links/github.png',
    },
    {
      name: 'StudioTwey',
      category: 'development',
      url: 'https://github.com/StudioTwey',
      icon: './assets/links/github.png',
    },
    {
      name: 'Weather',
      category: 'other',
      url: 'https://merrysky.net/forecast/30.2423000,-97.7672000',
      icon: './assets/links/weather.png',
    },
    {
      name: 'Warframe hub',
      category: 'games',
      url: 'https://hub.warframestat.us/',
      icon: null,
    },
  ];

  // Chunk the links into categories
  // const categories = {};
  // links.forEach((link) => {
  //   if (!categories[link.category]) {
  //     categories[link.category] = [];
  //   }
  //   categories[link.category].push(link);
  // });

  links.forEach((link) => {
    const container = document.createElement('a');
    container.href = link.url;
    container.classList.add('link');

    if (link.icon !== null) {
      const linkImg = document.createElement('img');
      linkImg.src = link.icon;
      container.appendChild(linkImg);
    } else {
      const linkIcon = document.createElement('span');
      linkIcon.classList.add('linkIcon');
      linkIcon.textContent = '🔗';
      container.appendChild(linkIcon);
    }

    const linkName = document.createElement('span');
    linkName.textContent = link.name;
    container.appendChild(linkName);
    linkContainer.appendChild(container);
  });
}

init();
