const reveals = document.querySelectorAll(".reveal");

reveals.forEach((element, index) => {
  const localIndex = index % 5;
  element.style.setProperty("--delay", `${localIndex * 180}ms`);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.3,
    rootMargin: "0px 0px -8% 0px",
  }
);

reveals.forEach((element) => observer.observe(element));
