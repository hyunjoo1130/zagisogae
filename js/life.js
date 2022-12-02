// 화살표 키를 클릭하면
// 다음 li가 디스플레이 블록이 되고
// 현재 li가 디스플레이 논이 될 수 있도록

const arrowRight1 = document.getElementsByClassName("arrow-right")[0];
const arrowRight2 = document.getElementsByClassName("arrow-right")[1];
const arrowRight3 = document.getElementsByClassName("arrow-right")[2];
const arrowRight4 = document.getElementsByClassName("arrow-right")[3];

const arrowLeft1 = document.getElementsByClassName("arrow-left")[0];
const arrowLeft2 = document.getElementsByClassName("arrow-left")[1];
const arrowLeft3 = document.getElementsByClassName("arrow-left")[2];
const arrowLeft4 = document.getElementsByClassName("arrow-left")[3];

const firstLi = document.getElementsByTagName("li")[0];
const secondLi = document.getElementsByTagName("li")[1];
const thirdLi = document.getElementsByTagName("li")[2];
const fourthLi = document.getElementsByTagName("li")[3];
const fifthLi = document.getElementsByTagName("li")[4];

arrowRight1.addEventListener("click", function () {
  firstLi.style.display = "none";
  secondLi.style.display = "block";
});

arrowRight2.addEventListener("click", function () {
  firstLi.style.display = "none";
  secondLi.style.display = "none";
  thirdLi.style.display = "block";
});

arrowRight3.addEventListener("click", function () {
  firstLi.style.display = "none";
  secondLi.style.display = "none";
  thirdLi.style.display = "none";
  fourthLi.style.display = "block";
});

arrowRight4.addEventListener("click", function () {
  firstLi.style.display = "none";
  secondLi.style.display = "none";
  thirdLi.style.display = "none";
  fourthLi.style.display = "none";
  fifthLi.style.display = "block";
});

arrowLeft1.addEventListener("click", function () {
  firstLi.style.display = "block";
  secondLi.style.display = "none";
});

arrowLeft2.addEventListener("click", function () {
  firstLi.style.display = "none";
  secondLi.style.display = "block";
  thirdLi.style.display = "none";
});

arrowLeft3.addEventListener("click", function () {
  firstLi.style.display = "none";
  secondLi.style.display = "none";
  thirdLi.style.display = "block";
  fourthLi.style.display = "none";
});

arrowLeft4.addEventListener("click", function () {
  firstLi.style.display = "none";
  secondLi.style.display = "none";
  thirdLi.style.display = "none";
  fourthLi.style.display = "block";
  fifthLi.style.display = "none";
});
