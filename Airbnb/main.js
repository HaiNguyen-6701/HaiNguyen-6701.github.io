const selectedAll = document.querySelectorAll(".selected");

selectedAll.forEach((selected) => {
    const optionsContainer = selected.previousElementSibling;

    const optionsList = optionsContainer.querySelectorAll(".option");

    selected.addEventListener("click", () => {
    
    if(optionsContainer.classList.contains("active")) {
        optionsContainer.classList.remove("active");
    } else {
        let currentActive = document.querySelector(".options-container.active");

        if(currentActive) {
            currentActive.classList.remove("active");
        }

        optionsContainer.classList.add("active");
    }

    
    });

    optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
    });

    const filterList = searchTerm => {
    searchTerm = searchTerm.toLowerCase();
    optionsList.forEach(option => {
        let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        if (label.indexOf(searchTerm) != -1) {
        option.style.display = "block";
        } else {
        option.style.display = "none";
        }
    });
    };
});

// slider
const slides = document.querySelectorAll('.slide');

function slideShow() {
    const active = document.querySelector('.active');
    active.classList.remove('active')
    if(active.nextElementSibling) {
        active.nextElementSibling.classList.add('active')
    }else {
        slides[0].classList.add('active')
    }

    setTimeout('slideShow()',6000)
}
window.onload = slideShow;
