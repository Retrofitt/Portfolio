const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'portfolioData.json');
const portfolioData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

function generateResume() {
  const outputPath = path.join(process.cwd(), 'src', 'assets', 'Rafael_Mendoza_Resume.pdf');

  // Letter size: 612 x 792 pt. Margins: 36pt (0.5 inch)
  const doc = new PDFDocument({
    size: 'LETTER',
    margins: { top: 32, bottom: 32, left: 38, right: 38 },
    info: {
      Title: `${portfolioData.profile.name} - Resume`,
      Author: portfolioData.profile.name,
      Subject: 'Software Engineer & Full-Stack Web Developer Resume',
      Keywords: 'Software Engineer, Full-Stack Developer, React, Node.js, JavaScript, WordPress, PHP, CSS'
    }
  });

  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  const { profile, skills, experience, projects, education } = portfolioData;

  // Modern Professional Color Palette
  const PRIMARY = '#0f172a';     // Slate 900 (Bold headers, names)
  const ACCENT = '#1d4ed8';      // Royal Blue 700 (Roles, key company tags, bullet discs)
  const BODY = '#1e293b';        // Slate 800 (Crisp body text)
  const MUTED = '#64748b';       // Slate 500 (Dates, locations, tech tags)
  const LINE_COLOR = '#cbd5e1';  // Slate 300 (Subtle dividers)

  const leftMargin = doc.page.margins.left;
  const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;

  // Helper: Section Divider Header
  function renderSectionHeader(title) {
    doc.moveDown(0.45);
    const startY = doc.y;
    doc.fontSize(9.5).font('Helvetica-Bold').fillColor(PRIMARY).text(title.toUpperCase(), leftMargin, startY, {
      characterSpacing: 0.6
    });

    const textHeight = doc.currentLineHeight();
    const lineY = startY + textHeight + 1.5;
    doc.strokeColor(LINE_COLOR).lineWidth(0.6).moveTo(leftMargin, lineY).lineTo(leftMargin + pageWidth, lineY).stroke();
    doc.y = lineY + 3.5;
  }

  // Helper: Custom Styled Bullet Point
  function renderBullet(text) {
    const bulletX = leftMargin + 5;
    const textX = leftMargin + 14;
    const textWidth = pageWidth - 14;
    const currentY = doc.y + 0.5;

    // Small crisp accent disc
    doc.save();
    doc.circle(bulletX + 1.5, currentY + 3.2, 1.5).fillColor(ACCENT).fill();
    doc.restore();

    doc.fontSize(8.5).font('Helvetica').fillColor(BODY).text(text, textX, currentY - 1, {
      width: textWidth,
      lineGap: 1.2,
      align: 'left'
    });
    doc.moveDown(0.12);
  }

  // ==================== 1. HEADER ====================
  doc.fontSize(20).font('Helvetica-Bold').fillColor(PRIMARY).text(profile.name, {
    align: 'center',
    characterSpacing: 0.5
  });
  doc.moveDown(0.1);

  doc.fontSize(10).font('Helvetica-Bold').fillColor(ACCENT).text(profile.role, {
    align: 'center',
    characterSpacing: 0.2
  });
  doc.moveDown(0.2);

  // Clickable Contact Row
  const contactText = `${profile.location}   •   ${profile.email}   •   linkedin.com/in/rafael-mendoza-webdev   •   github.com/Retrofitt`;
  doc.fontSize(8.25).font('Helvetica').fillColor(MUTED).text(contactText, {
    align: 'center'
  });

  // ==================== 2. PROFESSIONAL SUMMARY ====================
  renderSectionHeader('Professional Summary');
  doc.fontSize(8.5).font('Helvetica').fillColor(BODY).text(profile.bioLead, leftMargin, doc.y, {
    width: pageWidth,
    lineGap: 1.4,
    align: 'justify'
  });

  // ==================== 3. TECHNICAL SKILLS ====================
  renderSectionHeader('Technical Skills');
  if (skills) {
    Object.entries(skills).forEach(([category, list]) => {
      doc.fontSize(8.5).font('Helvetica-Bold').fillColor(PRIMARY).text(`${category}: `, leftMargin, doc.y, {
        continued: true
      });
      doc.font('Helvetica').fillColor(BODY).text(list.join(', '), {
        lineGap: 1.2
      });
      doc.moveDown(0.1);
    });
  }

  // ==================== 4. PROFESSIONAL EXPERIENCE ====================
  renderSectionHeader('Professional Experience');

  experience.forEach((exp) => {
    const startY = doc.y;

    // Role & Company
    doc.fontSize(9).font('Helvetica-Bold').fillColor(PRIMARY).text(exp.role, leftMargin, startY, {
      continued: true
    });
    doc.font('Helvetica-Bold').fillColor(ACCENT).text(`  |  ${exp.company}`);

    // Right aligned: Location & Period
    const metaRight = `${exp.location}  •  ${exp.period}`;
    doc.fontSize(8.25).font('Helvetica-Oblique').fillColor(MUTED).text(metaRight, leftMargin, startY, {
      align: 'right',
      width: pageWidth
    });

    doc.moveDown(0.15);

    // Bullets (including properly positioned Underdog Devs bullet points)
    exp.highlights.forEach((hl) => {
      renderBullet(hl);
    });

    doc.moveDown(0.2);
  });

  // ==================== 5. FEATURED PROJECTS ====================
  renderSectionHeader('Featured Projects');

  projects.forEach((proj) => {
    const startY = doc.y;
    doc.fontSize(8.75).font('Helvetica-Bold').fillColor(PRIMARY).text(proj.title, leftMargin, startY, {
      continued: true
    });
    doc.font('Helvetica-Oblique').fontSize(8.25).fillColor(MUTED).text(`  |  ${proj.techStack}`);

    doc.moveDown(0.12);
    renderBullet(proj.description);
    doc.moveDown(0.15);
  });

  // ==================== 6. EDUCATION & TRAINING ====================
  renderSectionHeader('Education & Training');

  education.forEach((edu) => {
    const startY = doc.y;
    doc.fontSize(8.75).font('Helvetica-Bold').fillColor(PRIMARY).text(edu.institution, leftMargin, startY, {
      continued: true
    });
    doc.font('Helvetica-Bold').fillColor(ACCENT).text(`  |  ${edu.degree}`);

    const eduRight = `${edu.location}  •  ${edu.period}`;
    doc.fontSize(8.25).font('Helvetica-Oblique').fillColor(MUTED).text(eduRight, leftMargin, startY, {
      align: 'right',
      width: pageWidth
    });

    if (edu.details) {
      doc.moveDown(0.12);
      renderBullet(edu.details);
    }
  });

  doc.end();
  console.log('Resume PDF generated successfully at:', outputPath);
}

generateResume();
