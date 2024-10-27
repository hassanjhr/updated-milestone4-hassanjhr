
// Initializing / 

const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumePage = document.getElementById("resumePage") as HTMLElement;
const resumePhoto = document.getElementById("resumePhoto") as HTMLImageElement;
const resumeName = document.getElementById("resumeName") as HTMLHeadingElement;
const resumeEmail = document.getElementById("resumeEmail") as HTMLParagraphElement;
const resumePhone = document.getElementById("resumePhone") as HTMLParagraphElement;
const resumeEducation_uni = document.getElementById("resumeEducation_uni") as HTMLParagraphElement;
const resumeEducation = document.getElementById("resumeEducation") as HTMLParagraphElement;
const resumeWorkExperience = document.getElementById("resumeWorkExperience") as HTMLParagraphElement;
const resumeSkills = document.getElementById("resumeSkills") as HTMLParagraphElement;
const backButton = document.getElementById("backButton") as HTMLButtonElement;
const editButton = document.getElementById("editButton") as HTMLButtonElement;
const resumeContent = document.getElementById("resumeContent") as HTMLDivElement;




form.addEventListener("submit", async (event: Event) => {
    event.preventDefault();




// collect/ store;saved

const name = (document.getElementById("name") as HTMLInputElement).value;
const email = (document.getElementById("email") as HTMLInputElement).value;
const phone = (document.getElementById("phone") as HTMLInputElement).value;
const university = (document.getElementById("university") as HTMLInputElement).value;
const university_degree = (document.getElementById("university_degree") as HTMLInputElement).value;
const degree = (document.getElementById("degree") as HTMLInputElement).value;
const education = (document.getElementById("education") as HTMLInputElement).value;
const workExperience = (document.getElementById("workExperience") as HTMLTextAreaElement).value;
const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
const photoInput = document.getElementById("photo") as HTMLInputElement;

const photoFile = photoInput.files ? photoInput.files[0] : null;
let photoBase64 = '';

if (photoFile) {
    photoBase64 = await fileToBase64(photoFile);
    // Store the photo in localStorage instead of passing it in the URL
    localStorage.setItem("resumePhoto", photoBase64);
    resumePhoto.src = photoBase64;
}

// Generate /

document.querySelector(".container")?.classList.add("hidden");
    resumePage.classList.remove("hidden");



// Providing Data
resumeName.textContent = name;
resumeEmail.textContent = `Email: ${email}`;
resumePhone.textContent = `Phone: ${phone}`;
resumeEducation_uni.textContent = `${university_degree} from ${university}`;
resumeEducation.textContent = `${degree} from ${education}`;
resumeWorkExperience.textContent = workExperience;
resumeSkills.textContent = skills;


})






// -------------------------------------------
function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);


    });
}


// Edited Button
editButton.addEventListener("click", () => {
    // back with current resume data for editing
    updateFormFromResume();

    // Show form back to editing
    document.querySelector(".container")?.classList.remove("hidden");
    resumePage.classList.add("hidden");
});
// Edited Button function
function updateFormFromResume() {
    const [degree, education] = resumeEducation.textContent?.split("from") || '';
    (document.getElementById("name") as HTMLInputElement).value = resumeName.textContent || '';
    (document.getElementById("email") as HTMLInputElement).value = resumeEmail.textContent?.replace('Email: ', '') || '';
    (document.getElementById("phone") as HTMLInputElement).value = resumePhone.textContent?.replace('Phone: ', '') || '';
    (document.getElementById("degree") as HTMLInputElement).value = degree || '';
    (document.getElementById("education") as HTMLInputElement).value = education || '';
    (document.getElementById("workExperience") as HTMLTextAreaElement).value = resumeWorkExperience.textContent || '';
    (document.getElementById("skills") as HTMLTextAreaElement).value = resumeSkills.textContent || '';
}




