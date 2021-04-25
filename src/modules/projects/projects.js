import "../../styles/main.css";
import React from "react";
import PersonalProfile from "../../assets/PersonalProfile.png";

function Project(props) {
  return (
    <div class="place-self-center m-4">
      <div class="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg justify-items-center">
        {props.image !== "" ? (
          <div class="py-6">
            <img
              class="mx-auto w-40 h-40"
              src={props.image}
              alt={props.title}
            />
          </div>
        ) : (
          <div class="text-white text-center px-6 py-20 bg-black">
            <p class="font-bold text-xl mb-2">Coming Soon ...</p>
          </div>
        )}

        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{props.title}</div>
          <p class="text-gray-700 text-base">{props.description}</p>
        </div>
        <div class="px-6 py-4">
          {props.ghOwnerName !== "" && props.repositoryName !== "" ? (
            <button
              class="inline-block items-center justify-center p-2"
              onClick={() =>
                window.open(
                  "https://github.com/" +
                    encodeURI(props.ghOwnerName) +
                    "/" +
                    encodeURI(props.repositoryName),
                  "_blank"
                )
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
          ) : (
            ""
          )}
          {props.ytVideoCode !== "" ? (
            <button
              class="inline-block items-center justify-center p-2"
              onClick={() =>
                window.open(
                  "https://youtube.com/watch?v=" + encodeURI(props.ytVideoCode),
                  "_blank"
                )
              }
            >
              <svg
                class="w-10 h-10 text-white hover:text-black fill-current p-2 bg-black rounded hover:bg-gray-50 hover:text-black disabled:bg-pink-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 1000 1000"
              >
                <path
                  d="M807 111v313h-64v-35q-37 39-74 39q-45 0-45-56V111h64v240q0 21 17 21t38-24V111h64zm-237 73v162q0 42-25 64t-68 22q-41 0-66.5-23.5T385 345V183q0-39 27.5-59.5T480 103q38 0 64 22t26 59zm-65 167V180q0-10-9-16.5t-19-6.5t-18 6.5t-8 16.5v171q0 26 26 26q28 0 28-26zM315 0h73l-55 165q-4 12-10 27.5t-10.5 28T305 248v176h-72V256q-2-12-29-85L147 0h73l46 169h5zm611 739q0 49-6 145q-4 50-38.5 79.5T797 995q-99 5-297 5q-199 0-297-5q-50-2-84.5-31.5T80 884q-6-96-6-145t6-145q4-50 38.5-79.5T203 483q98-5 297-5t297 5q50 2 84.5 31.5T920 594q6 96 6 145zm-71 91v-19h-53q0 2 .5 13t0 15.5T800 851t-7 10t-14 3q-10 0-15.5-6t-6-12t-.5-17v-48h98v-64q0-35-19-55t-54-20q-34 0-56.5 20.5T703 717v113q0 36 19.5 57.5T778 909q77 0 77-79zm-191 19V709q0-63-50-63q-25 0-46 23V559h-52v343h52v-20q22 23 49 23q47 0 47-56zm-250 53h51V649h-51v192q-17 19-31 19q-13 0-13-17V649h-52v213q0 44 36 44q30 0 60-32v28zM258 609h61v-50H140v50h60v293h58V609zm544 105v28h-45v-28q0-27 23-27q22 0 22 27zm-191-3v133q0 21-18 21q-14 0-25-11V696q10-10 22-10q21 0 21 25z"
                  fill="currentColor"
                />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M807 111v313h-64v-35q-37 39-74 39q-45 0-45-56V111h64v240q0 21 17 21t38-24V111h64zm-237 73v162q0 42-25 64t-68 22q-41 0-66.5-23.5T385 345V183q0-39 27.5-59.5T480 103q38 0 64 22t26 59zm-65 167V180q0-10-9-16.5t-19-6.5t-18 6.5t-8 16.5v171q0 26 26 26q28 0 28-26zM315 0h73l-55 165q-4 12-10 27.5t-10.5 28T305 248v176h-72V256q-2-12-29-85L147 0h73l46 169h5zm611 739q0 49-6 145q-4 50-38.5 79.5T797 995q-99 5-297 5q-199 0-297-5q-50-2-84.5-31.5T80 884q-6-96-6-145t6-145q4-50 38.5-79.5T203 483q98-5 297-5t297 5q50 2 84.5 31.5T920 594q6 96 6 145zm-71 91v-19h-53q0 2 .5 13t0 15.5T800 851t-7 10t-14 3q-10 0-15.5-6t-6-12t-.5-17v-48h98v-64q0-35-19-55t-54-20q-34 0-56.5 20.5T703 717v113q0 36 19.5 57.5T778 909q77 0 77-79zm-191 19V709q0-63-50-63q-25 0-46 23V559h-52v343h52v-20q22 23 49 23q47 0 47-56zm-250 53h51V649h-51v192q-17 19-31 19q-13 0-13-17V649h-52v213q0 44 36 44q30 0 60-32v28zM258 609h61v-50H140v50h60v293h58V609zm544 105v28h-45v-28q0-27 23-27q22 0 22 27zm-191-3v133q0 21-18 21q-14 0-25-11V696q10-10 22-10q21 0 21 25z"
                  fill="currentColor"
                />{" "}
              </svg>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div class="justify-center">
      <div className="text-center text-5xl tracking-widest pb-10 uppercase align-middle">
        Projects
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Project
          title="Automation Demo"
          description="GitHub Action to automate applying issue labels standards on your repositories."
          image="https://avatars.githubusercontent.com/u/44036562?v=4"
          ghOwnerName="Rahma-AlWadhahi"
          repositoryName="AutomationDemo"
          ytVideoCode="PXEPoOA3Mn0"
        />
        <Project
          title="EddieHub Community Support"
          description="An inclusive Open Source community where we help and support each other with tech."
          image="https://avatars.githubusercontent.com/u/66388388?v=4"
          ghOwnerName="EddieHubCommunity"
          repositoryName="support"
          ytVideoCode=""
        />
        <Project
          title="Personal Profile"
          description="A profile to showcase my contributions and own projects."
          image={PersonalProfile}
          ghOwnerName="Rahma-AlWadhahi"
          repositoryName="profile"
          ytVideoCode=""
        />
        <Project
          title="NuxtJS Organization Website"
          description="NuxtJS is an Open Source framework. Its documentation is available in many languages and soon in Arabic."
          image="https://avatars.githubusercontent.com/u/23360933?v=4"
          ghOwnerName="nuxt"
          repositoryName="nuxtjs.org"
          ytVideoCode=""
        />
        <Project
          title="Automation Testing"
          description="Automation Testing mainly focusing on UI testing  with Cypress, Cucumber.io and GitHub Actions."
          image=""
          ghOwnerName="Rahma-AlWadhahi"
          repositoryName=""
          ytVideoCode=""
        />
        <Project
          title="Advise App"
          description="An Application built with Swift that gets random advise slips and displays it."
          image=""
          ghOwnerName="Rahma-AlWadhahi"
          repositoryName=""
          ytVideoCode=""
        />
      </div>
    </div>
  );
}
