document.addEventListener("DOMContentLoaded", () => {
    const profileImage = document.querySelector("#profile-img");
    const nameTag = document.querySelector("#name");

    profileImage.addEventListener("mouseneter", () => {
        nameTag.style.opacity = "1";
    });
});