async function getOS() {
  try {
    const { platform, brands} = await navigator.userAgentData;
    if (platform === "Windows") return "Windows";
    if (platform === "Macintosh") return "Mac";
    for (const brand of brands) {
      if (brand.brand === "Android") return "Android";
      if (brand.brand === "iPhone" || brand.brand === "iPad") return "iOS";
    }
    return "Linux"; // Assuming Linux for other unknown platforms
  } catch (err) {
    console.error("Error getting user agent data:", err);
    return "Unknown";
  }
}

const osResources = {
  Windows: {
    text: "Download for Windows",
    color: "#0078d7",
    link: "https://en.wikipedia.org/wiki/Microsoft_Windows",
    icon: "windows.png",
  },
  Mac: {
    text: "Download for macOS",
    color: "#888888",
    link: "https://en.wikipedia.org/wiki/MacOS",
    icon: "mac.png",
  },
  iOS: {
    text: "Download for iOS",
    color: "#5555ff",
    link: "https://en.wikipedia.org/wiki/IOS",
    icon: "ios.png",
  },
  Android: {
    text: "Download for Android",
    color: "#3ddc84",
    link: "https://en.wikipedia.org/wiki/Android_(operating_system)",
    icon: "android.png",
  },
  Linux: {
    text: "Download for Linux",
    color: "#f0ad4e",
    link: "https://en.wikipedia.org/wiki/Linux",
    icon: "linux.png",
  },
  Unknown: {
    text: "Download",
    color: "#888",
    link: "https://example.com/unknown-download",
    icon: "unknown.png",
  },
};

async function updateUI() {
  const userOS = await getOS();
  document.getElementById(
    "icon"
  ).innerHTML = `<img class="img-icon" src="icons/${osResources[userOS].icon}" alt="${userOS} icon">`;
  document.getElementById("text").innerText = osResources[userOS].text;
  document.getElementById("download").innerText = "Download";
  document.getElementById("download").href = osResources[userOS].link;
  document.querySelector(".download-box").style.backgroundColor =
    osResources[userOS].color;
}

updateUI();
