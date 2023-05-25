<template>
  <section id="projects" style="width: 100%">
    <h2>Projects</h2>
    <div>
      <project-section-card
        githubLink="https://github.com/IDG3920-Group-8/Bachelors"
        previewLink="https://frontend-production-202a.up.railway.app/"
        month="MAY-23"
        technologies="MERN • MEVN • Quasar • TypeScript"
        heading="Bachelor's project"
        :description="descriptionBP"
        :keyFeatures="keyFeaturesBP"
        :technicalOverview="technicalOverviewBP"
        :challengesAndFutureImprovements="challengesAndFutureImprovementsBP"
      />
      <project-section-card
        githubLink="https://github.com/ntnu-design/ntnu-avgangsutstilling-2023"
        previewLink="https://avgangsutstilling.no/"
        technologies="NEXT.js • TypeScript • MDX • Tailwind"
        month="MAR-23"
        heading="NTNU Graduation Exhibition 2023"
        :description="descriptionGE"
        :keyFeatures="keyFeaturesGE"
        :technicalOverview="technicalOverviewGE"
        :challengesAndFutureImprovements="challengesAndFutureImprovementsGE"
      />
      <project-section-card
        githubLink="https://github.com/Misthalin/IDG2012-Accessible_website"
        previewLink="https://misthalin.github.io/IDG2012-Accessible_website/"
        technologies="HTML5 • CSS3 • Bootstrap • WCAG"
        month="NOV-21"
        heading="Learning Accessibility"
        :description="descriptionLA"
        :keyFeatures="keyFeaturesLA"
        :technicalOverview="technicalOverviewLA"
        :challengesAndFutureImprovements="challengesAndFutureImprovementsLA"
      />
      <project-section-card
        githubLink="https://github.com/Misthalin/idg1292-oppgave-2020"
        previewLink="https://folk.ntnu.no/adriannr/obligs/0ppgav32828323202012gevknetasc/index.html"
        technologies="HTML5 • CSS3"
        month="NOV-20"
        heading="Education for Everyone"
        :description="descriptionUN"
        :keyFeatures="keyFeaturesUN"
        :technicalOverview="technicalOverviewUN"
        :challengesAndFutureImprovements="challengesAndFutureImprovementsUN"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectSectionCard from './ProjectSectionCard.vue';

// BACHELORS
const descriptionBP = [
  'This bachelor thesis investigates the challenge of providing up-to-date, customized, and accurate information about premature infancy to support parents of premature infants.',
  'We developed an online platform using a user-centered design approach, incorporating relevant web development techniques, and creating a custom Content Management System (CMS) for healthcare providers.',
  'By incorporating user research and leveraging modern web technologies, we addressed the challenges faced by parents and providers in accessing and managing information about premature infancy.',
  'Our user-centered approach aims to ensure a seamless user experience and the custom CMS allows for efficient content management.',
  'Upon evaluation, we identified areas for improvement and provided recommendations for further development.',
];
const keyFeaturesBP = [
  'The final deliverable successfully aligns with the problem statement by providing an online platform that offers customized, accurate, and up-to-date information about premature infancy to support parents of premature infants.',
  'Through careful consideration of user needs, application of appropriate web development techniques, and development of a custom CMS for healthcare providers, we have created a solution that addresses the challenges identified in the problem statement and meets the needs of both parents and healthcare providers.',
];
const technicalOverviewBP = [
  'The project provided an opportunity to gain hands-on experience with web development technologies such as MERN/MEVN stack, React, Vue, Quasar, SCSS/SASS, and backend technologies.',
  'This experience has not only improved the technical skills of the group, but also contributed to a deeper understanding of how these technologies work together to create a seamless user experience.',
  'The development of a custom CMS using the Quasar framework and Vue 3 allowed the group to learn how to design and implement a custom solution tailored to the project’s requirements.',
  'The experience of creating a custom CMS has provided valuable insights into the intricacies of content management, user roles, and the underlying technologies, such as Vue 3, Quasar, Pinia Store, and TypeScript.',
];
const challengesAndFutureImprovementsBP = [
  'Although our final product is fully usable as is, we have still found areas which can be considered for further improvements. The list follows',
  '1. If the product is to be further developed, it should be tested in a real environment with real users. Meaning parents of premature infants at a hospital and after hospital stay.',
  '2. If the solution is to be developed further, it is also recommended to ensure the product is performant and scalable. This can be addressed by conducting performance tests and optimizing the code wherever possible.',
  '3. Implement feedback from final evaluation. This includes changing the background image on the homepage, improving naming conventions, minor changes on the sitemap, and adding links to various resources.',
  '4. Implement a data trafficker to check if the product is being used by parents at all.',
  '5. If the project is to be continued, it is recommended to implement a full set of articles through the Headless CMS.',
];

// LEARNING ACCESSIBILITY
const descriptionLA = [
  'I developed a website focusing on the 2021 Formula One season, providing detailed information about drivers, teams, race calendars, season highlights, and statistics.',
  "Using Bootstrap5, I ensured the website is highly usable and accessible, providing a positive user experience regardless of users' physical abilities or the device they're using.",
  'The website is designed to be easy-to-navigate with a clean and basic look, maximizing contrast for better visibility.',
  'For enhanced accessibility, I added various features such as captions for videos and sound clips, keyboard focusable controls, and ensured the site has a sufficient contrast ratio.',
];

const keyFeaturesLA = [
  'Detailed information about the 2021 Formula One season',
  'High usability and accessibility via Bootstrap5',
  'Clean, high-contrast, and consistent design',
  'Enhanced accessibility features, including captions, keyboard focusable controls, and scalable text',
];

const technicalOverviewLA = [
  'Developed using HTML, CSS, and JavaScript',
  'Bootstrap5 for usability and accessibility',
  'HTML structured for semantic correctness',
  'Media queries for responsive design across devices',
  'Accessible name for all buttons',
  "ARIA roles for tab lists on 'Drivers' and 'Teams' pages",
];

const challengesAndFutureImprovementsLA = [
  'Avoided the use of accesskeys due to their potential to conflict with system or browser keyboard shortcuts.',
  'Future enhancements could include a JavaScript Media player to reduce bandwidth use, allowing users to choose video resolution on the Highlight page.',
  'Further design improvements and the inclusion of more detailed information to enhance the user experience.',
  'Replacing borrowed assets with original content before publishing.',
];

// AVGANGSUTSTILLING
const descriptionGE = [
  "As the project leader, I successfully managed communication with students from all three disciplines, ensuring that everyone's requirements were met.",
  "My responsibilities included overseeing the website's structure, delegating tasks to team members, reviewing pull requests, creating issues, and conducting general clean-up and final preparations for the website's launch.",
];

const keyFeaturesGE = [
  'Exhibit of diverse student projects',
  'Interdisciplinary collaboration promoting synergy',
  'Engaging, aesthetically pleasing website design',
  'Effective project management ensuring task completion',
];

const technicalOverviewGE = [
  'Built using Next.js',
  'Utilizes TypeScript for type safety and code completion',
  'Utilizes MDX for writing content in Markdown and JSX',
  'Utilizes Tailwind CSS for styling',
];

const challengesAndFutureImprovementsGE = [
  'There were aspects that could have been improved in our planning and preparation process.',
  'Being more explicit with group members regarding their tasks and deadlines could have streamlined the work process and led to better results.',
  'In hindsight, clearer communication regarding expectations could have helped avoid misunderstandings and ensured everyone was on the same page.',
];

// EDUCATION FOR EVERYONE
const descriptionUN = [
  'Education for Everyone is an awareness-raising website project aimed at promoting the United Nations Sustainable Development Goal 4 (SDG4) - Quality Education.',
  'The project was developed during my first semester at NTNU as an exercise to learn the fundamentals of HTML and CSS.',
  'The website provides comprehensive information about the importance of inclusive and equitable quality education and encourages lifelong learning opportunities for all.',
];

const keyFeaturesUN = [
  'Responsive design for optimal user experience across various devices',
  "Engaging and informative content about the UN's SDG4",
  'Visually appealing layout with relevant images and graphics',
  'Intuitive navigation for ease of use',
  'Interactive map displaying the location of the Norwegian University of Science and Technology',
  'Call to action section promoting the "Five Word Story" game, encouraging visitors to participate and inspire others',
];

const technicalOverviewUN = [
  'Built using HTML and CSS for webpage structure and styling',
  'Utilizes CSS code grouped by type within each selector for easy maintenance',
  'Ensures website performance optimization by keeping image file sizes small and using only necessary custom fonts',
  'Implements SEO best practices, such as meta tags and appropriate heading levels',
  'Adheres to W3C guidelines for HTML and CSS validation',
];

const challengesAndFutureImprovementsUN = [
  'Enhance layout to eliminate the need for scrolling back up to read the entire article on larger screens',
  'Explore additional methods for further website performance optimization',
  'Consider the inclusion of a h1 tag for improved SEO and accessibility',
];
</script>

<style scoped lang="scss">
div {
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(312px, 1fr));
  width: 100%;
}

section {
  max-width: 950px;
  padding-top: 4em;
  margin-top: 4em;
}

h2 {
  font-weight: 500;
  margin-bottom: 25px;
  font-family: $font-mono;
  font-size: 2rem;
  color: $cloud-gray;
}
</style>
