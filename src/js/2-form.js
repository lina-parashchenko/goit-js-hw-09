const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";


let formData = { email: "", message: "" };


const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || "";
    form.elements.message.value = formData.message || "";
}


const updateStorage = (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};


form.addEventListener("input", updateStorage);


form.addEventListener("submit", (event) => {
    event.preventDefault();

   
    if (!formData.email.trim() || !formData.message.trim()) {
        alert("Fill please all fields");
        return;
    }

    console.log("Form submitted:", formData);


    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData = { email: "", message: "" };
});
