const message = `HI BABYYY I KNOW YOU'RE NOT OKAYY.\n SO… I just want you to know, im so proud of u.\n\nI hope you know that i'm
always here. You're not alone. you will always have me, baby. please don't give up hm? ayos lang mapagod.\n\nJust to let you know, wife, i wont get tired of being by yourside everyday, with you i feel so complete. ily infinity`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }
    typeWriter();
  }, 600);
}


