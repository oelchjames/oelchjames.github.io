let dropdown = document.querySelectorAll(".dropdown");
    for(var i = 0; i < dropdown.length; i++){
        dropdown[i].addEventListener("click", (e)=>{
        let dropdownParent = e.target.parentElement.parentElement;
        console.log(dropdownParent);
        dropdownParent.classList.toggle("showMenu");
        });
    }
