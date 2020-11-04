        let toggler = document.querySelector(".toggle")
        let close = document.querySelector(".close")
        let menu = document.querySelector(".nav-menu")
        let error = document.querySelector(".error")
        let button = document.querySelector(".btn")
        let form_el = document.getElementById("form")
        let wordInput = document.getElementById("wordName")

        toggler.addEventListener("click", ()=>{
            menu.style.display = "block"
        })

        close.addEventListener("click", ()=>{
            menu.style.display = ""
        })

        form_el.addEventListener("submit", (evt) => {
            evt.preventDefault()
            checkInput()
        })

        function checkInput() {
            if(wordInput.value.length){
                wordInput.value = ''
                error.style.display = ''
            } else {
                error.style.display = "block"
            }
        }