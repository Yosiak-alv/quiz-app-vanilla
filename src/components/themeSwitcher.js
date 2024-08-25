const switchMode = (event) => event.target.checked ? 
    document.documentElement.setAttribute('data-theme', 'dark') : 
    document.documentElement.setAttribute('data-theme', 'light');

export const togglerTheme = () => {
    const toggleSwitch = document.querySelector('.light-dark-switch input[type="checkbox"]');
    document.querySelector(".start-menu").classList.toggle("visible")
    toggleSwitch.addEventListener('change', switchMode, false);
}