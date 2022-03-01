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

        function clickCounter1() {
            if (typeof(Storage) !== "undefined") {
                if (localStorage.clickcount) {
                    localStorage.clickcount = Number(localStorage.clickcount) + 1;
                } else {
                    localStorage.clickcount = 1;
                }
                document.getElementById("result1").innerHTML = localStorage.clickcount + " view(s).";
            } else {
                document.getElementById("result1").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }

        function clickCounter2() {
            if (typeof(Storage) !== "undefined") {
                if (localStorage.clickcount) {
                    localStorage.clickcount = Number(localStorage.clickcount) + 1;
                } else {
                    localStorage.clickcount = 1;
                }
                document.getElementById("result2").innerHTML = localStorage.clickcount + " view(s).";
            } else {
                document.getElementById("result2").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }

        function clickCounter3() {
            if (typeof(Storage) !== "undefined") {
                if (localStorage.clickcount) {
                    localStorage.clickcount = Number(localStorage.clickcount) + 1;
                } else {
                    localStorage.clickcount = 1;
                }
                document.getElementById("result3").innerHTML = localStorage.clickcount + " view(s).";
            } else {
                document.getElementById("result3").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }
