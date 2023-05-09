async function api(uri, method, data) {
    const url = `https://school-platform-api.onrender.com/${uri}`
    const header = {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
    }
    const body = JSON.stringify(data)
    if (method == 'get'){
        return await ( await fetch(url, {headers:header})).json()
    }

    return await (await fetch(url, {body:body, headers:header, method:method})).json()
}

export {api}