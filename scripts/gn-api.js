fetch("https://api.gn-bot.site/servers").then(res => {
    res.text().then(text => {
        if (navigator.language.includes("ru")) {
            document.getElementById("serversAmount").innerHTML = `Серверов с Good Night: ${text}. Ваш сервер может сделать число больше!`;
        } else {
            document.getElementById("serversAmount").innerHTML = `Good Night has ${text} servers. Yours can make the number bigger!`;
        };
    });
});