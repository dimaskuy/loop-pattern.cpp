import patterns from "./patterns.js";

console.log("-- Pengulangan dan Pengkondisan Bersarang");

const code = document.getElementById("code");
const container = document.querySelector(".code-container");

const btns = document.querySelectorAll(".btnCode");
const polaDesc = document.querySelectorAll(".pola-desc");
const preview = document.querySelector(".text-preview");

polaDesc.forEach((desc, i) => {
    // desc.textContent = patterns
    const textRes = desc.previousSibling.textContent.toLowerCase().replace(/[^a-z0-9]/g, "");
    desc.textContent = patterns[textRes][0];
    console.log(textRes);
});

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        container.scrollIntoView({
            behavior: "smooth",
        });
        const target = e.target.dataset.runto;
        code.textContent = patterns[target][1];
        preview.textContent = patterns[target][0];
        console.log("MENJALANKAN:", patterns[target][0]);

        Prism.highlightElement(code);
    });
});

// == JAVASCRIPT TESTING ==
// // Pola 1
// const coba0 = () => {
//     let item = "";
//     for (let i = 0; i < 10; i++) {
//         for (let s = 0; s < 5; s++) {
//             item += "*";
//         }
//         item += "\n";
//     }
//     console.log(item);
//     code.innerHTML = `pola1`;

//     Prism.highlightElement(code);
// };

// // Pola 2
// const coba1 = () => {
//     let item = "";
//     for (let i = 0; i < 10; i++) {
//         for (let s = 0; s <= i; s++) {
//             item += "*";
//         }
//         item += "\n";
//     }
//     console.log(item);
//     code.innerHTML = pola2;

//     Prism.highlightElement(code);
// };

// // Pola 3
// const coba2 = () => {
//     let item = "";
//     for (let i = 10; i >= 0; i--) {
//         for (let s = 0; s < i; s++) {
//             item += "*";
//         }
//         item += "\n";
//     }
//     console.log(item);
//     code.innerHTML = pola3;

//
// };

// // Pola 4
// const coba3 = () => {
//     let item = "";
//     for (let i = 0; i <= 10; i++) {
//         for (let s = 0; s <= i; s++) {
//             item += "*";
//         }
//         item += "\n";
//     }
//     for (let i = 10; i >= 0; i--) {
//         for (let s = 0; s <= i; s++) {
//             item += "*";
//         }
//         item += "\n";
//     }
//     console.log(item);
//     code.innerHTML = pola4;

//     Prism.highlightElement(code);
// };

// // Pola 5
// const coba4 = () => {
//     let item = "";
//     for (let i = 1; i <= 6; i++) {
//         for (let j = 0; j < i; j++) {
//             item += i;
//         }
//         item += "\n";
//     }
//     console.log(item);
//     code.innerHTML = pola5;

//     Prism.highlightElement(code);
// };

// // Pola 6
// const coba5 = () => {
//     let item = "";
//     for (let i = 1; i <= 6; i++) {
//         for (let j = 1; j <= i; j++) {
//             item += j;
//         }
//         item += "\n";
//     }
//     console.log(item);
//     code.innerHTML = pola6;

//     Prism.highlightElement(code);
// };

// // Pola 7
// const coba6 = () => {
//     let item = "";
//     for (let i = 0; i <= 10; i++) {
//         item += " ".repeat(10 - i) + "*".repeat(i + 1) + "\n";
//     }
//     for (let i = 10; i >= 0; i--) {
//         item += " ".repeat(10 - i) + "*".repeat(i + 1) + "\n";
//     }
//     console.log(item);
//     code.innerHTML = pola7;

//     Prism.highlightElement(code);
// };

// // Pola 8
// const coba7 = () => {
//     let item = "";
//     for (let i = 1; i < 10; i++) {
//         for (let j = 1; j < 10; j++) {
//             if (i <= 5 && j >= 5 - (i - 1) && j <= 5 + (i - 1)) {
//                 item += "*";
//             } else if (i >= 5 && j > i - 5 && j < 10 - (i - 5)) {
//                 item += "*";
//             } else {
//                 item += " ";
//             }
//         }
//         item += "\n";
//     }
//     console.log(item);
//     code.innerHTML = pola8;
//     Prism.highlightElement(code);
// };

// // Pola 9
// const coba8 = () => {
//     let item = "";
//     for (let i = 0; i < 10; i++) {
//         item += " ".repeat(i) + "*".repeat((10 - i) * 2 - 1) + "\n";
//     }
//     console.log(item);
//     code.innerHTML = pola9;
//     Prism.highlightElement(code);
// };

// // Pola 10
// const coba9 = () => {
//     let item = "";
//     for (let i = 0; i < 10; i++) {
//         item += (i % 2 === 0 ? "# ".repeat(6) : " #".repeat(6)) + "\n";
//     }
//     console.log(item);
//     code.innerHTML = pola10;
//     Prism.highlightElement(code);
// };
