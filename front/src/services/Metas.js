const baseUrl = 'http://localhost:3000';


export function getMetas() {
    return fetch(baseUrl + '/metas')
        .then(r => r.json())
        .then(data => data);
}

// Metas
export function addMeta(meta) {

    var formData = new FormData();
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