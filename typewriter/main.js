const spanText = document.querySelector('.text')
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, natus officia magni incidunt eius quod eaque eveniet harum sequi quisquam rerum totam ab doloremque minus accusamus. Nulla ea perspiciatis ratione! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta facilis velit repellendus ex enim ipsa. Voluptate repellat distinctio quos impedit recusandae magnam accusantium cumque. Odit quas ipsa aperiam dolore rerum praesentium laboriosam quisquam, adipisci consequatur, minima, officiis at? Ipsum, qui assumenda praesentium saepe fugiat delectus placeat accusamus magni ad sequi dolorum sapiente "


let indexText = 0
const time = 40;
const spnCursor = document.querySelector('.cursor')

const addLetter = () => {
    spanText.textContent += text[indexText]
    indexText++;
    if (indexText === text.length) clearInterval(indexTyping)


}

const cursorAnimate = () => {
    spnCursor.classList.toggle('active');
}

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimate, 400);