function getOS() {
    const { platform, userAgent } = navigator;

    switch (true) {
        case /Mac/.test(platform):
            if (/iPhone|iPad|iPod/.test(userAgent)) {
                return 'iOS';
            }
            return 'Mac';
        case /Win/.test(platform):
            return 'Windows';
        case /Linux/.test(platform):
            return 'Linux';
        case /Android/.test(userAgent):
            return 'Android';
        default:
            return 'Unknown';
    }
}

document.getElementById('detectBtn').addEventListener('click', function() {
    const os = getOS();
    document.getElementById('osDisplay').textContent = `Your operating system is: ${os}`;
});
