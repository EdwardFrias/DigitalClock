const mostrarReloj = ()=>{
    //codigo para obtener la fecha , horas, minutos y segundos
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let sec = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${sec}`;

    //codigo para obtener los dias y meses 
    const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const dias = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];

    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana},${dia} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    //codigo para ponerle los bordes negros un segundo si y un segundo no
    document.getElementById('contenedor').classList.toggle('animar');
    
}

const formatoHora= (hora)=>{
    if (hora<10)
        hora = '0'+ hora;
    return hora;
}

setInterval(mostrarReloj, 1000); 