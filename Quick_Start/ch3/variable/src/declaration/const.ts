const birthMonth = 9;
if (true) {
    const birthMonth = 12;  // <- const는 블록 스코프가 적용됨
}
console.log(birthMonth);

const profile = {
    name: "happy",
    month: birthMonth,
};
// const profile = "happy";      // <- prifile 변수에 대한 재할당 불가능
profile.name = "happy2";    // <- 속성에 대한 할당 가능
profile.month--;

console.log(profile);