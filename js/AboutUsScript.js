document.addEventListener("DOMContentLoaded", function () {
    const members = [
      { name: "Siddarth" },
      { name: "Lekh" },
      { name: "Arjun" },
      { name: "Aishwarya" },
      { name: "Adveat" },
      { name: "Rohan" },
      { name: "Riya" },
      { name: "Kriya" },
      { name: "Jeet" },
      { name: "Devansh" },
      { name: "Suyog" },
      { name: "Sahil" },
    ];

    members.forEach((member, index) => {
      const frame = document.getElementById(`member${index + 1}`);
      if (frame) {
        frame.querySelector("h4").innerText = member.name;
      }
    });

    const frames = document.querySelectorAll(".frame");

    frames.forEach((frame) => {
      frame.addEventListener("mouseenter", () => {
        frames.forEach((otherFrame) => {
          if (otherFrame !== frame) {
            otherFrame.classList.add("blur");
          }
        });
      });

      frame.addEventListener("mouseleave", () => {
        frames.forEach((otherFrame) => {
          otherFrame.classList.remove("blur");
        });
      });
    });
  });