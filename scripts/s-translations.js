const realBtn = document.querySelector("#real-btn");
const customBtn = document.querySelector(".custom-btn");
const sendBtn = document.querySelector(".send-btn");
const uploadFile = document.querySelector(".upload-file");
const body = document.querySelector("body");
const fileSentModal = document.querySelector(".file-sent-modal");
const closeModal = document.querySelector(".close-modal");
const modalBackdrop = document.querySelector(".modal-backdrop");

uploadFile.addEventListener("click", function () {
  realBtn.click();
});

realBtn.addEventListener("change", () => {
  if (realBtn.value) {
    sendBtn.style.display = "block";
    customBtn.innerHTML = realBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
  }
});

sendBtn.addEventListener("click", () => {
  fileSentModal.style.display = "block";
  modalBackdrop.style.display = "block";
});

closeModal.addEventListener("click", () => {
  fileSentModal.style.display = "none";
  modalBackdrop.style.display = "none";
});

modalBackdrop.addEventListener("click", () => {
  fileSentModal.style.display = "none";
  modalBackdrop.style.display = "none";
});

// if ((fileSentModal.style.display = "block")) {
//   body.addEventListener("click", () => {
//     fileSentModal.style.display = "none";
//   });
// }
