
function pollContactsHeader() {
    if (document.querySelector("[role=\"navigation\"]:nth-child(1)").childNodes[0].childNodes[1].querySelector(".x9f619>.x9f619>.x9f619>.x9f619>.x78zum5.x2lah0s") != null) {
        root_el = document.querySelector("[role=\"navigation\"]:nth-child(1)").childNodes[0].childNodes[1].querySelector(".x9f619>.x9f619>.x9f619>.x9f619>.x78zum5.x2lah0s")
        let ui_el = document.createElement("div")
        ui_el.classList.add("x78zum5", "x2lah0s")
        ui_el.innerHTML = "<button type=\"button\" id=\"set_compact_btn\">Compact</button>\
            <button class=\"hidden\" type=\"button\" id=\"reload_btn\">Normal</button>"
        root_el.insertBefore(ui_el, root_el.children[0])
        document.querySelector("#set_compact_btn").addEventListener('click', function (e) {
            document.querySelector("#reload_btn").classList.toggle("hidden")
            document.querySelector("#set_compact_btn").classList.toggle("hidden")
            window.compactMode.enable()
        })
        document.querySelector("#reload_btn").addEventListener('click', function (e) {
            document.querySelector("#reload_btn").classList.toggle("hidden")
            document.querySelector("#set_compact_btn").classList.toggle("hidden")
            window.compactMode.disable()
        })
        console.log("UI hooked")
    } else {
        setTimeout(pollContactsHeader, 100)
    }
}

pollContactsHeader()