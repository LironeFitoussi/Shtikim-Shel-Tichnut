function getOS() {
    const userAgent = navigator.userAgent;

    if (/Windows/.test(userAgent)) {
        return 'Windows';
    }
    if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)) {
        return 'Mac';
    }
    if (/iPhone|iPad|iPod/.test(userAgent)) {
        return 'iOS';
    }
    if (/Android/.test(userAgent)) {
        return 'Android';
    }
    if (/Linux/.test(userAgent)) {
        return 'Linux';
    }

    return 'Unknown';
}

// Predefined resources based on the detected OS
const osResources = {
  'Windows': {
    text: 'Download for Windows',
    color: '#0078d7',
    link: 'https://en.wikipedia.org/wiki/Microsoft_Windows',
    icon: 'windows.png'
  },
  'Mac': {
    text: 'Download for macOS',
    color: '#888888',
    link: 'https://en.wikipedia.org/wiki/MacOS',
    icon: 'mac.png'
  },
  'iOS': {
    text: 'Download for iOS',
    color: '#5555ff',
    link: 'https://en.wikipedia.org/wiki/IOS',
    icon: 'ios.png'
  },
  'Android': {
    text: 'Download for Android',
    color: '#3ddc84',
    link: 'https://en.wikipedia.org/wiki/Android_(operating_system)',
    icon: 'android.png'
  },
  'Linux': {
    text: 'Download for Linux',
    color: '#f0ad4e',
    link: 'https://en.wikipedia.org/wiki/Linux',
    icon: 'linux.png'
  },
  'Unknown': {
    text: 'Download',
    color: '#888',
    link: 'https://example.com/unknown-download',
    icon: 'unknown.png'
  }
};

// Detect the user's OS
const userOS = getOS();

// Update the UI based on the detected OS
document.getElementById('icon').innerHTML = `<img class="img-icon" src="icons/${osResources[userOS].icon}" alt="${userOS} icon">`;
document.getElementById('text').innerText = osResources[userOS].text;
document.getElementById('download').innerText = 'Download';
document.getElementById('download').href = osResources[userOS].link;
document.querySelector('.download-box').style.backgroundColor = osResources[userOS].color;
