const signUpMobileAnimator = document.querySelector("#signup-mobile-animator") as HTMLButtonElement;
const sectionSignIn = document.querySelector("#section-signIn") as HTMLButtonElement;

signUpMobileAnimator.addEventListener("click", () => {
    sectionSignIn.style.cssText = `
    transform: translateY(-100%);
    transition: ease-in-out 0.7s;
    z-index: 5;
    `
});

const signInMobileAnimator = document.querySelector("#signin-mobile-animator") as HTMLButtonElement;

signInMobileAnimator.addEventListener("click", () => {
    sectionSignIn.style.cssText = `
    transform: translateY(100%);
    transition: ease-in-out 1s;
    z-index: 5;
    `
});

