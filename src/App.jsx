import { Github, Linkedin, Mail, FileText, Heading3 } from "lucide-react";
import { FaEnvelope } from "react-icons/fa";
import React from "react";


// --- Publications data + helpers ---
const publications = [
  {
    year: 2025,
    title: "Hierarchical Latent Theory of Mind: A Graph-Based Framework for Goal Inference",
    venue: "AAAI (under review)",
    authors: ["Nigel Doering", "Rahath Malladi", "Arshia Sangwan", 
      "M Tanjid Hasan Tonmoy", "Ilya Parker", "Ramesh Bharadwaj", "David Danks", "Tauhidur Rahman"],
    links: [], // add a preprint link later if you post one
  },
  {
    year: 2025,
    title:
      "Anti-Sensing: Defense against Unauthorized Radar-based Human Vital Sign Sensing with Physically Realizable Wearable Oscillators",
    venue: "ICLR 2025",
    authors: [
      "Md Farhan Tasnim Oshim",
      "Nigel Doering",
      "Bashima Islam",
      "Tsui-Wei Weng",
      "Tauhidur Rahman",
    ],
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2505.10864" }],
  },
  {
    year: 2024,
    title: "Master’s Thesis: Towards Anomalous Group Discovery in Maritime AIS Data",
    venue: "UC San Diego · eScholarship (Advisor: David Danks)",
    authors: ["Nigel Doering"],
    links: [{ label: "Thesis", href: "https://escholarship.org/uc/item/77v9d9kz" }],
  },
  {
    year: 2023,
    title:
      "Empirical Analysis of Efficient Fine-Tuning Methods for Large Pre-Trained Language Models",
    venue: "arXiv Pre-Print",
    authors: ["Nigel Doering", "Cyril Gorlla", "Trevor Tuttle", "Adhvaith Vijay"],
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2401.04051" }],
  },
];

const experiences = [
  {
    role: "Data Scientist",
    company: "Naval Information Warfare Center Pacific",
    location: "San Diego, CA",
    date: "Aug 2021 – Present",
    description:
      "Advanced to a full-time data scientist role leading dual focus areas in software development and applied machine learning research. Designed and deployed robust Python-based applications with integrated ML models for operational settings. Authored and pursued applied research grants on Navy-specific challenges—maritime anomaly detection, object tracking under adversarial conditions, and improving tactical network reliability—while partnering across departments and with senior leadership to launch new initiatives. Additionally served as a qualitative researcher, producing a 40-page strategic report to guide the Navy METOC community's transition to cloud services.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "PyTorch",
      "Python",
      "Software Development",
      "ML Deployment",
      "Grant Writing",
      "Stakeholder Engagement",
      "Qualitative Research",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Naval Information Warfare Center Pacific",
    location: "San Diego, CA",
    date: "Apr 2020 – Aug 2021",
    description:
      "Served on multiple Navy-focused data science initiatives spanning operational safety and health analytics. Key contributions included developing onboard server safety systems to improve shipboard management and conducting COVID-19 outbreak analyses that identified early symptomatic indicators aboard Navy vessels, informing health response protocols.",
    skills: [
      "Software Development",
      "Java",
      "Python",
      "Raspberry Pi Integration",
      "Statistical Modeling",
      "Data Visualization",
    ],
  },
];

function ExperienceTimeline() {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline rail */}
      <div className="absolute top-0 left-4 w-1 bg-gray-400 h-full rounded-full"></div>

      <div className="space-y-10">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative flex items-center">
            {/* Bullet */}
            <div className="absolute left-4 transform -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-md z-10"></div>

            {/* Card */}
            <div className="ml-12 bg-white shadow rounded-2xl p-6 w-full">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">
                  {exp.role} — {exp.company}
                </h3>
                <span className="text-sm text-gray-500">{exp.date} · {exp.location}</span>
              </div>
              <p className="mt-2 text-gray-700">{exp.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function formatAuthors(authors) {
  return authors
    .map(author => {
      if (author.toLowerCase().includes("nigel doering")) {
        return `<strong>${author}</strong>`;
      }
      return author;
    })
    .join(", ")
    .replace(/, ([^,]*)$/, ", and $1"); // optional Oxford comma & 'and'
}

export default function App() {
  return (
    <div className="min-h-screen bg-earth-50 text-earth-900">
      {/* Top nav (same layout, light theme) */}
      <header className="sticky top-0 z-20 border-b border-earth-200 bg-earth-50/80 backdrop-blur">
        <div className="mx-auto max-w-screen px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-brand-700 font-semibold tracking-tight">Nigel Doering</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#pubs" className="hover:text-brand-700">Projects</a>
            <a href="#experience" className="hover:text-brand-700">Experience</a>
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-lg bg-brand text-white font-medium shadow-soft hover:opacity-95"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero (same layout, light surfaces) */}
      <main className="mx-auto max-w-screen px-4">
        <section className="py-14">
          <div className="rounded-xl2 border border-earth-200 bg-white p-8 shadow-soft">
            <p className="text-sm text-earth-600/80 uppercase tracking-widest">
              UC San Diego · PhD Student
            </p>
            <h3 className="mt-3 text-4xl md:text-5xl font-bold text-brand-700 tracking-tight">
              Nigel Doering
            </h3>
      <div className="max-w-3xl">
        <p className="mt-4 text-earth-700 leading-relaxed">
          Hi! I’m Nigel Doering. 
          
          </p>
          
          <p className="mt-4 text-earth-700 leading-relaxed">
            I’m a second year PhD student in Data Science at UC San Diego, where I am co-advised by{" "}
          <a
            href="https://www.tauhidurrahman.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-skyish-400 hover:text-skyish-600 underline underline-offset-4"
          >
            Tauhidur Rahman
          </a>{" "}
          in the{" "}
          <a
            href="https://mosaic-laboratory.github.io/#home"
            target="_blank"
            rel="noopener noreferrer"
            className="text-skyish-400 hover:text-skyish-600 underline underline-offset-4"
          >
            Mobile Sensing & Ubiquitous Computing (MOSAIC) Lab 
          </a>
          , and {" "}
          <a
            href="https://www.daviddanks.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-skyish-400 hover:text-skyish-600 underline underline-offset-4"
          >
            David Danks.
          </a>
        </p>

        <p className="mt-3 text-earth-700 leading-relaxed">
          My research focuses on applied machine learning for sensing systems, with an emphasis on modeling
          latent internal states of humans. I’m especially interested in theory of mind, cognitive-state
          modeling, latent-variable methods, robotics, and health.
        </p>

        <p className="mt-3 text-earth-700 leading-relaxed">
          Current projects explore inferring agent goals and behaviors from movement data, building
          generalizable models for spatiotemporal signals, and learning latent mental states from sensor
          data alone. I’m excited about deploying these methods in complex settings—such as warehouses,
          care homes, and other environments where safety and human interaction are paramount.
        </p>

        <p className="mt-3 text-earth-700 leading-relaxed">
          I’m a recipient of the{" "}
          <a
            href="https://www.faspe-ethics.org/design-technology/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-skyish-400 hover:text-skyish-600 underline underline-offset-4"
          >
            Fellowship at Auschwitz for the Study of Professional Ethics (FASPE) in Design & Technology
          </a>
          , as well as the Naval Research Laboratory (NRL) 2025 Fellowship.
        </p>

        <p className="mt-3 text-earth-700 leading-relaxed">
          Before my PhD, I worked as a Data Scientist for 5 years at the Naval Information Warfare Center (NIWC)
          Pacific, developing machine learning solutions for national-security applications. My broader
          technical interests include human-robot interaction, human modeling, sensor fusion, and the
          ethical design of AI systems.
        </p>
      </div>
            {/* CTAs (same placement, light theme buttons) */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand text-white font-medium hover:opacity-95 shadow-soft"
              >
                <FileText size={18}/> CV
              </a>
              <a
                href="https://github.com/NigelDoering/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-earth-200 hover:bg-earth-100"
              >
                <Github size={18}/> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nigel-doering/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-earth-200 hover:bg-earth-100"
              >
                <Linkedin size={18}/> LinkedIn
              </a>
              <a
                href="nigel.doering@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-earth-200 hover:bg-earth-100"
              >
                <Mail size={18}/> Email
              </a>
            </div>
          </div>
        </section>

        {/* Same section structure, just light dividers */}

        <section id="pubs" className="py-10 border-t border-earth-200">
          <h2 className="text-2xl font-semibold text-brand-700 mb-6">Projects</h2>

          <ol className="space-y-5">
            {publications
              .sort((a, b) => b.year - a.year) // newest → oldest
              .map((pub) => (
                <li
                  key={pub.title}
                  className="rounded-xl2 border border-earth-200 bg-white p-5 shadow-soft"
                >
                  <div className="text-lg text-earth-900">
                    <span
                      className="font-medium"
                      dangerouslySetInnerHTML={{ __html: formatAuthors(pub.authors) }}
                    />{" "}
                    ({pub.year}).{" "}
                    <span className="italic">{pub.title}</span>. {pub.venue}.
                  </div>

                  {pub.links?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {pub.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm px-3 py-1.5 rounded-lg border border-earth-200 hover:bg-earth-100 text-brand-700"
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
          </ol>
        </section>

        <section id="experience" className="py-10 border-t border-earth-200">
          <h2 className="text-2xl font-semibold text-brand-700 mb-6">Work Experience</h2>

          <div className="relative pl-14">
            {/* timeline rail (thicker + brand color) */}
            <div
              className="absolute left-6 top-0 bottom-0 w-[2px] bg-brand-300/90"
              aria-hidden="true"
            />

            <div className="space-y-10">
              {experiences.map((exp, idx) => (
                <article key={idx} className="relative">
                  {/* dot centered on card height and sitting on the rail */}


                  <div className="rounded-xl2 border border-earth-200 bg-white p-6 shadow-soft">
                    <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                      <h3 className="text-lg font-semibold text-earth-900">
                        {exp.role} — {exp.company}
                      </h3>
                      <div className="text-sm text-earth-700/80">
                        {exp.date} · {exp.location}
                      </div>
                    </header>

                    <p className="text-earth-700 leading-relaxed">{exp.description}</p>

                    <ul className="mt-4 flex flex-wrap gap-2 text-sm">
                      {exp.skills.map((s) => (
                        <li
                          key={s}
                          className="px-2.5 py-1 rounded-lg border border-earth-200 bg-earth-50"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section id="contact" className="py-10 border-t border-earth-200">
          <h2 className="text-2xl font-semibold text-brand-700 mb-6">Contact</h2>
          <div className="flex items-center space-x-3 text-earth-700">
            <FaEnvelope className="text-2xl" />
            <span className="text-lg tracking-wide">
              nigel - dot - doering - at - gmail - dot - com
            </span>
          </div>
        </section>
      </main>

      <footer className="mt-8 border-t border-earth-200">
        <div className="mx-auto max-w-screen px-4 py-8 text-sm text-earth-700/80">
          © {new Date().getFullYear()} Nigel Doering · San Diego, CA
        </div>
      </footer>
    </div>
  );
}