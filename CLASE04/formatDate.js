const formatDate = (date = '') => {
    //yo voy a recibir 2025-02-10 10:00:00 y quiero retonar 10/02/2025, usando join
    debugger
    const fecha = date.split(' ')[0];
    const fechaFormateada = fecha.split('-'); // ['2025', '02', '10']
    //10/02/2025
    const resultDate = `${fechaFormateada[2]}/${fechaFormateada[1]}/${fechaFormateada[0]}`;
    return resultDate;
}

console.log(formatDate('2025-02-10 10:00:00'));