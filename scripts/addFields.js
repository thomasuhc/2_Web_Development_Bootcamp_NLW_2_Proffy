document.querySelector("#add-time")
.addEventListener("click", cloneField)


function cloneField () {
    
    const newfieldsContainer = document.querySelector(".schedule-item").cloneNode(true);

    const fields = newfieldsContainer.querySelectorAll("input")

    fields.forEach(function (field) {

        field.value = "";
        
    });

    document.querySelector("#schedule-items").appendChild(newfieldsContainer);

    console.log(newfieldsContainer);
}