export  function sortFuncion(array, key){
    return array.toSorted((primerAlumno, segundoAlumno) => {
        if(primerAlumno[key] < segundoAlumno[key]){
            return -1;
        } else if(primerAlumno[key] > segundoAlumno[key]){
            return 1;
        } else {
            return 0;
        }
    })
}