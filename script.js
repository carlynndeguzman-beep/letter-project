const message = `HI BABYY I KNOW YOU'RE NOT OKAY.\n SO… I just want you to know, im so proud of u.\n\nI hope you know that i'm
always here. you will always have me, baby. please don't give up hm? ayos lang mapagod.\n\nWife, i wont get tired of being by yourside lagi, with u i feel so complete. ily infinity`;

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




