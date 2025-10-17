document.addEventListener("DOMContentLoaded", () => {
    const profileImage = document.querySelector("#profile-img");
    const nameTag = document.querySelector("#name");

    profileImage.addEventListener("mouseenter", () => {
        nameTag.style.opacity = "1";
    });
        profileImage.addEventListener("mouseleave", () => {
        nameTag.style.opacity = "0";
    });
});