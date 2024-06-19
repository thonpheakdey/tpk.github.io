function onclicklink() {
    location.href = "../index.html";
}


async function sendMessage() {
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