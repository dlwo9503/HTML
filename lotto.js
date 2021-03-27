const lotto = [];

while (lotto.length < 6) { // 숫자 6개 뽑을때 까지 반복
  const lottoNumber = parseInt(Math.random() * 45 + 1); // Math.random() 은 실수로 출력해줘서 parseInt를 이용해 정수로 변환해줘야 함, 0 부터 출력하니까 +1 해줘서 1부터 출력
  if (lotto.indexOf(lottoNumber) == -1) { // indexOf는 해당 값을 찾지 못하면 -1을 반환
    lotto.push(lottoNumber); // 중복된 값이 없다면 lotto 배열에 push 해주기
  }
}

lotto.sort((a, b) => a - b); // 번호 정렬

for (let i = 0; i < 6; i++) {
  document.write(`<div class="lotto lottoNumber${i + 1}"> ${lotto[i]}</div>`); // 추첨된 번호 출력
}