function animateOnPC() {
  gsap.from(".navbar-nav", {
    opacity: 0,
    duration: 2,
    delay: 3,
    x: 1000,
  });
  gsap.from(".navbar-brand", {
    opacity: 1,
    scale: 20,
    duration: 2,
    delay: 3,
    x: 2200,
    y: 400,
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
      y: 50,
      duration: 2,
      delay: 0.5,
      scrollTrigger: {
        trigger: element,
        start: "bottom bottom-=-50px",
        // toggleActions: "play none none reverse",
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
      y: 50,
      duration: 2,

      scrollTrigger: {
        trigger: element,
        start: "bottom bottom-=-10px",
        // toggleActions: "play none none reverse",
      },
    });
  };
  animateContact(".contact");
  animateContact(".work-row");
  animateContact(".work-row-1");
  animateContact(".work-row-2");
  animateContact(".work-row-3");
  animateContact(".work-row-4");
}

if (window.matchMedia("(min-width: 1024px)").matches) {
  animateOnPC();
}

//--------------------------------------------------------

let hoverInProgress = false;

function rearrangeLetters() {
  if (!hoverInProgress) {
    const container = document.querySelector(".hover-effect");
    const spans = container.querySelectorAll("span");
    const letters = ["A", "B", "O", "U", "T"];
    let delay = 60; // Adjust this value to change the speed (in milliseconds)
    hoverInProgress = true;
    for (let i = 0; i < spans.length; i++) {
      setTimeout(() => {
        spans[i].textContent = letters[(i + 1) % 5];
      }, delay * i);
    }
    setTimeout(() => {
      for (let i = 0; i < spans.length; i++) {
        spans[i].textContent = letters[i];
      }
      hoverInProgress = false;
    }, delay * spans.length);
  }
}
function rearrangeWork() {
  if (!hoverInProgress) {
    const container = document.querySelector(".hover-work");
    const spans = container.querySelectorAll("span");
    const letters = ["W", "O", "R", "K", "S"];
    let delay = 80;
    hoverInProgress = true;
    for (let i = 0; i < spans.length; i++) {
      setTimeout(() => {
        spans[i].textContent = letters[(i + 1) % 5];
      }, delay * i);
    }
    setTimeout(() => {
      for (let i = 0; i < spans.length; i++) {
        spans[i].textContent = letters[i];
      }
      hoverInProgress = false;
    }, delay * spans.length);
  }
}
function rearrangeServices() {
  if (!hoverInProgress) {
    const container = document.querySelector(".hover-services");
    const spans = container.querySelectorAll("span");
    const letters = ["S", "E", "R", "V", "I", "C", "E", "S"];
    let delay = 80;
    hoverInProgress = true;
    for (let i = 0; i < spans.length; i++) {
      setTimeout(() => {
        spans[i].textContent = letters[(i + 1) % 5];
      }, delay * i);
    }
    setTimeout(() => {
      for (let i = 0; i < spans.length; i++) {
        spans[i].textContent = letters[i];
      }
      hoverInProgress = false;
    }, delay * spans.length);
  }
}
function rearrangeContact() {
  if (!hoverInProgress) {
    const container = document.querySelector(".hover-contact");
    const spans = container.querySelectorAll("span");
    const letters = ["C", "O", "N", "T", "A", "C", "T"];
    let delay = 80;
    hoverInProgress = true;
    for (let i = 0; i < spans.length; i++) {
      setTimeout(() => {
        spans[i].textContent = letters[(i + 1) % 5];
      }, delay * i);
    }
    setTimeout(() => {
      for (let i = 0; i < spans.length; i++) {
        spans[i].textContent = letters[i];
      }
      hoverInProgress = false;
    }, delay * spans.length);
  }
}

function rearrangeTwitter() {
  if (!hoverInProgress) {
    const container = document.querySelector(".hover-twitter");
    const spans = container.querySelectorAll("span");
    const letters = ["T", "W", "I", "T", "T", "E", "R"];
    let delay = 60;
    hoverInProgress = true;
    for (let i = 0; i < spans.length; i++) {
      setTimeout(() => {
        spans[i].textContent = letters[(i + 1) % 5];
      }, delay * i);
    }
    setTimeout(() => {
      for (let i = 0; i < spans.length; i++) {
        spans[i].textContent = letters[i];
      }
      hoverInProgress = false;
    }, delay * spans.length);
  }
}

function rearrangeInstagram() {
  if (!hoverInProgress) {
    const container = document.querySelector(".hover-insta");
    const spans = container.querySelectorAll("span");
    const letters = ["I", "N", "S", "T", "A", "G", "R", "A", "M"];
    let delay = 60;
    hoverInProgress = true;
    for (let i = 0; i < spans.length; i++) {
      setTimeout(() => {
        spans[i].textContent = letters[(i + 1) % 5];
      }, delay * i);
    }
    setTimeout(() => {
      for (let i = 0; i < spans.length; i++) {
        spans[i].textContent = letters[i];
      }
      hoverInProgress = false;
    }, delay * spans.length);
  }
}
function rearrangeLinkedin() {
  if (!hoverInProgress) {
    const container = document.querySelector(".hover-linkedin");
    const spans = container.querySelectorAll("span");
    const letters = ["L", "I", "N", "K", "E", "D", "I", "N"];
    let delay = 60;
    hoverInProgress = true;
    for (let i = 0; i < spans.length; i++) {
      setTimeout(() => {
        spans[i].textContent = letters[(i + 1) % 5];
      }, delay * i);
    }
    setTimeout(() => {
      for (let i = 0; i < spans.length; i++) {
        spans[i].textContent = letters[i];
      }
      hoverInProgress = false;
    }, delay * spans.length);
  }
}
function rearrangeTelegram() {
  if (!hoverInProgress) {
    const container = document.querySelector(".hover-telegram");
    const spans = container.querySelectorAll("span");
    const letters = ["T", "E", "L", "E", "G", "R", "A", "M"];
    let delay = 60;
    hoverInProgress = true;
    for (let i = 0; i < spans.length; i++) {
      setTimeout(() => {
        spans[i].textContent = letters[(i + 1) % 5];
      }, delay * i);
    }
    setTimeout(() => {
      for (let i = 0; i < spans.length; i++) {
        spans[i].textContent = letters[i];
      }
      hoverInProgress = false;
    }, delay * spans.length);
  }
}
function resetLetters() {
  hoverInProgress = false;
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
