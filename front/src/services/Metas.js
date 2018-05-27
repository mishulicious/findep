const baseUrl = 'http://localhost:3000';


export function getMetas() {
    return fetch(baseUrl + '/metas')
        .then(r => r.json())
        .then(data => data);
}

// Metas
export function addMeta(meta) {

    var formData = new FormData();
    for (let k in post) {
        formData.append(k, post[k]);
    }

    return fetch(baseUrl + '/metas/new', {
            method: 'post',
            body: formData
        })
        .then(r => r.json())
        .then(post => post);
}