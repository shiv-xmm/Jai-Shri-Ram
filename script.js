// Optional JavaScript to enhance the detection or perform other actions
window.addEventListener('resize', function() {
    // Check the screen width on resize
    checkScreenWidth();
});

// Check screen width on page load
window.addEventListener('load', function() {
    checkScreenWidth();
});

function checkScreenWidth() {
    var mobileText = document.getElementById('mobileText');
    var desktopText = document.getElementById('desktopText');
    
    // Get the current screen width
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Toggle visibility based on screen width
    if (screenWidth <= 768) {
        mobileText.style.display = 'block';
        desktopText.style.display = 'none';
    } else {
        mobileText.style.display = 'none';
        desktopText.style.display = 'block';
    }
}
