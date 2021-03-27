function counter() {
    let formTextContent = document.getElementById("formTextarea").value;
    if (formTextContent.length > 200) {
      formTextContent = formTextContent.substring(0, 200); // substring 이용해서 문자열 잘라주기, 범위 (0 ~ 200)
      document.getElementById("formTextarea").value = formTextContent;
    }
    document.getElementById(
      "textCount"
    ).innerHTML = `(${formTextContent.length}/200)`;
  }
  counter();