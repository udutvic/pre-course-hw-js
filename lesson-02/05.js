let passport = {
    name: "Petr",
    surname: "Petrov",
};

let passportCopy = { ...passport };

passportCopy.name = "Ivan";

console.log("Оригинальный объект passport:", passport);
console.log("Копия объекта passportCopy:", passportCopy);