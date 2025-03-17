//asincronimos
//manejo de errores
//try catch finally
//promesas
//async await
//fetch
//json

async function fetchData() {
    const apiUrl = 'https://swapi.dev/api/people/?search=r2';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        debugger
        console.log(data);
        return data;
    } catch (error) {
        return 'Error al obtener los datos.Si sigue el problema, contactar con el administrador.';    
    } finally {
        console.log('fin de la funcion');
        //limpiar el formulario
    }
}



//////////////////////////
const URL = 'https://jsonplaceholder.typicode.com/posts'

const pedirPosts = async () => {
    const resp = await fetch(URL)
    const data = await resp.json()
    showDataFront(data);     
}

function showDataFront(data){
    data.map(({title= '', body= ''}) => {
        const contenedor = document.querySelector('#contenedor')
        li.innerHTML = `
              <h4>${title}</h4>
              <p>${body}</p>`
        contenedor.append(li)
    })
}

pedirPosts()
