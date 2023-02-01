const resetarRelatorio = document.getElementById("resetRelatorio");

resetarRelatorio.addEventListener("click", () => {
    localStorage.removeItem("publicacoesSomadas");
    localStorage.removeItem("horasSomadas");
    localStorage.removeItem("somaEstudos");
    localStorage.removeItem("Somadasrevisitas");
    localStorage.removeItem("videos");
    localStorage.removeItem("publicacoes");
    localStorage.removeItem("estudosFeitos");
    localStorage.removeItem("RevisitasFeitas");
    localStorage.removeItem("horasPRSJL");
    localStorage.removeItem("VideoSomados");
    location.reload();
});


const geraPdf = document.getElementById("pdfRelatorio");

const data = new Date();

const mes = String(data.getMonth() + 1).padStart(2, "0");

const ano = data.getFullYear();

const dataAtual = `${mes}/${ano}`


/*const validaPlural = (index , plural , singular) => {
    if(localStorage.getItem(index)) {
        if(localStorage.getItem(index) > 1 ) {
             plural 
        }else {
            singular
        }
    }else {
        plural
    }
} */

const validaHoras = () => {
    if (localStorage.getItem("horasSomadas")) {
        if (localStorage.getItem("horasSomadas") > 1) {
            return ` Horas : ${localStorage.getItem("horasSomadas")} Horas`
        } else {
            return `Horas : ${localStorage.getItem("horasSomadas")} Hora`
        }
    } else {
        return `Horas : ${0} Hora`
    }
}


const validaVideos = () => {
    if (localStorage.getItem("VideoSomados")) {
        if (localStorage.getItem("VideoSomados") > 1) {
            return ` Videos : ${localStorage.getItem("VideoSomados")} Videos`
        } else {
            return ` Videos : ${localStorage.getItem("VideoSomados")} Video`
        }
    } else {
        return ` Videos : ${0} Video`
    }
}

const validaPubli = () => {
    if (localStorage.getItem("publicacoesSomadas")) {
        if (localStorage.getItem("publicacoesSomadas") > 1) {
            return `Publicações : ${localStorage.getItem("publicacoesSomadas")} Publicações`
        }
        else {
            return `Publicações :${localStorage.getItem("publicacoesSomadas")} Publicação`
        }
    } else {
        return `Publicações : ${0} Publicação`;
    }
}

const validaEstudos = () => {
    if (localStorage.getItem("somaEstudos")) {
        if (localStorage.getItem("somaEstudos") > 1) {
            return `Estudo : ${localStorage.getItem("somaEstudos")} Estudos`
        } else {
            return `Estudo : ${localStorage.getItem("somaEstudos")} Estudo`
        }
    } else {
        return `Estudo : ${0} Estudo`
    }
}
const validaRevisitas = () => {
    if (localStorage.getItem("Somadasrevisitas")) {
        if (localStorage.getItem("Somadasrevisitas") > 1) {
            return `Revisita : ${localStorage.getItem("Somadasrevisitas")} Revisitas`
        } else {
            return `Revisita : ${localStorage.getItem("Somadasrevisitas")} Revisita`
        }
    } else {
        return `Revisita : ${0} Revisita`
    }
}

const NameUserPDF = localStorage.getItem("name");

const capitalized = NameUserPDF[0].toUpperCase() + NameUserPDF.substr(1);

geraPdf.addEventListener("click", () => {


    const janela = window.open('', '', 'width= 800 , heigth=600')

    janela.document.write("<html> <head>");
    janela.document.write("<title>Relatorio em PDF</title></head>");
    janela.document.write("<body>");
    janela.document.write(`

    Relatorio de ${localStorage.getItem("name")} ${dataAtual} <br>
    <br>
    ${validaHoras()}<br>
    <br>
    ${validaPubli()}<br>
    <br>
    ${validaEstudos()}<br>
    <br>
    ${validaRevisitas()}<br>
    <br>
    ${validaVideos()}<br>

    `);

    janela.document.write("</body></html>");

    janela.document.close();

    janela.print();

})

