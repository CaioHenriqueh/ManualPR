const tdHoras = document.getElementById("horasTD");
const tdHorasAnual = document.getElementById("horasAnual");
const publiTD = document.getElementById("publiTD");
const estudosTD = document.getElementById("estudoTD");
const revisitaTD = document.getElementById("revisitaTD");
const videosTD = document.getElementById("videosTD");
 

const atualizaVideos = () => {
    if(localStorage.getItem("VideoSomados")) {
        if(localStorage.getItem("VideoSomados") > 1) {
            videosTD.innerText = `${localStorage.getItem("VideoSomados")} Videos`
        }else {
            videosTD.innerText = `${localStorage.getItem("VideoSomados")} Video`
        }
    }else {
        videosTD.innerText = `${0} Video`
    }
}

atualizaVideos();

const atualizaPubli = () => {
    if (localStorage.getItem("publicacoesSomadas")) {
        if (localStorage.getItem("publicacoesSomadas") > 1) {
            publiTD.innerText = `${localStorage.getItem("publicacoesSomadas")} Publicações`
        }
        else {
            publiTD.innerText = `${localStorage.getItem("publicacoesSomadas")} Publicação`
        }
    } else {
        publiTD.innerText = `${0} Publicação`;
    }
}
atualizaPubli()
const atualizaEstudos = () => {
    if (localStorage.getItem("somaEstudos")) {
        if (localStorage.getItem("somaEstudos") > 1) {
            estudosTD.innerText = `${localStorage.getItem("somaEstudos")} Estudos`
        } else {
            estudosTD.innerText = `${localStorage.getItem("somaEstudos")} Estudo`
        }
    } else {
        estudosTD.innerText = `${0} Estudo`
    }
}
atualizaEstudos()

const atualizaRevisitas = () => {
    if (localStorage.getItem("Somadasrevisitas")) {
        if (localStorage.getItem("Somadasrevisitas") > 1) {
            revisitaTD.innerText = `${localStorage.getItem("Somadasrevisitas")} Revisitas`
        } else {
            revisitaTD.innerText = `${localStorage.getItem("Somadasrevisitas")} Revisita`
        }
    } else {
        revisitaTD.innerText = `${0} Revisita`
    }
}
atualizaRevisitas();

if (localStorage.getItem('horasSomadas')) {
    if (localStorage.getItem('horasSomadas') > 1) {
        tdHoras.innerText = `${localStorage.getItem("horasSomadas")} Horas`
    } else {
        tdHoras.innerText = `${localStorage.getItem("horasSomadas")} Hora`
    }
} else {
    tdHoras.innerText = `${0} Horas`;
}

if (localStorage.getItem('horasSomadas')) {
    if (localStorage.getItem('horasSomadas') > 1) {
        tdHorasAnual.innerText = `${localStorage.getItem("horasSomadas")} Horas`
    } else {
        tdHorasAnual.innerText = `${localStorage.getItem("horasSomadas")} Hora`
    }
} else {
    tdHorasAnual.innerText = `${0} Horas`;
}




const publi = document.getElementById("publi");

const publicacoes = JSON.parse(localStorage.getItem("publicacoes")) || [];

const funcPublicacoes = () => {
    const nulo = 0;
    const valorPublicacoes = parseInt(publi.value);
    if (publi.value === '') {
        publicacoes.push(nulo)
    } else {
        publi.value = "";

        publicacoes.push(valorPublicacoes);

        localStorage.setItem("publicacoes", JSON.stringify(publicacoes))

        let somaPublicacoes = 0;
        for (let i = 0; i < publicacoes.length; i++) {
            somaPublicacoes += publicacoes[i]
        }
        localStorage.setItem("publicacoesSomadas", somaPublicacoes)
    }
}

const videos = document.getElementById("Videos");

const VideosRelatados = JSON.parse(localStorage.getItem("videos")) || [];

const funcVideos = () => {
    const nulo = 0;
    const valorVideos = parseInt(videos.value);
    if (videos.value === '') {
        VideosRelatados.push(nulo)
    } else {
        videos.value = '';
        VideosRelatados.push(valorVideos);

        localStorage.setItem("videos", JSON.stringify(VideosRelatados))

        let somaVideos = 0;
        for (let i = 0; i < VideosRelatados.length; i++) {
            somaVideos += VideosRelatados[i]
        }

        localStorage.setItem("VideoSomados", somaVideos);
    }
}






const estudos = document.getElementById("estudos");

const estudosRelatados = JSON.parse(localStorage.getItem("estudosFeitos")) || [];

const funEstudos = () => {
    const nulo = 0;
    const ValorEstudos = parseInt(estudos.value);
    if(estudos.value === '') {
        estudosRelatados.push(nulo)
    }else {
        estudos.value = '';
            
        estudosRelatados.push(ValorEstudos);

        localStorage.setItem("estudosFeitos" , JSON.stringify(estudosRelatados))

        let somaEstudos = 0;
        for (let i = 0; i < estudosRelatados.length; i++) {
            somaEstudos += estudosRelatados[i]
        }
        localStorage.setItem("somaEstudos" , somaEstudos )
    }

}



const revisitas = document.getElementById("revisita");

const revisitasRelatadas = JSON.parse(localStorage.getItem("RevisitasFeitas")) || [];

const Funcrevisitas = () => {
    const nulo = 0;
    const revisitasRelatadasInput = parseInt(revisitas.value);

    if (revisitas.value === '') {
        revisitasRelatadas.push(nulo)
    } else {
        revisitas.value = '';

        revisitasRelatadas.push(revisitasRelatadasInput)

        localStorage.setItem("RevisitasFeitas", JSON.stringify(revisitasRelatadas));

        let somadasRevisitas = 0;
        for (let i = 0; i < revisitasRelatadas.length; i++) {
            somadasRevisitas += revisitasRelatadas[i];
        }

        
        localStorage.setItem("Somadasrevisitas", somadasRevisitas)
    }

}
const btnRelate = document.getElementById("submit");
btnRelate.addEventListener("click", () => {
    validaRelatorio();
    Funcrevisitas();
    funcPublicacoes();
    funcVideos();
    funEstudos();
    atualizaPubli();
    atualizaEstudos();
    atualizaRevisitas();
    atualizaVideos();
})

const validaRelatorio = () => {
    if (publi.value === '' && estudos.value === '' && revisitas.value === '' && videos.value === '') {
        alert("Preencha algum campo!")
    }
}