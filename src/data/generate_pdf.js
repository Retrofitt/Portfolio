const fs = require('fs');
const path = require('path');

function generateResumePdf() {
  const contentStream = `BT
/F2 18 Tf
50 745 Td
(RAFAEL MENDOZA) Tj
ET

BT
/F1 9.5 Tf
50 730 Td
(Full-Stack Software Engineer & Creative Developer | Corona, CA | RafaelMendozaJr94@gmail.com) Tj
ET

BT
/F1 9 Tf
50 718 Td
(GitHub: github.com/Retrofitt | LinkedIn: linkedin.com/in/rafael-mendoza-webdev | Portfolio: rafaelmendoza.dev) Tj
ET

0.2 0.2 0.2 RG
0.5 w
50 708 m 562 708 l S

BT
/F2 10.5 Tf
0 0 0 rg
50 694 Td
(PROFESSIONAL SUMMARY) Tj
ET

BT
/F1 9 Tf
0.1 0.1 0.1 rg
50 680 Td
(Versatile Software Engineer with 4+ years of professional production experience architecting high-performance web) Tj
50 668 Td
(systems, responsive frontends, and client-centric digital experiences. Specialized in JavaScript, HTML5, CSS3/Tailwind,) Tj
50 656 Td
(WordPress, PHP, React.js, and Node.js. Proven track record delivering 100% on-time client milestones, optimizing Core) Tj
50 644 Td
(Web Vitals, maintaining scalable CMS architectures, and executing both creative UI/UX and critical backend workflows.) Tj
ET

BT
/F2 10.5 Tf
0 0 0 rg
50 626 Td
(TECHNICAL SKILLS) Tj
ET

BT
/F1 8.5 Tf
50 612 Td
(Frontend: JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, React.js, WordPress Theme Dev, Redux, UI/UX, Axios, Ant-Design) Tj
50 600 Td
(Backend: PHP, Node.js, Express.js, RESTful APIs, WebSockets (Socket.IO), PostgreSQL, SQL, Server-Side Rendering (SSR)) Tj
50 588 Td
(Tools & DevOps: Git, GitHub CI/CD, VS Code, Vercel, Docker, NPM, Figma, Agile/Scrum, Debugging, SEO & Core Web Vitals) Tj
ET

BT
/F2 10.5 Tf
0 0 0 rg
50 570 Td
(PROFESSIONAL EXPERIENCE) Tj
ET

BT
/F2 9.5 Tf
50 556 Td
(Doctor Genius - Irvine, CA) Tj
ET
BT
/F1 9 Tf
420 556 Td
(March 2022 - Present) Tj
ET
BT
/F3 9 Tf
50 544 Td
(Production Software Engineer & Web Developer) Tj
ET

BT
/F1 8.5 Tf
50 530 Td
(- Spearheaded web architecture and ongoing feature development for high-volume client sites with 100% on-time delivery.) Tj
50 518 Td
(- Engineered custom frontend components, dynamic landing pages, and responsive UI layouts using HTML5, CSS3, and JavaScript.) Tj
50 506 Td
(- Developed and maintained custom WordPress themes and PHP backend logic to streamline content rendering and client requests.) Tj
50 494 Td
(- Managed ongoing CMS pipelines, monthly digital content syndication, and SEO optimization to elevate client search visibility.) Tj
50 482 Td
(- Resolved cross-browser compatibility issues, optimized Core Web Vitals (sub-second LCP), and refactored legacy codebases.) Tj
ET

BT
/F2 9.5 Tf
50 464 Td
(W Brand Studio - Costa Mesa, CA) Tj
ET
BT
/F1 9 Tf
420 464 Td
(January 2022 - Present) Tj
ET
BT
/F3 9 Tf
50 452 Td
(Freelance Software Engineer & Web Developer) Tj
ET

BT
/F1 8.5 Tf
50 438 Td
(- Architected and shipped bespoke web applications and interactive client websites utilizing WordPress, PHP, JavaScript, and React.) Tj
50 426 Td
(- Translated Figma design mockups into pixel-perfect, accessible, performant web interfaces with fluid responsive layouts.) Tj
50 414 Td
(- Integrated RESTful APIs, third-party webhook automations, and custom form handlers, increasing lead capture efficiency by 30%.) Tj
ET

BT
/F2 10.5 Tf
0 0 0 rg
50 396 Td
(FEATURED SOFTWARE PROJECTS) Tj
ET

BT
/F2 9 Tf
50 382 Td
(Weather App with API Integration) Tj
ET
BT
/F1 8.5 Tf
230 382 Td
(| Node.js, Express.js, Axios, OpenWeatherMap REST API, SSR, Dotenv) Tj
ET
BT
/F1 8.5 Tf
50 370 Td
(- Built asynchronous weather forecasting service featuring dynamic Server-Side Rendering (SSR) and strict dotenv security.) Tj
ET

BT
/F2 9 Tf
50 354 Td
(Todo List with CRUD Operations) Tj
ET
BT
/F1 8.5 Tf
225 354 Td
(| Node.js, Express.js, RESTful APIs, Body-Parser, JSON Middleware) Tj
ET
BT
/F1 8.5 Tf
50 342 Td
(- Developed full-cycle REST microservice supporting parameterized mutations (GET, POST, PUT, DELETE) and status contracts.) Tj
ET

BT
/F2 9 Tf
50 326 Td
(Simple Chat Application with WebSockets) Tj
ET
BT
/F1 8.5 Tf
265 326 Td
(| Node.js, Express.js, Socket.IO, WebSockets, Event-Driven) Tj
ET
BT
/F1 8.5 Tf
50 314 Td
(- Engineered real-time communication platform using Socket.IO with bi-directional event emission and sub-15ms broadcast latency.) Tj
ET

BT
/F2 9 Tf
50 298 Td
(UnderDog Devs Platform) Tj
ET
BT
/F1 8.5 Tf
175 298 Td
(| React.js, JavaScript, CSS3, Ant-Design, Agile Scrum) Tj
ET
BT
/F1 8.5 Tf
50 286 Td
(- Contributed UI/UX engineering to non-profit developer app: dynamic sidebar navigation, admin modals, and role-based filtering.) Tj
ET

BT
/F2 10.5 Tf
0 0 0 rg
50 268 Td
(EDUCATION & TRAINING) Tj
ET

BT
/F2 9 Tf
50 254 Td
(BloomTech (FKA Lambda School)) Tj
ET
BT
/F1 9 Tf
420 254 Td
(Jun 2021 - Dec 2021) Tj
ET
BT
/F3 8.5 Tf
50 242 Td
(Graduate, Full-Time Program in Full Stack Web Development & Computer Science) Tj
ET
BT
/F1 8.5 Tf
50 230 Td
(- 1,000+ hours of immersive software engineering training covering React, Node.js, Express, PostgreSQL, data structures, and algorithms.) Tj
ET

BT
/F2 10.5 Tf
0 0 0 rg
50 212 Td
(COMMUNITY & FELLOWSHIP EXPERIENCE) Tj
ET

BT
/F2 9 Tf
50 198 Td
(Underdog Devs / Project Underdog - Remote) Tj
ET
BT
/F1 9 Tf
420 198 Td
(2021 - 2022) Tj
ET
BT
/F3 8.5 Tf
50 186 Td
(Frontend Software Engineer & Fellow (Partnered with Bloom Institute of Technology)) Tj
ET
BT
/F1 8.5 Tf
50 174 Td
(- Built open-source scheduling and mentorship tracking web app in React.js, JavaScript, and Ant-Design.) Tj
50 162 Td
(- Implemented dynamic role-based navigation sidebars, user authentication flows, and administrative modal dialogs.) Tj
50 150 Td
(- Participated in 40+ hrs/wk of pair programming, code reviews, and technical deep-dives with senior mentors.) Tj
ET`;

  const streamLength = Buffer.byteLength(contentStream, 'utf-8');

  const pdf = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 612 792]
  /Contents 4 0 R
  /Resources <<
    /Font <<
      /F1 <<
        /Type /Font
        /Subtype /Type1
        /BaseFont /Helvetica
      >>
      /F2 <<
        /Type /Font
        /Subtype /Type1
        /BaseFont /Helvetica-Bold
      >>
      /F3 <<
        /Type /Font
        /Subtype /Type1
        /BaseFont /Helvetica-Oblique
      >>
    >>
  >>
>>
endobj
4 0 obj
<<
  /Length ${streamLength}
>>
stream
${contentStream}
endstream
endobj
xref
0 5
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000418 00000 n 
trailer
<<
  /Size 5
  /Root 1 0 R
>>
startxref
${418 + 70 + streamLength}
%%EOF`;

  const targetAsset = path.join(__dirname, '..', 'assets', 'Rafael_Mendoza_Resume.pdf');
  const targetPublic = path.join(__dirname, '..', '..', 'public', 'Rafael_Mendoza_Resume.pdf');

  fs.writeFileSync(targetAsset, pdf, 'binary');
  console.log('Created:', targetAsset);

  try {
    fs.writeFileSync(targetPublic, pdf, 'binary');
    console.log('Created:', targetPublic);
  } catch (err) {
    console.log('Public write note:', err.message);
  }
}

generateResumePdf();
