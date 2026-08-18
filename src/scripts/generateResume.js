const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'portfolioData.json');
const initialPortfolioData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));


function addHeader(doc, text, size = 18) {
  doc.fontSize(size).font('Helvetica-Bold').text(text, { align: 'center' });
  doc.moveDown(0.5);
}
function addSubHeader(doc, text, size = 14) {
  doc.fontSize(size).font('Helvetica-Bold').text(text);
  doc.moveDown(0.2);
}
function addBullet(doc, text) {
  doc.fontSize(10).font('Helvetica').list([text], { bulletRadius: 2, textIndent: 12, indent: 20 });
}
function addParagraph(doc, text) {
  doc.fontSize(10).font('Helvetica').text(text, { align: 'justify' });
  doc.moveDown(0.2);
}

function generateResume() {
  const outputPath = path.join(process.cwd(), 'src', 'assets', 'Rafael_Mendoza_Resume.pdf');
  const doc = new PDFDocument({ margin: 50 });
  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  const { profile, socials, experience, education } = initialPortfolioData;

  // Name & role
  addHeader(doc, profile.name, 22);
  doc.fontSize(12).font('Helvetica').text(profile.role, { align: 'center' });
  doc.moveDown(0.5);

  // Contact line
  const contactLine = `${profile.email} | ${profile.location} | Phone: Available upon request`;
  doc.fontSize(9).font('Helvetica-Oblique').text(contactLine, { align: 'center' });
  doc.moveDown(1);

  // Professional Summary
  addSubHeader(doc, 'Professional Summary');
  addParagraph(doc, profile.bioLead);

  // Skills (disciplines)
  addSubHeader(doc, 'Core Disciplines');
  doc.fontSize(10).font('Helvetica').text(profile.disciplines.join(', '));
  doc.moveDown(0.5);

  // Experience
  addSubHeader(doc, 'Experience');
  experience.forEach((exp) => {
    doc.fontSize(11).font('Helvetica-Bold').text(`${exp.role} – ${exp.company}`, { continued: true }).font('Helvetica').text(` (${exp.period})`);
    doc.fontSize(10).font('Helvetica-Oblique').text(exp.location);
    doc.moveDown(0.2);
    if (exp.description) {
      addParagraph(doc, exp.description);
    }
    exp.highlights.forEach((hl) => addBullet(doc, hl));
    doc.moveDown(0.5);
    doc.fontSize(9).font('Helvetica').text(`Technologies: ${exp.technologies.join(', ')}`);
    doc.moveDown(0.7);
  });

  // Education
  if (education && education.length) {
    addSubHeader(doc, 'Education');
    education.forEach((edu) => {
      doc.fontSize(11).font('Helvetica-Bold').text(`${edu.institution} – ${edu.degree}`, { continued: true }).font('Helvetica').text(` (${edu.period})`);
      doc.moveDown(0.3);
    });
  }

  // Footer / socials
  doc.moveDown(2);
  doc.fontSize(9).font('Helvetica-Oblique').text('Online Presence:', { align: 'center' });
  socials.forEach((s) => {
    if (s.name !== 'Email') {
      doc.text(`${s.name}: ${s.url}`, { align: 'center' });
    }
  });

  doc.end();
  console.log('Resume PDF generated at', outputPath);
}

generateResume();
