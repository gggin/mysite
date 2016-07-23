
//rsa.keyGeneratorToFiles_('gggin', './pub.txt', './pri.txt');
var pub = window.lop(`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCPWaaUFFrglic3gtsHwIjKIy1F
+ud9O0FXg7u6Fk9B08ktvreyPE+rwss7Fmin0wMEGdJJYI7/YAfe4aDepQfAvkhG
MFxvOCTHmQk4KtEIMS7W5p3IljYCsZyz4qom7LuDEUz9wEtEewhiLOIexhLBhWsH
WBMBqZhXVx+IBnGhEQIDAQAB
-----END PUBLIC KEY-----`);

function ranStr_() {
    return Math.random().toString().substr(2);
}

function en_(data) {
    return window.enp(pub, data);
}


var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:17777/",
    "method": "GET",
    "headers": {
        "cache-control": "no-cache",
        //"postman-token": "cc771975-7f11-1947-485c-724aaf749a3c",
        "content-type": "application/x-www-form-urlencoded",
        "autoken": en_(ranStr_())
    },
    "data": {
        "email": "admin@example.com",
        "password": "admin"
        //"email": "test@example.com",
        //"password": "test"
    }
}


$.ajax(settings).done(function (response) {
    console.log(response);
});


