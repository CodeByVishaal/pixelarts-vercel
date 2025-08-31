import React, { useEffect } from "react";
import { gsap } from "gsap";

const Loader = () => {
  useEffect(() => {
    const letters = document.querySelectorAll(".text span");
    const loader = document.querySelector(".loader");

    const tl = gsap.timeline();

    tl.to(letters, {
      duration: 0.6,
      y: 0,
      stagger: 0.05,
      ease: "power2.out",
    })
      .to(letters, {
        "--clipPath": "inset(0% 0 0 0)",
        duration: 0.8,
        delay: 0.3,
        ease: "power1.inOut",
      })
      .to(letters, {
        duration: 0.6,
        y: 100,
        stagger: 0.05,
        delay: 0.5,
        ease: "power2.in",
      })
      .to(loader, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          loader.style.display = "none"; // completely hide loader
        },
      });
  }, []);

  return (
    <>
      <style>{`
        body {
          font-family: "Oswald", "Bebas Neue", sans-serif;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #111;
          overflow: hidden;
        }

        .loader {
          width: 100%;
          height: 100vh;
          display: grid;
          place-items: center;
          background: #111;
        }

        .text {
          display: flex;
          font-size: 6.5rem;
          font-weight: 700;
          position: relative;
        }

        .text span {
          display: inline-block;
          position: relative;
          color: rgba(255, 255, 255, 0.2);
          line-height: 1;
          transform: translateY(100px);
          --clipPath: inset(100% 0 0 0);
        }

        .text span::before {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
            45deg,
            #ff0000,
            #ff3333,
            #e30513,
            #cc0000
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          clip-path: var(--clipPath);
          -webkit-clip-path: var(--clipPath);
          transition: clip-path 0s;
        }

        /* 📱 Mobile devices */
        @media (max-width: 480px) {
          .text {
            font-size: 2.5rem;
          }
        }

        /* 📱 Tablets */
        @media (min-width: 481px) and (max-width: 768px) {
          .text {
            font-size: 4rem;
          }
        }

        /* 💻 Small laptops */
        @media (min-width: 769px) and (max-width: 1024px) {
          .text {
            font-size: 5rem;
          }
        }
      `}</style>

      <div className="loader">
        <div className="text">
          <span data-text="P">P</span>
          <span data-text="I">I</span>
          <span data-text="X">X</span>
          <span data-text="E">E</span>
          <span data-text="L">L</span>
          <span data-text="A">A</span>
          <span data-text="R">R</span>
          <span data-text="T">T</span>
          <span data-text="S">S</span>
        </div>
      </div>
    </>
  );
};

export default Loader;
