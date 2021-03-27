const drone = document.getElementById("drone");
const spit = document.getElementById("spit");
const hpBar = document.getElementById("hpBar");
const bunker = document.getElementById("bunker"); // 값을 받아서 다시 저장해주고
let hp = 30; // 벙커 체력 설정

drone.addEventListener("click", function () { // 클릭시 이벤트 발생
  spit.animate(
    [
      {
        opacity: "1",
        transform: "translate(420px)",
      },
    ],
    600
  );
  setTimeout(function () {
    if (hp == 0) {
      return hp;
    } else {
      hp = hp - 1;
    }
    hpBar.innerText = `HP : ${hp}`;

    if (hp == 0) {
      bunker.style.opacity = 0;
    }
  }, 600);
});