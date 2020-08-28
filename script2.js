function loadTimezone() {
    let xhr = new XMLHttpRequest();
    let continente = document.getElementById('timezone').value
    let url = "https://worldtimeapi.org/api/timezone/" + continente;

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            let dadosJSONText = xhr.responseText
            let obj = JSON.parse(dadosJSONText)

            for (let i = 0; i < obj.length; i++) {

                document.getElementById('area').innerHTML += "<option value=" + obj[i] + ">" + obj[i] + "</option>"

            }

        }

    }


    xhr.send()

}

function loadTime() {
    let xhr2 = new XMLHttpRequest();
    let area = document.getElementById('area').value;
    let url2 = "https://worldtimeapi.org/api/timezone/"+ area;

    xhr2.open("GET", url2);

    xhr2.onreadystatechange = function () {
        if (xhr2.status == 200 && xhr2.readyState == 4) {
            let dadosJSONText = xhr2.responseText
            let obj3 = JSON.parse(dadosJSONText)
            let datetime = obj3.datetime.split('T')
            let data = datetime[0]
            let hour = datetime[1].split('.')[0]

            document.getElementById('location').innerHTML += "<br><br>" + obj3.timezone + "<br>" + `${data}` + "<br>" + `${hour}` + "<br><br>"

            
        }

    }


    xhr2.send()

}

