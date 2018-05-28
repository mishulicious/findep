const baseUrl = 'http://localhost:3000';


export function getMetas() {
    return fetch(baseUrl + '/metas')
        .then(r => r.json())
        .then(data => data);
}

// Metas
export function addMeta(meta) {
    const formData = new FormData();

    //es como un push para objetos
    for (let k in meta) {
        formData.append(k, meta[k]);
    }

    return fetch(baseUrl + '/metas/new', {
            method: 'post',
            body: formData
        })
        .then(r => r.json())
        .then(meta => meta);
}

export function deleteMeta(id) {
    return fetch(baseUrl + '/metas/borrar/' + id, {
            method: 'delete'
        })
        .then(r => r.json())
        .then(meta => meta)
}

export function editMeta(id, meta) {
    const formData = new FormData()
    for (let k in meta) {
        formData.append(k, meta[k]);
    }
    return fetch(baseUrl + '/metas/edit/' + id, {
            method: 'put',
            body: formData
        })
        .then(r => r.json())
        .then(meta => meta)
}