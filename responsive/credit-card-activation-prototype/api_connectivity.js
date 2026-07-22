var sendRequest = (url, method, clientId, clientSecret, params, payload) => {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("x-correlation-id", "")
        xhr.setRequestHeader("Accept", "application/json")
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.setRequestHeader("client_id", clientId)
        xhr.setRequestHeader("client_secret", clientSecret)

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                resolve(JSON.parse(xhr.response))
            }
        }

        xhr.send(JSON.stringify(payload));
    });

};