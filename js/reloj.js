const mostrarReloj = ()=>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    
/*     let fecha = new Date();
    let hr = fecha.getHours();
    let min = fecha.getMinutes();
    let seg = fecha.getSeconds();
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`; */
   
    const meses = ['Ene', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Oct', 'Nov', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora) =>{
    if(hora < 10){
        hora = '0' + hora;
    }
    return hora;
}

setInterval(mostrarReloj, 1000);