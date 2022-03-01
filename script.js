 var theme = document.getElementById('sun-theme');
        theme.addEventListener('click', addFunction);


        function addFunction() {
            const body = document.getElementById("body-theme");
            body.classList.toggle("body");
            if (theme.innerHTML === "☀") {
                theme.innerHTML = "🌚";
            } else {
                theme.innerHTML = "☀";
            }
        }
