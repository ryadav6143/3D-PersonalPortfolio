function animateOnPC() {
  gsap.from(".navbar-nav", {
    opacity: 0,
    duration: 2,
    delay: 3,
    x: 1000,
  });
  gsap.from(".navbar-brand", {
    opacity: 1,
    scale: 23,
    duration: 2,
    delay: 3,
    x: 1940,
    y: 500,
  });
  gsap.from(".ribbon", {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: 4,
  });
  gsap.from(".modal-img", {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: 4.5,
  });
  gsap.registerPlugin(ScrollTrigger);

  const animateRows = (element) => {
    gsap.from(element, {
      opacity: 0,
      y: 80,
      duration: 0.5,
      delay: 0.5,
      scrollTrigger: {
        trigger: element,
        start: "bottom bottom-=-40px",
        toggleActions: "play none none reverse",
      },
    });
  };

  animateRows(".about-row");
  animateRows(".about-row-1");
  animateRows(".about-row-2");
  animateRows(".about-row-3");
  animateRows(".about-row-4");

  const animateContact = (element) => {
    gsap.from(element, {
      opacity: 0,
      y: 80,
      duration: 0.5,

      scrollTrigger: {
        trigger: element,
        start: "bottom bottom-=-10px",
        toggleActions: "play none none reverse",
      },
    });
  };
  animateContact(".contact");
  animateContact(".work-row");
  animateContact(".work-row-1");
  animateContact(".work-row-2");
  animateContact(".work-row-3");
  animateContact(".work-row-4");
  gsap.from(".skill-1", {
    opacity: 0,
    x: 0,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".skill-1",
      start: "bottom bottom-=30px",
    },
  });
  gsap.from(".skill-2", {
    opacity: 0,
    x: -100,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".skill-2",
      start: "bottom bottom-=30px",
    },
  });
  gsap.from(".skill-3", {
    opacity: 0,
    x: -200,
    duration: 0.5,
    delay: 1,
    scrollTrigger: {
      trigger: ".skill-3",
      start: "bottom bottom-=30px",
    },
  });
  gsap.from(".skill-4", {
    opacity: 0,
    x: -200,
    duration: 0.5,
    delay: 1.5,
    scrollTrigger: {
      trigger: ".skill-4",
      start: "bottom bottom-=30px",
    },
  });

  const animateSkillsRow2 = (element, timedelay) => {
    gsap.from(element, {
      opacity: 0,
      y: -150,
      duration: 0.5,
      delay: timedelay,
      scrollTrigger: {
        trigger: ".skill-8",
        start: "bottom bottom-=30px",
      },
    });
  };
  animateSkillsRow2(".skill-5", "2");
  animateSkillsRow2(".skill-6", "2.5");
  animateSkillsRow2(".skill-7", "3");
  animateSkillsRow2(".skill-8", "3.5");
}

if (window.matchMedia("(min-width: 1024px)").matches) {
  animateOnPC();
}

//--------------------------------------------------------

let hoverInProgress = false;
let words = [
  ["A", "B", "O", "U", "T"],
  ["W", "O", "R", "K", "S"],
  ["S", "E", "R", "V", "I", "C", "E", "S"],
  ["C", "O", "N", "T", "A", "C", "T"],
  ["I", "N", "S", "T", "A", "G", "R", "A", "M"],
  ["L", "I", "N", "K", "E", "D", "I", "N"],
  // ["T", "E", "L", "E", "G", "R", "A", "M"],
  ["G","I","T","H","U","B"]
];

function rearrangeLetters(element) {
  if (!hoverInProgress) {
    const spans = element.querySelectorAll("span");
    const index = Array.from(
      document.querySelectorAll(".hover-effect")
    ).indexOf(element);

    hoverInProgress = true;

    for (let i = 0; i < words[index].length; i++) {
      setTimeout(() => {
        rotateLetters(spans, words[index]);
      }, 70 * i);
    }

    setTimeout(() => {
      resetLetters(spans, words[index]);
      hoverInProgress = false;
    }, 70 * words[index].length);
  }
}

function rotateLetters(spans, word) {
  let temp = word[word.length - 1];
  for (let i = word.length - 1; i > 0; i--) {
    word[i] = word[i - 1];
    spans[i].textContent = word[i];
  }
  word[0] = temp;
  spans[0].textContent = temp;
}

function resetLetters(spans, word) {
  for (let i = 0; i < spans.length; i++) {
    spans[i].textContent = word[i];
  }
}

const leftHeadings = document.querySelectorAll(".left-heading");

leftHeadings.forEach((leftHeading) => {
  leftHeading.addEventListener("mouseenter", () => {
    leftHeadings.forEach((item) => {
      if (item !== leftHeading) {
        item.style.filter = "blur(20px)";
      }
    });
  });

  leftHeading.addEventListener("mouseleave", () => {
    leftHeadings.forEach((item) => {
      item.style.filter = "none";
    });
  });
});

document.querySelectorAll(".work-heading").forEach((workHeading) => {
  workHeading.addEventListener("mouseenter", () => {
    document.querySelectorAll(".work-heading").forEach((otherWorkHeading) => {
      if (otherWorkHeading !== workHeading) {
        otherWorkHeading.style.filter = "blur(20px)";
      }
    });
  });

  workHeading.addEventListener("mouseleave", () => {
    document.querySelectorAll(".work-heading").forEach((otherWorkHeading) => {
      otherWorkHeading.style.filter = "blur(0)";
    });
  });
});
const isDesktop = () => {
  return window.innerWidth >= 1024;
};

if (isDesktop()) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Call the scrollToTop function after a short delay on page load
  window.addEventListener("load", () => {
    setTimeout(scrollToTop, 100); // Adjust delay as needed (100 milliseconds here)
  });

  // Function to prevent scrolling for the first 3 seconds after page load
  const preventScroll = () => {
    // Disable scrolling by setting overflow to hidden
    document.body.style.overflow = "hidden";

    // After 3 seconds, enable scrolling by setting overflow back to auto
    setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 3000); // 3000 milliseconds = 3 seconds
  };

  // Call the preventScroll function when the page is loaded
  window.addEventListener("load", preventScroll);
}

gsap.registerPlugin(ScrollTrigger);
gsap.to("progress", {
  value: 100,
  ease: "none",
  scrollTrigger: { scrub: 0.3 },
});
