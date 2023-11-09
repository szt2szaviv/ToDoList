function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var isDarkMode = element.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
}

var storedDarkMode = localStorage.getItem("darkMode");
if (storedDarkMode === "true") {
    document.body.classList.add("dark-mode");
}

var tomb = ["Edzés","Találkozó", "Munka", "Olvasás", "Játék", "Kocsma", "Festés", "Makettezés", "Horgászat", "Programozás", "Tanulás", "Kertészkedés", "Sorozatozás", "Filmezés", "Kutató munka", "Kutya sétáltatás", "Bevásárlás", "Bűvészkedés", "Gyertya mártás", "Bank rablás"]; 

for (var i = 0; i < tomb.length; i++) {

    var contentId = "content" + (i + 1);

    var contentElement = document.getElementById(contentId);
    if (contentElement) {
        contentElement.textContent = tomb[Math.floor(Math.random() * tomb.length)];
    }
}