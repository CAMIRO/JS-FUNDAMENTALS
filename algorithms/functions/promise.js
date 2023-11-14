// callback

function obtenerDatosCallback(callback) {
    setTimeout(() => {
        callback(null, {data: 'datos importantes!'})
    }, 2000);
}

obtenerDatosCallback((err, data) => console.log(data) )

// promise
function obtenerDatosPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({data: 'datos importantes'})
        }, 2000);
    })
}

obtenerDatosPromise().then(data => console.log(data))

// async await

function obtenerDatosPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({data: 'datos importantes async'})
        }, 2000);
    })
}


async function asyncFun(){
    const data = await obtenerDatosPromise() 
    console.log(data);
}

asyncFun()