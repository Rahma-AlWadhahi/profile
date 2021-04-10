import "../../styles/main.css";

export default function Intro() {
  return (
    <div class="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12 bg-fixed">
      <div class="flex flex-row justify-center">
        <div className="flex flex-col">
          <h1 class="text-black font-bold text-4xl">Rahma Al-Wadhahi</h1>
          <h2 class="text-black text-xl">Frontend Developer</h2>
        </div>
      </div>
      <div class="flex flex-row justify-center place-self-center m-14">
        <div className="flex flex-col py-10">
          <blockquote class="flex flex-wrap flex-col bg-white bg-opacity-30 border-l-4 italic border-gray-400 px-4 py-3">
            <h2 class="text-black text-xl">
              Since I discovered the power of GitHub Actions, I have been loving
              automation and how easy, fast and efficient the development
              process gets.
              <br />
              In the process of experimenting GitHub Actions with variety of
              scenarios.
              {/* I enjoy learning new things including automation and frontend development. */}
            </h2>
          </blockquote>
        </div>
      </div>
      <div class="py-6 flex flex-row justify-center sm:py-12">
        <button
          class="flex items-center justify-center p-2"
          onClick={() =>
            window.open("https://github.com/Rahma-AlWadhahi", "_blank")
          }
        >
          <svg
            class="w-10 h-10 text-white hover:text-black fill-current p-2 bg-black rounded hover:bg-gray-50 hover:text-black "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </button>
        <button
          class="flex items-center justify-center p-2"
          onClick={() =>
            window.open(
              "http://www.linkedin.com/in/rahma-al-wadhahi-389564132",
              "_blank"
            )
          }
        >
          <svg
            class="w-10 h-10 text-white hover:text-black fill-current p-2 bg-black rounded hover:bg-gray-50 hover:text-black "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />{" "}
          </svg>
        </button>
        <button
          class="flex items-center justify-center p-2"
          onClick={() =>
            window.open("https://twitter.com/Rahma_AlWadhahi", "_blank")
          }
        >
          <svg
            class="w-10 h-10 text-white hover:text-black fill-current p-2 bg-black rounded hover:bg-gray-50 hover:text-black "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />{" "}
          </svg>
        </button>
        <button
          class="flex items-center justify-center p-2"
          onClick={() =>
            window.open("mailto:alwadhahi.rahma@gmail.com", "_blank")
          }
        >
          <svg
            class="w-10 h-10 text-white hover:text-black fill-current p-2 bg-black rounded hover:bg-gray-50 hover:text-black "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z" />{" "}
          </svg>
        </button>
      </div>
    </div>
  );
}
