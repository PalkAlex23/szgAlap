let ertek = false;

function szamok() {
    const szamELEMEK = document.querySelector(".szamok")
    let txt = ""
    for (let i = 0; i < 10; i++) {
        txt += `<button>${i}</button>`
    }
    console.log(txt)
    szamELEMEK.innerHTML= txt
}

function gombEsemeny() {
    const gombELEMEK = document.querySelectorAll(".szamok button")
    for (let i = 0; i < 10; i++) {
        gombELEMEK[i].addEventListener("click", function() {
            const eredmeny = document.querySelector(".kijelzo")
            eredmeny.innerHTML += i
            ertek = true
        })
    }
}

function muvjelEsemeny() {
    const osszeadas = document.querySelector("#osszeadas")
    osszeadas.addEventListener("click", function() {
        const eredmeny = document.querySelector(".kijelzo")
        eredmeny.innerHTML += osszeadas.innerHTML
    })

    const kivonas = document.querySelector("#kivonas")
    kivonas.addEventListener("click", function() {
        const eredmeny = document.querySelector(".kijelzo")
        eredmeny.innerHTML += kivonas.innerHTML
    })

    const szorzas = document.querySelector("#szorzas")
    szorzas.addEventListener("click", function() {
        const eredmeny = document.querySelector(".kijelzo")
        eredmeny.innerHTML += szorzas.innerHTML
    })

    const osztas = document.querySelector("#osztas")
    osztas.addEventListener("click", function() {
        const eredmeny = document.querySelector(".kijelzo")
        eredmeny.innerHTML += osztas.innerHTML
    })

    const pont = document.querySelector("#pont")
    pont.addEventListener("click", function() {
        const eredmeny = document.querySelector(".kijelzo")
        eredmeny.innerHTML += pont.innerHTML
    })

    const egyenlo = document.querySelector("#egyenlo")
    egyenlo.addEventListener("click", function() {
        const eredmeny = document.querySelector(".kijelzo")
        eredmeny.innerHTML += egyenlo.innerHTML
    })

    const torles = document.querySelector("#torles")
    torles.addEventListener("click", function() {
        const eredmeny = document.querySelector(".kijelzo")
        eredmeny.innerHTML = ""
    })
}

szamok();
gombEsemeny();
muvjelEsemeny();