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

}

function addCourse() {
    const courseContainer = document.getElementById("course-container");
    const addedCourse = document.creatElement("div");
    addedCourse.courseList.add("added-class");
    addedCourse.innerHTML = `<input type="text" class="course" name="courses[]" placeholder="Course Name and Description" required>
    <button type="button" class="deleteCourse" onclick="deleteCourse(this)">Delete</button>`;

    courseCountainer.appendChild(addedCourse);
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
    for (const field of formData.entries()) {
        if (Array.isArray(field[1])) {
            for (const value of field[1]) {
                content += `<p><span class="bold">${fiel[0]}:</span> ${value}</p>`;
            }
        } else {
            content += `<p><span class="bold">${field[0]}:</span> ${value}</p>`;
        }
    }

    formContent.innerHTML = content;
}