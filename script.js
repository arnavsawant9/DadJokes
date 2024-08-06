const para = document.querySelector(".para");

fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jsonData =>{
        const jsonText = jsonData.attachments[0].text
        para.innerText = jsonText;
    })