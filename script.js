        var theme = document.getElementById('sun-theme');
        theme.addEventListener('click', addFunction);


        function addFunction() {

            const button = document.getElementById("btn");
            if ((button.style.backgroundColor == "black") && (button.style.color == "white")) {
                (button.style.backgroundColor = "white") && (button.style.color = "black");
            } else {
                (button.style.backgroundColor = "black") && (button.style.color = "white");
            }
            const body = document.getElementById("body-theme");
            body.classList.toggle("body");
            if (theme.innerHTML === "☀") {
                theme.innerHTML = "🌚";
            } else {
                theme.innerHTML = "☀";
            }
        }
