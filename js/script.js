const avatar = document.getElementById('avatar');
const link = document.getElementById('link')
const input = document.getElementById('input');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    checkProfile(input.value);
});

document.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') {
        checkProfile(input.value);
    }
});

async function checkProfile(nick) {
    const response = await fetch(`https://api.github.com/users/${nick}`);
    if (response.ok) {
        const data = await response.json();
        link.innerHTML = data.login;
        avatar.src = data.avatar_url;
        link.href = data.html_url;
        link.style.pointerEvents = 'all';
        link.style.textDecoration = 'underline';
    } else {
        link.innerHTML = "Не найден";
        avatar.src = "img/avatar.png";
        link.href = "";
        link.style.pointerEvents = 'none';
        link.style.textDecoration = 'none';
    }
}