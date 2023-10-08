function scriptTest() {
    alert("the script is working");
}
function checkForm() {
    const form = document.getElementById("intro-form");
    if (form.checkValidity()) {
        displayForm();
    } else {
        alert("Please Fill Out All of The Fields");
    }
}

function resetForm() {
    const form = document.getElementById("intro-form");
    const courseContainer = document.getElementById("course-container");
    const formContent = document.getElementById("form-content");

    form.reset();
    courseContainer.innerHTML = '';
    form.style.display = "block";
}

function addCourseInput() {
    const courseContainer = document.getElementById("course-container");
    const addedCourse = document.createElement("div");
    addedCourse.classList.add("added-class");
    addedCourse.innerHTML = `<input type="text" class="course" name="courses[]" placeholder="Course Name and Description" required>
    <button type="button" class="deleteCourse" onclick="deleteCourse(this)">Delete</button>`;

    courseContainer.appendChild(addedCourse);
}

function deleteCourse(button) {
    const courseContainer = document.getElementById("course-container");
    const addedCourse = button.parentNode;
    courseContainer.removeChild(addedCourse);
}

function displayForm() {
    const form = document.getElementById("intro-form");
    const formData = new FormData(form);
    const formContent = document.getElementById("form-content");

    let content = "<h2>Your Introduction</h2>";
    formData.forEach((value, key) => {
        if (key === "image") {
            content += loadImage();
        } else if (Array.isArray(value)) {
            content+= `<p><span class="bold">${key}:</span>
            <ul>`
            value.forEach((item) => {
                content += `<li>${item}</li>`;
            });
            content += `</ul>`
        } else {
            content += `<p><strong>${key}:</strong> ${value}</p>`;
        }
    });
    content += `<a type="reset" onclick="resetForm">`;

    form.style.display = "none";
    formContent.innerHTML = content;
}

function loadImage() {
    var image = document.getElementById('intro-image').files[0];
    const imageUrl = URL.createObjectURL(image);

    var text = `<img src="${imageUrl}">`;
    return text;
}