function userDialog() {
    let playerName = prompt("Напишіть ваше ім’я або нік:", "Гравець");

    if (playerName === null || playerName.trim() === "") {
        alert("Добре, тоді продовжимо без імені.");
        playerName = "Гравець";
    }

    let mood = "";
    let attempts = 0;

    while (mood.trim() === "" && attempts < 3) {
        mood = prompt(
            "Який формат гри вам ближчий: змагальний, сюжетний чи творчий?",
            ""
        ) || "";
        attempts++;
    }

    if (mood.trim() === "") {
        mood = "сюжетний";
    }

    let freeHours;
    while (true) {
        let inputValue = prompt(
            "Скільки годин ви готові приділити грі сьогодні? Введіть число від 1 до 12.",
            "2"
        );

        if (inputValue === null) {
            alert("Діалог завершено.");
            return;
        }

        freeHours = Number(inputValue);

        if (!isNaN(freeHours) && freeHours >= 1 && freeHours <= 12) {
            break;
        }

        alert("Будь ласка, введіть коректне число від 1 до 12.");
    }

    let recommendation = "";

    if (mood.toLowerCase() === "змагальний") {
        recommendation = "Спробуйте CS2 — це хороший вибір для динамічної командної гри.";
    } else if (mood.toLowerCase() === "творчий") {
        recommendation = "Вам може підійти Minecraft — для будівництва, дослідження і власних ідей.";
    } else if (mood.toLowerCase() === "сюжетний" || freeHours >= 3) {
        recommendation = "Зверніть увагу на GTA 6 — вона добре підходить для довшої ігрової сесії.";
    } else {
        recommendation = "Для короткої сесії краще обрати щось легке для швидкого старту.";
    }

    alert(
        "Гравець: " + playerName +
        "\nФормат гри: " + mood +
        "\nВільний час: " + freeHours + " год." +
        "\nРекомендація: " + recommendation
    );
}

function showDeveloperInfo(surname, name, position = "веброзробник") {
    alert("Розробник сторінки: " + surname + " " + name + "\nПосада: " + position);
}

function compareStrings(str1, str2) {
    if (str1.length > str2.length) {
        alert("Більший рядок: " + str1);
    } else if (str2.length > str1.length) {
        alert("Більший рядок: " + str2);
    } else {
        alert("Рядки однакові за довжиною.");
    }
}

function changeBackgroundFor30Seconds() {
    const oldBackground = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#fff4cc";

    alert("Режим фокусу увімкнено на 30 секунд.");

    setTimeout(function () {
        document.body.style.backgroundColor = oldBackground;
        alert("Звичайний фон сторінки відновлено.");
    }, 30000);
}

function goToGamesPage() {
    location.href = "games.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const mainTitle = document.getElementById("mainTitle");
    if (mainTitle) {
        mainTitle.innerHTML = "🎮 " + mainTitle.innerHTML;
    }

    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function (link) {
        link.textContent = link.textContent.trim();
    });

    const authorBox = document.getElementById("authorBox");
    if (authorBox) {
        authorBox.textContent =
            "Сайт створив Волошин Владислав. Тут зібрано короткі поради, добірки ігор і корисна інформація для гравців.";
    }

    const textNodeExample = document.getElementById("commentText");
    if (textNodeExample && textNodeExample.firstChild) {
        console.log("nodeValue:", textNodeExample.firstChild.nodeValue);
        console.log("data:", textNodeExample.firstChild.data);
    }

    const htmlExample = document.getElementById("htmlExample");
    if (htmlExample) {
        console.log("outerHTML:", htmlExample.outerHTML);
    }

    const dynamicBlock = document.getElementById("dynamicBlock");
    if (dynamicBlock) {
        const title = document.createElement("h3");
        const titleText = document.createTextNode("Актуальні поради для комфортної гри");
        title.append(titleText);

        const firstParagraph = document.createElement("p");
        firstParagraph.append(
            "Ми додали короткі рекомендації, які допоможуть швидше обрати гру та налаштувати зручний формат проходження."
        );

        dynamicBlock.prepend(title);
        dynamicBlock.append(firstParagraph);

        const extraText = document.createTextNode(
            " Якщо ви ще не визначилися, з чого почати, перегляньте добірку популярних ігор та жанрів."
        );
        firstParagraph.append(extraText);

        const afterBlock = document.createElement("p");
        afterBlock.className = "box";
        afterBlock.append(
            "Також зверніть увагу на інші розділи сайту — там зібрано добірки ігор, жанри та поради щодо вибору комплектуючих."
        );
        dynamicBlock.after(afterBlock);

        const replaceElement = document.getElementById("replaceMe");
        if (replaceElement) {
            const newElement = document.createElement("p");
            newElement.className = "box";
            newElement.append(
                "Оновлено: тепер на сайті є більше корисної інформації для тих, хто хоче підібрати гру під свій настрій і стиль."
            );
            replaceElement.replaceWith(newElement);
        }

        const removeElement = document.getElementById("removeMe");
        if (removeElement) {
            removeElement.remove();
        }
    }
});