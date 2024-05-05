if(navigator.language.includes('ru')) {
    document.getElementById("caption").innerText = "Дискорд бот";
    document.getElementById("add-button").innerHTML = `<img src="./images/add.svg" alt="Иконка плюса"> Добавить бота`;
    document.getElementById("support-button").innerHTML = `<img src="./images/support.svg" alt="Иконка поддержки"> Поддержка`;
    document.getElementById("about-label").innerText = "О боте";
    document.getElementById("tos-label").innerText = "Условия использования";
    document.getElementById("pp-label").innerText = "Политика конфиденциальности";

    switch(document.title) {
        case "About Good Night": {
            document.getElementById("title-page").innerText = "О боте"
            document.getElementById("title-caption").innerHTML = "<i>Ночной режим - ограничение голосовой или текстовой активности ночью</i>";
            document.getElementById("p1").innerText = "Не каждый сервер имеет модерацию, готовую исполнять свой долг 24/7. Ночью сервера часто остаются беззащитными, и на помощь может прийти Good Night.";
            document.getElementById("li1").innerHTML = `Установить свой часовой пояс, а также время начала и конца ночи с помощью команды <p class="command">/setup</p>.`;
            document.getElementById("li2").innerHTML = `Добавить действия, которые должен исполнять бот ночью, с помощью команды <p class="command">/actions</p> (например, удаление сообщений с вложениями или отключение участников от голосовых каналов).`;
            document.getElementById("li3").innerHTML = `При желании, добавить уведомление о начале и конце ночи с помощью команды <p class="command">/notification</p>.`;
            document.getElementById("p2").innerText = "Дополнительная информация";
            document.getElementById("li4").innerHTML = `Следующей ночью модерация не будет спать? Отмените ограничения на одну ночь с помощью команды <p class="command">/skip</p>.`;
            document.getElementById("li5").innerHTML = `Есть доверенные лица, которых не страшно оставить на ночь без присмотра? Используйте команду <p class="command">/ignore-role</p>.`;
            document.getElementById("p3").innerHTML = `Ботом владеет <a href="https://discord.gg/JTMPbepexz" target="_blank" style="color: orange;">OrangeGround</a>. Не стесняйтесь заходить на этот Дискорд сервер!`;
            break;
        }

        case "Good Night's ToS": {
            document.getElementById("title-page").innerText = "Условия использования";
            document.getElementById("h3-1").innerText = "Принятие условий использования";
            document.getElementById("p1").innerText = `Приглашая дискорд бота Good Night ("бот") на свой сервер, Вы принимаете условия использования ("ToS"). Если Вы с ними не согласны, не используйте бота.`;
            document.getElementById("h3-2").innerText = "Описание сервиса";
            document.getElementById("p2").innerText = `Бот предоставляет автоматический карантин сервера по ночам ("сервис"). Вы указываете ночное время и предпринимаемые действия самостоятельно. Сервис создан для того, чтобы укрепить защиту сервера, пока состав модерации спит, например.`;
            document.getElementById("h3-3").innerText = "Использование сервиса";
            document.getElementById("li1").innerText = "Пока Вы используете бота, Вы должны соблюдать Discord's ToS.";
            document.getElementById("li2").innerText = "Участники с правом управлять сервером могут редактировать настройки бота, используя слеш-команды.";
            document.getElementById("h3-4").innerText = "Политика препятствия злоупотреблениям";
            document.getElementById("p3").innerText = "Бот не должен быть использован для любой незаконной, мошеннической или неэтической деятельности. Перегруз или взлом бота строго запрещены.";
            document.getElementById("h3-5").innerText = "Обслуживание сервиса";
            document.getElementById("p4").innerText = "Бот работает на волонтёрской основе. Это значит, что бот может быть остановлен в любую минуту по причине технических проблем, обновлений и т.п., несмотря на обещания о круглосуточной работе.";
            document.getElementById("p5").innerHTML = `<i>Может быть изменено без уведомлений. Обновлено: 20 апреля, 2024</i>`;
            break;
        }

        case "Good Night's Privacy Policy": {
            document.getElementById("title-page").innerText = "Политика конфиденциальности";
            document.getElementById("p1").innerText = "Дискорд бот Good Night хранит следующие данные:";
            document.getElementById("li1").innerHTML = "<b>ID серверов:</b> для привязки настроек к конкретному серверу";
            document.getElementById("li2").innerHTML = "<b>ID каналов:</b> как направление для уведомлений";
            document.getElementById("li3").innerHTML = "<b>ID ролей:</b> для установки игнорируемой роли";
            document.getElementById("li4").innerHTML = "<b>Картинки:</b> аватар и баннер для установки ночью";
            document.getElementById("p2").innerHTML = `Чтобы очистить данные о вашем сервере свяжитесь с владельцем бота в Дискорде: <a href="https://discord.com/users/853937919601016833" target="_blank">@arseny3</a>`;
            break;
        }

        case "404": {
            document.getElementById("404-title").innerText = "Кажется, Вы потерялись";
            document.getElementById("404-paragraph").innerText = "Используйте кнопки выше, чтобы выбраться отсюда";
            break;
        }

        default: {
            document.getElementById("click-smth").innerText = "Кликните что-нибудь :)";
            document.getElementById("while-here").innerText = "Пока Вы здесь...";
            document.getElementById("upvote-pls").innerText = "Вы знали, что можете проголосовать за бота на мониторингах?";
        }
    }
}
