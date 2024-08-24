document.getElementById("darkMode").addEventListener('click', () => {
    document.documentElement.classList.add('dark');
});

document.getElementById("lightMode").addEventListener('click', () => {
    document.documentElement.classList.remove('dark');
});

document.getElementById("autoMode").addEventListener('click', () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');

    } else {
        document.documentElement.classList.remove('dark');
    }
});