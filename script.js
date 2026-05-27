const companies = [
  "TCS", "Infosys", "Wipro", "Accenture", "Cognizant", "HCL", "Capgemini", "Tech Mahindra"
];

const track = document.getElementById("companyTicker");
if (track) {
  const content = [...companies, ...companies].map((c) => `🚀 ${c}   `).join("   ");
  track.textContent = content;
}

const card = document.getElementById("tilt-card");
if (card) {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateY(${x * 18}deg) rotateX(${y * -18}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0) rotateX(0)";
  });
}

function bindImagePreview(inputId, previewId) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);
  if (!input || !preview) return;

  input.addEventListener("change", () => {
    const file = input.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    preview.innerHTML = `<img src="${url}" alt="Uploaded preview" />`;
  });
}

bindImagePreview("jobImageInput", "jobPreview");
bindImagePreview("companyImageInput", "companyPreview");

const canvas = document.getElementById("bg-canvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  const stars = Array.from({ length: 80 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    z: Math.random() * 2 + 0.3,
  }));

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((s) => {
      ctx.beginPath();
      ctx.fillStyle = "rgba(140,190,255,0.8)";
      ctx.arc(s.x, s.y, s.z, 0, Math.PI * 2);
      ctx.fill();
      s.y += s.z * 0.35;
      if (s.y > canvas.height) s.y = 0;
    });
    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
}
