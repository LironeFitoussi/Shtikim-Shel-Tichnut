function getOS() {
    const platform = navigator.userAgent;

    switch (true) {
        case /iPhone/.test(platform):
            return 'iOS';
        case /Mac/.test(platform):
            return 'Mac';
        case /Win/.test(platform):
            return 'Windows';
        case /Linux/.test(platform):
            return 'Linux';
        case /Android/.test(platform):
            return 'Android';
        default:
            return 'Unknown';
    }
}

document.getElementById('detectBtn').addEventListener('click', function() {
    const os = getOS();
    document.getElementById('osDisplay').textContent = `Your operating system is: ${os}`;
});
