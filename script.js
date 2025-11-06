window.addEventListener("load", () => {


  

    const img = document.getElementById("akss");
    const body = document.querySelector("body");

    img.onclick = () => {
        const isLight = img.getAttribute('data-theme') === 'light';

        if (isLight) {
            img.src = "images/3.PNG";
            img.setAttribute('data-theme', 'dark');
            body.classList.add("bg-dark");
            body.classList.remove("bg-white");
        } else {
            img.src = "images/2.PNG";
            img.setAttribute('data-theme', 'light');
            body.classList.add("bg-white");
            body.classList.remove("bg-dark");
        }
    };



})