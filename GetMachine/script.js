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

document.getElementById('detectBtn').addEventListener('click', function() {
    const os = getOS();
    document.getElementById('osDisplay').textContent = `Your operating system is: ${os}`;
});
