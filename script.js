const message = `HI BABYYY I KNOW YOU'RE NOT OKAYY.\n SO if you do… I just want you to know, I think about you EVERYTIME.\n\nI hope you know that i'm
always here. You're not alone. you will always have me in every universe. please don't give up hm? papakasalan pa kita. its alright to feel tired baby but dont give up.\n\nJust to let you know, wife, i wont get tired of being by yourside everyday, with you i feel so complete. ako nagsasabi na hindi totoo sinasabi nila.\n\nAnyway, I hope you're doing okay, even though ganon sinasabi nila sayo, i love you to the moon and back wife.`;

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

