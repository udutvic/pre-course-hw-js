let rule = "Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом.";
let length = rule.length;

switch (true) {
  case length < 25:
    console.log("Все таки нет правил без исключения");
    break;
  case length > 25:
    console.log("У меня 100 пудов все получится");
    break;
  case length === 25:
    console.log("50 на 50");
    break;
  default:
    console.log("Что-то пошло не так");
}