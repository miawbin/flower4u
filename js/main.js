onload = () => {
  setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const text = "I LOVE YOU ARI ❤️";
    const titleElement = document.getElementById("title");
    let index = 0;

    titleElement.textContent = "";

    function typing() {
      if (index < text.length) {
        titleElement.textContent += text[index];
        index++;
        setTimeout(typing, 120);
      }
    }

    typing();
  }, 800);
};