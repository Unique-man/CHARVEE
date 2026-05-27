const setPreview = (inputId, previewId) => {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);

  input.addEventListener('change', () => {
    const [file] = input.files;
    if (!file) return;
    const url = URL.createObjectURL(file);
    preview.innerHTML = `<img src="${url}" alt="Uploaded preview" />`;
  });
};

setPreview('jobUpload', 'jobPreview');
setPreview('companiesUpload', 'companiesPreview');

const tilts = document.querySelectorAll('.tilt');
for (const item of tilts) {
  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    item.style.transform = `rotateX(${(-y * 10).toFixed(2)}deg) rotateY(${(x * 12).toFixed(2)}deg) translateZ(8px)`;
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = 'rotateX(0) rotateY(0) translateZ(0)';
  });
}
