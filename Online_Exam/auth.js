// auth.js
window.onload = function () {
    const user = sessionStorage.getItem('user');
    if (!user) {
        window.location.href = 'login.html';
    }
}
