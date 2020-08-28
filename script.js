let xhr = new XMLHttpRequest();
let url = "https://worldtimeapi.org/api/timezone/";

xhr.open("GET", url);

xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
        let dadosJSONText = xhr.responseText
        let obj = JSON.parse(dadosJSONText)


        for (let i = 0; i <= 12; i++) {
            let xhr2 = new XMLHttpRequest();
            let url2 = "https://worldtimeapi.org/api/timezone/" + obj[Math.floor(Math.random() * (obj.length - 1 + 1))]


            xhr2.open("GET", url2);
            xhr2.onreadystatechange = function () {
                if (xhr2.status == 200 && xhr2.readyState == 4) {
                    let dadosJSONText2 = xhr2.responseText
                    let obj2 = JSON.parse(dadosJSONText2)
                    let datetime = obj2.datetime.split('T')
                    let data = datetime[0]
                    let hour = datetime[1].split('.')[0]


                    document.getElementById(i).innerHTML += obj2.timezone + "<br>" + `${data}` + "<br>" + `${hour}` + "<br><br>"

                }

            }
            xhr2.send()
        }
    }
}

xhr.send()