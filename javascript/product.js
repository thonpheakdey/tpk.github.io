function onclicklink() {
    location.href = "../index.html";
}

const div1 = document.getElementById('product');
const div2 = document.getElementById('data_send');

function makeDiv1Big() {
    div1.style.flex = '5';
    div2.style.flex = '1';
}

function makeDiv2Big() {
    div1.style.flex = '2';
    div2.style.flex = '2';
}

div1.addEventListener('mousemove', makeDiv1Big);
div2.addEventListener('mousemove', makeDiv2Big);

document.addEventListener('mousemove', (event) => {
    const rect1 = div1.getBoundingClientRect();
    const rect2 = div2.getBoundingClientRect();
    
    if (!(rect1.left <= event.clientX && event.clientX <= rect1.right && rect1.top <= event.clientY && event.clientY <= rect1.bottom) &&
        !(rect2.left <= event.clientX && event.clientX <= rect2.right && rect2.top <= event.clientY && event.clientY <= rect2.bottom)) {
        div1.style.flex = '1';
        div2.style.flex = '1';
    }
});


async function sendMessage() {
    let idchack = ["kraken", "sasquatch", "mothman"];
    for (let g = 0; g < 3; g++) {
        console.log("jof");
    };
    const name = document.getElementById('name').value;
    const quantity = document.getElementById('quantity').value;
    const Checkbox = document.getElementById('checkbox').checked;
    const botToken = '5022182217:AAES4_bpZylodvvY-sOQYx_Qe7e1g6sl4eI';
    const chatId = '-1001750140350';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const message = `Name: ${name}\nQuantity: ${quantity}\nColor: ${Checkbox ? 'Red' : 'No'}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,

        })
    });

    const result = await response.json();
    if (result.ok) {
        send = document.getElementById("send_ok");
        send.innerText = ("Send full")
        send.style.backgroundColor = "#0be50b";
        before.appendChild(send);
        alert('Message sent successfully!');
    } else {
        send = document.getElementById("send_ok");
        send.innerText = ("Don`t Send")
        send.style.backgroundColor = "#e50b0b";
        before.appendChild(send);
        alert('Failed to send message.');
    }
}