$(document).ready(function(){
    const STORAGE_KEY = "portfolio-theme";
    const $html = $("html");
    const $toggle = $("#themeToggle");
    const $iconMoon = $toggle.find(".theme-icon-moon");
    const $iconSun = $toggle.find(".theme-icon-sun");

    function applyTheme(theme) {
        $html.attr("data-bs-theme", theme);
        localStorage.setItem(STORAGE_KEY, theme);

        const isDark = theme === "dark";
        $iconMoon.toggleClass("d-none", isDark);
        $iconSun.toggleClass("d-none", !isDark);
        $toggle.attr("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
        $toggle.attr("title", isDark ? "Light mode" : "Dark mode");
    }

    let savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme !== "dark" && savedTheme !== "light") {
        savedTheme = "light";
    }
    applyTheme(savedTheme);

    $toggle.on("click", function () {
        const nextTheme = $html.attr("data-bs-theme") === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
    });

    $("form").submit(function(e){
        
       
        $(".error").remove(); 

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let texta = $("#textarea").val().trim();
        let valid = true;

        if(name === ""){
            $("#name").after('<small class="error text-danger">Name is required.</small>');
            valid = false;
        }

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            $("#email").after('<small class="error text-danger">Email is required.</small>');
            valid = false;
        } else if (!emailRegex.test(email)) {
            $("#email").after('<small class="error text-danger">Enter a valid email.</small>');
            valid = false;
        }

        if(texta === ""){
            $("#textarea").after('<small class="error text-danger">Messege is required.</small>');
            valid = false;
        }

        if(!valid){
            e.preventDefault();
        }

    });
});


const card = document.querySelectorAll(".ani");

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        entry.target.classList.toggle("show",entry.isIntersecting);
    });
});

card.forEach(card => {
    observer.observe(card);
})