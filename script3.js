    let xhr = new XMLHttpRequest();
    let url = "https://worldtimeapi.org/api/ip";

    xhr.open("GET", url);

    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            let dadosJSONText = xhr.responseText
            let obj = JSON.parse(dadosJSONText)
            let datetime = obj.datetime.split('T')
            let data = new Date(datetime).toLocaleDateString()
            let hour = new Date(datetime).toLocaleTimeString()
        
           document.getElementById('ip').innerHTML += `Olá, seu IP é o ${obj.client_ip}.<br><br>
            Você está localizado em  ${obj.timezone}. <br><br>Data atual:${data} <br>Hora atual:${hour} `

           console.log(obj)
        }

    }


    xhr.send()

