document.getElementById('generateButton').addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const count = parseInt(document.getElementById('count').value);

    // 유효성 검사
    if (isNaN(min) || isNaN(max) || isNaN(count)) {
        alert("올바른 숫자를 입력해주세요.");
        return;
    }
    if (min >= max) {
        alert("최소값은 최대값보다 작아야 합니다.");
        return;
    }
    if (count <= 0) {
        alert("뽑을 개수는 1 이상이어야 합니다.");
        return;
    }

    // 랜덤 숫자 생성
    const numbers = [];
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.push(randomNumber);
    }

    // 결과 출력
    document.getElementById('result').textContent = `생성된 숫자: ${numbers.join(', ')}`;
});