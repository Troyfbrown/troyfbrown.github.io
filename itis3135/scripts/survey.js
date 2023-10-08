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
    let coursesListOpened = false;
    formData.forEach((value, key) => {
        switch (key) {
            case "name":
                content += `<h3>${value}'s Introduction</h3>`;
                break;
            case "mascot":
                content += `<p></span class="bold">Mascot:</span> ${value}</p>`;
                break;
            case "intro-image":
                var text = loadImage();
                content += `
                <div class="loadImage">
                    ${text}
                </div> `
                break;
            case "image-cap":
                content += `<p><em>${value}</em></p>`;
                break;
            case "personal-back":
                content += `<ul>
                <li></span class="bold">Personal Background:</span> ${value}</li>`;
                break;
            case "professional-back":
                content += `<li><span class="bold">Professional Background:</span> ${value}</li>`;
                break;
            case "academic-back":
                content += `<li><span class="bold">Academic Background:</span> ${value}</li>`;
                break;
            case "subject-back":
                content += `<li><span class="bold">Background in This Subject:</span> ${value}</li>`;
                break;
            case "primary-plat":
                content += `<li><span class="bold">Primary Computer Platform</span> ${value}</li>`;
                if (coursesListOpened) {
                    content += `
                        </ul>
                    </li>`;
                    coursesListOpened = false;
                }
                break;
            case "courses[]":
                if (!coursesListOpened) {
                    content += `
                    <li><span class="bold">Courses:</span>
                        <ul>`;
                    coursesListOpened = true;
                }
                content += `<li>${value}</li>`;
                break;
            case "funny-thing":
                if (coursesListOpened) {
                    content += `
                        </ul>
                    </li>`;
                    coursesListOpened = false;
                }
                content += `<li><span class="bold">Funny/Interesting Item to Remember me by:</span> ${value}</li>`;
                break;
            case "anything":
                content += `<li><span class="bold">I'd also like to Share:</span> ${value}</li>
                </ul>`;
                break;
            default:
                content += ``;
                break;
        }
    });
    content += `<button type="reset" id="reset2" onclick="resetForm()">Reset</button>`;

    form.style.display = "none";
    formContent.innerHTML = content;
}

function loadImage() {
    var image = document.getElementById('intro-image').files[0];
    const imageUrl = URL.createObjectURL(image);

    var text = `<img src="${imageUrl}">`;
    return text;
}