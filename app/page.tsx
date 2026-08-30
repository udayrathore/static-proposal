/* oxlint-disable next/no-img-element */
import { SectionNav } from "@/components/section-nav";

const stages = [
  {
    number: "01",
    date: "31 Aug – 13 Sep 2026",
    title: "Research & Product Definition",
    duration: "2 weeks",
    paragraphs: [
      "We will begin by understanding the complete system, its users, dependencies and the actions that may need to take place across the platform, both within Phase One and in future iterations.",
      "The research phase will establish the core product structure and identify the information, fields, workflows and dependencies required across customers, vendors and the ConnectX administration team.",
      "A key objective will be to ensure that the platform is not approached simply as a marketplace for venues or individual vendors. The proposed experience will instead begin functioning as an event planning platform from Phase One, helping users understand what needs to happen, what has been planned, what has been booked and what remains to be completed.",
    ],
    deliverable: "Product structure, functional mapping and low-fidelity product direction.",
  },
  {
    number: "02",
    date: "31 Aug – 13 Sep 2026",
    title: "Wireframing & User Experience",
    duration: "Included within the initial product definition and wireframing phase",
    paragraphs: [
      "Based on the research, we will map the primary user journeys and translate the proposed product structure into low-fidelity wireframes.",
      "This stage will define the key screens, data points, fields, navigation and control flows across the customer, vendor and administrative interfaces.",
      "The experience will account for event creation, sub-events, vendor discovery, vendor selection, proposals, negotiations, notifications and event progress. We will also define how users can visualise the overall state of their event and understand the completion of key planning activities.",
      "The wireframes will also help establish how the platform can evolve beyond the initial implementation without requiring the underlying product structure to be rebuilt.",
    ],
    deliverable: "Wireframes and user-flow definitions.",
  },
  {
    number: "03",
    date: "4 Sep – Mid-Oct 2026",
    title: "Design & Prototyping",
    duration: "A little over one month",
    paragraphs: [
      "Once the product structure and wireframes have been established, we will develop the visual language and interface design for the platform.",
      "This will include typography, layout, interface components, graphics, visual hierarchy and interaction patterns. Particular attention will be given to making a data-heavy application understandable and accessible, with information presented in a way that allows users to quickly understand what is happening within their event.",
      "The primary usage environment is expected to be desktop, while the interface will also be designed responsively for mobile devices. Mobile layouts will focus on condensing event information and navigation without compromising usability.",
      "The designs will be presented to the Client for review and feedback. Once the design direction is sufficiently defined, the relevant screens will be frozen for development.",
    ],
    deliverable: "High-fidelity interface designs and interactive prototypes.",
  },
  {
    number: "04",
    date: "21 Sep – Mid-Nov 2026",
    title: "Development",
    duration: "Runs progressively through the development period",
    paragraphs: [
      "Development will begin progressively alongside the product definition and design process rather than only after the visual design stage is complete.",
      "Because the proposed platform is backend and workflow heavy, the underlying systems, dashboards, vendor structures, proposal mechanisms, communications and supporting workflows will begin taking shape from the early stages of the project.",
      "Once the interface design is established, front-end development will proceed alongside the backend implementation.",
      "Development will focus on responsive behaviour, data-heavy interfaces, interaction patterns and the practical usability of the platform across its different user types.",
    ],
    deliverable: "Functional web application on staging environment.",
  },
  {
    number: "05",
    date: "Mid-November 2026",
    title: "Testing & Launch",
    duration: "Included within the overall project timeline",
    paragraphs: [
      "The completed platform will be tested across its core workflows and relevant devices before launch. A staging environment will be used for review and User Acceptance Testing.",
      "Following completion of testing and agreed fixes, the platform will be prepared for production deployment and launch.",
    ],
    deliverable: "Tested production-ready web application.",
    uat: "The project includes up to 2 consolidated rounds of UAT feedback and fixes during the staging phase. Bugs are limited to deviations from the approved designs or agreed functionality. New features, enhancements or changes in scope will be treated separately.",
  },
];

const scheduleWeeks = ["31 Aug", "7 Sep", "14 Sep", "21 Sep", "28 Sep", "5 Oct", "12 Oct", "19 Oct", "26 Oct", "2 Nov", "9 Nov"];

const scheduleTracks = [
  { number: "01", title: "Research & Product Definition", start: 1, span: 2 },
  { number: "02", title: "Wireframing & User Experience", start: 1, span: 2 },
  { number: "03", title: "Design & Prototyping", start: 1, span: 7 },
  { number: "04", title: "Development", start: 4, span: 8 },
  { number: "05", title: "Testing & Launch", start: 11, span: 1 },
];

const scopeItems = [
  {
    number: "01",
    title: "Event Creation & Planning",
    paragraphs: ["Users will be able to create an event and define its primary details, including event dates and the individual sub-events that form part of the overall occasion."],
    list: [
      "Wedding events and their individual functions or ceremonies.",
      "Corporate events and destination-oriented event requirements.",
      "Separate planning flows for individual sub-events.",
      "A central view of the overall event and its planning status.",
    ],
  },
  {
    number: "02",
    title: "Vendor Discovery & Selection",
    paragraphs: [
      "The proposed platform will allow users to discover and select vendors across relevant event categories such as venues, photography, decoration, SFX, choreography and other event services.",
      "Vendor recommendations may be surfaced based on requirements such as budget, location, style and other relevant event preferences.",
    ],
  },
  {
    number: "03",
    title: "Vendor Profiles",
    paragraphs: ["The platform will provide profiles for vendors and customers, creating a structured interface through which relevant information can be presented and interactions can take place."],
  },
  {
    number: "04",
    title: "Proposals & Negotiation",
    paragraphs: ["Phase One will facilitate vendor enquiries, proposals and negotiation through the platform. Financial transactions are proposed to remain outside the system during this initial phase."],
    list: [
      "Users can enquire with relevant vendors.",
      "Vendors can respond with proposals.",
      "The platform can facilitate proposal and negotiation workflows.",
      "Key status changes can be surfaced to the relevant users.",
    ],
  },
  {
    number: "05",
    title: "Event Progress & Completion",
    paragraphs: [
      "The proposed platform will provide users with a way to understand the progress of their event.",
      "In the initial phase, completion can be represented through key planning actions such as finalising vendors for the relevant sub-events. This metric is intended to evolve as the platform develops and additional event-planning workflows are introduced.",
    ],
  },
  {
    number: "06",
    title: "Notifications & Communication",
    paragraphs: ["Users and vendors will receive relevant notifications when important events or workflow changes occur within the platform."],
    list: [
      "Proposal and vendor communication updates.",
      "Key planning status changes.",
      "Important event-related notifications.",
      "Email and platform communication where applicable.",
    ],
  },
  {
    number: "07",
    title: "ConnectX Administration",
    paragraphs: [
      "An administrative interface will allow the ConnectX team to participate in and mediate relevant workflows between customers and vendors.",
      "The administrative layer is intended to provide ConnectX with visibility and control over the platform while supporting the possibility of future hybrid and offline service models.",
    ],
  },
];

const boundaries = [
  "Financial transactions are proposed to remain outside the platform during Phase One. The platform will support vendor discovery, enquiries, proposals and negotiations, but will not process or accept payments from users in this phase.",
  "Proposal and negotiation workflows are included within the initial platform concept.",
  "Future hybrid or fully offline ConnectX-managed workflows can be supported through later phases.",
  "AI-assisted functionality is reserved for a future phase and is not included in the current Phase One implementation.",
  "Advanced operational workflows and additional automation can be scoped separately as the product evolves.",
];

const technical = [
  "Laravel",
  "Filament",
  "GSAP",
  "Livewire",
  "Alpine JS",
  "MYSQL",
];

const support = [
  "The initial post-launch support period will cover bug fixes relating to the delivered Phase One functionality for one month after go-live.",
  "A bug is understood as a deviation from the approved design or agreed functionality, rather than a new feature or enhancement.",
  "New functionality, additional modules, significant workflow changes or enhancements requested after delivery will be scoped separately.",
  "ArtWorksIT proposes to recommend, configure and manage the hosting infrastructure based on the platform's load, requirements and assets. The appropriate server environment will be assessed as part of the implementation.",
];

const terms = [
  {
    title: "Project Deliverables & Code Ownership",
    body: "ArtWorksIT assures that all code and design components created for the Client's platform are original and tailored to the project's requirements. Code and documentation will be versioned and securely managed through GitHub, providing Client access to code versions and updates as needed. Upon full payment, the Client will have ownership of the custom website or application code, design files and project-specific deliverables created by ArtWorksIT, excluding third-party software, libraries, frameworks, fonts, plugins, stock assets and other components subject to their respective licences. ArtWorksIT reserves the right to showcase the completed project in its portfolio and marketing materials unless otherwise agreed upon in writing.",
  },
  {
    title: "Confidentiality & Data Security",
    body: "Both parties agree to keep all shared information confidential and will not disclose it to third parties without prior written consent. This provision will remain effective after the project's completion.",
  },
  {
    title: "Client Responsibilities & Project Scope",
    body: "The Client is responsible for providing all necessary project details, business rules, content, vendor information and timely feedback required for the project. The Client will provide timely access to relevant stakeholders for product decisions, approvals and clarification of workflows. Delays in requirements, content, approvals, feedback or other Client dependencies may result in corresponding changes to the project timeline.",
  },
  {
    title: "Payment Terms & Financial Conditions",
    body: "All payments are due Net 7 days from the invoice date, and all prices are exclusive of GST. The total project fee excludes costs for external services that may be required. Work will begin once the initial payment is received. If there are delays in payments, work may be paused temporarily and resumed once outstanding payments are cleared. The platform will be scheduled for go-live upon receipt of the applicable go-live stage payment.",
  },
  {
    title: "Termination, Dispute Resolution & Governing Law",
    body: "Either party may terminate the agreement in the event of a material breach by providing written notice. If terminated, Client agrees to compensate ArtWorksIT for services rendered and any applicable expenses. Disputes will first be addressed through good-faith negotiations. If unresolved, both parties consent to submit to the exclusive jurisdiction of the courts in Bangalore. This Agreement is governed by and construed under the laws of India, with Bangalore courts having exclusive jurisdiction.",
  },
  {
    title: "Modifications & Entire Agreement",
    body: "This document contains the full understanding between the parties and supersedes previous agreements. Any modifications must be in writing and signed by both parties.",
  },
  {
    title: "Assumptions",
    body: "The Client is responsible for providing the final requirements, business rules, content guidelines and necessary assets. Data entry and migration of extensive vendor or event data will be the responsibility of the Client unless specifically included in the scope. Hosting and infrastructure management will be defined as part of the final implementation and commercial arrangement. The platform will be developed in phases, and functionality not explicitly included in Phase One will be considered for subsequent phases.",
  },
];

function Logo({ inverse = false }: { inverse?: boolean }) {
  return <img className={inverse ? "brand-logo inverse" : "brand-logo"} src="/connectx-logo.png" alt="ConnectX Events" width="201" height="61" />;
}

function DeliverableIcon({ stage }: { stage: string }) {
  const paths: Record<string, React.ReactNode> = {
    "01": <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z" /></>,
    "02": <><rect x="3" y="4" width="18" height="16" rx="1.5" /><path d="M3 9h18M9 9v11" /></>,
    "03": <><circle cx="12" cy="12" r="9" /><circle cx="8.5" cy="10" r="1" /><circle cx="12" cy="7.5" r="1" /><circle cx="15.5" cy="10" r="1" /><path d="M12 21c1.7 0 2.4-1.4 1.5-2.6-.7-1 .1-2.4 1.4-2.4H17a4 4 0 0 0 4-4" /></>,
    "04": <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></>,
    "05": <><circle cx="12" cy="12" r="9" /><path d="m8 12 2.7 2.7L16.5 9" /></>,
  };

  return <svg className="deliverable-icon" viewBox="0 0 24 24" aria-hidden="true">{paths[stage]}</svg>;
}

export default function Home() {
  return (
    <>
      <div data-load-wrap className="loader">
        <div data-load-bg className="loader__bg">
          <div data-load-progress className="loader__bg-bar" />
        </div>
        <div data-load-container className="loader__container">
          <div className="loader__logo-wrap">
            <div className="loader__logo-item is--base">
              <img src="/loader-logo.svg" alt="" className="loader__logo-img" />
            </div>
            <div data-load-logo className="loader__logo-item is--top">
              <img src="/loader-logo.svg" alt="ConnectX and ArtWorksIT" className="loader__logo-img" />
            </div>
          </div>
          <div className="loader__text-wrap">
            <span data-load-text data-load-reset className="loader__text-el">Hold tight</span>
            <span data-load-text data-load-reset className="loader__text-el">Hi there!</span>
          </div>
        </div>
      </div>
      <main>
      <header className="masthead">
        <a className="logo-link" href="#top" aria-label="ConnectX proposal home"><Logo /></a>
        <p>Proposal</p>
        <p className="masthead-date">30 August 2026</p>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true"><span /><span /><span /><span /></div>
        <div className="hero-copy">
          <p className="eyebrow">Proposed</p>
          <h1>Wedding &amp; Corporate<br />Event Planning Platform</h1>
        </div>
        <div className="hero-meta">
          <div><span>Prepared by</span><strong>ArtWorksIT</strong></div>
          <div><span>Project start</span><strong>31st August 2026</strong></div>
          <div><span>Project completion</span><strong>Mid-November 2026</strong></div>
          <div><span>Project timeline</span><strong>10 to 11 weeks</strong></div>
        </div>
      </section>

      <SectionNav />

      <section className="section paper" id="overview">
        <div className="section-index">01 / Project Objective</div>
        <div className="section-content intro-grid">
          <h2>Project Objective</h2>
          <div className="measure">
            <p className="lead">ArtWorksIT proposes to design and develop Phase One of a web-based event planning and vendor management platform for ConnectX.</p>
            <p>The proposed platform will allow users to create and plan events, define individual sub-events, discover and select vendors, facilitate enquiries and negotiations, and track the progress of their event through a centralised interface.</p>
            <p>The initial phase is intended to establish the core planning and marketplace infrastructure while keeping the system flexible enough to support future enhancements, including deeper operational workflows, hybrid or offline service models, and AI-assisted functionality.</p>
            <p>The platform is proposed to support both wedding and corporate events. While the underlying planning flow will remain similar, the experience can accommodate the different requirements and contexts of each event type.</p>
          </div>
        </div>
        <div className="founders-note">
          <span>Co-Founders</span>
          <p>Prranit Bhanne and Mukesh Tekchandani</p>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="section-index">02 / Project Scope &amp; Timelines</div>
        <div className="section-content section-heading">
          <h2>Project Scope &amp; Timelines</h2>
          <p>A key objective will be to ensure that the platform is not approached simply as a marketplace for venues or individual vendors. The proposed experience will instead begin functioning as an event planning platform from Phase One.</p>
        </div>
        <div className="timeline-summary">
          <div><span>Proposed project start</span><strong>31st August 2026</strong></div>
          <div><span>Proposed project completion</span><strong>Mid-November 2026</strong></div>
          <div><span>Project timeline</span><strong>Approximately 10 to 11 weeks</strong></div>
        </div>
        <div className="parallel-timeline" aria-label="Parallel project schedule from 31 August to mid-November 2026">
          <div className="schedule-scroll">
            <div className="schedule-chart">
              <div className="schedule-corner">Phase</div>
              <div className="schedule-weeks">
                {scheduleWeeks.map((week) => <span key={week}>{week}</span>)}
              </div>
              {scheduleTracks.map((track) => (
                <div className="schedule-row" key={track.number}>
                  <div className="schedule-label"><span>{track.number}</span><strong>{track.title}</strong></div>
                  <div className="schedule-grid" aria-hidden="true">
                    <span className={`schedule-bar track-${track.number}`} style={{ gridColumn: `${track.start} / span ${track.span}` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="schedule-note">The parallel tracks indicate where project stages overlap.</p>
        </div>
        <div className="stage-list" data-step-timeline-init="" data-step-timeline-activation="0.5">
          <div className="step-timeline__line" data-step-timeline-line=""><div className="step-timeline__fill" data-step-timeline-fill="" /></div>
          {stages.map((stage) => (
            <article className="stage" key={stage.number} data-step-timeline-item="">
              <div className="timeline-marker" data-step-timeline-marker=""><span>{stage.date}</span></div>
              <div className="stage-body step-timeline__content">
                <div className="stage-head"><h3>{stage.title}</h3><p>{stage.duration}</p></div>
                <div className="stage-copy">{stage.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                <div className="deliverable"><DeliverableIcon stage={stage.number} /><div><span>Deliverables</span><p>{stage.deliverable}</p></div></div>
                {stage.uat && <div className="uat-note"><span>UAT</span><p>{stage.uat}</p></div>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-section" id="platform">
        <div className="section-index">03 / Core Platform Scope</div>
        <div className="section-content platform-title">
          <h2>Core Platform Scope</h2>
        </div>
        <div className="scope-list">
          {scopeItems.map((item) => (
            <article className="scope-item" key={item.number}>
              <span className="scope-number">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <div className="scope-copy">{item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                {item.list && <ul>{item.list.map((entry) => <li key={entry}>{entry}</li>)}</ul>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section blue-section" id="boundaries">
        <div className="section-index">04 / Phase One Boundaries</div>
        <div className="section-content boundary-grid">
          <h2 className="sticky-section-heading">Phase One Boundaries</h2>
          <div>
            <p className="boundary-lead">Phase One is proposed as the foundation of the ConnectX platform. The system will be structured with future expansion in mind. Any subsequent phase or additional functionality will be scoped and commercialised separately.</p>
            <ol className="boundary-list">{boundaries.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
          </div>
        </div>
      </section>

      <section className="section paper" id="technical">
        <div className="section-index">05 / Proposed Tech Stack</div>
        <div className="section-content technical-grid">
          <h2>Proposed Tech Stack</h2>
          <div>
            <ol className="technical-list">
              {technical.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}
            </ol>
          </div>
        </div>
      </section>

      <section className="section paper pricing-section" id="timeline">
        <div className="section-index">06 / Pricing &amp; Milestones</div>
        <div className="section-content pricing-layout">
          <div className="pricing-heading">
            <h2>Pricing &amp; Milestones</h2>
            <div className="pricing-summary">
            <p>The total proposed price for Phase One of this project is <strong>₹10,00,000 + GST.</strong></p>
            <p>The proposed payment structure consists of three milestones.</p>
            </div>
          </div>
          <table className="milestone-table">
            <caption className="sr-only">Payment milestones</caption>
            <thead><tr className="table-row table-head"><th>Milestone</th><th>Timeline</th><th>Payment</th></tr></thead>
            <tbody>
              <tr className="table-row"><th>Initiation</th><td>31st August 2026</td><td>₹3,30,000 (33%)</td></tr>
              <tr className="table-row"><th>Design Sign-off</th><td>Design completion / mid-project</td><td>₹3,30,000 (33%)</td></tr>
              <tr className="table-row"><th>Project Go-live</th><td>Mid-November 2026</td><td>₹3,40,000 (34%)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section support-section" id="support">
        <div className="section-index">07 / Support &amp; Maintenance</div>
        <div className="section-content support-grid">
          <h2 className="sticky-section-heading">Support &amp; Maintenance</h2>
          <ol className="support-list">{support.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
        </div>
      </section>

      <section className="section terms-section" id="terms">
        <div className="section-index">08 / Terms &amp; Assumptions</div>
        <div className="section-content terms-grid">
          <div className="terms-heading">
            <h2>Terms &amp; Assumptions</h2>
          </div>
          <div className="terms-list">
            {terms.map((term, index) => (
              <details key={term.title}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span>{term.title}<i aria-hidden="true">+</i></summary>
                <p>{term.body}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="outro-section" data-section-dock-hide="20">
        <div className="outro-top">
          <Logo inverse />
          <div className="outro-top-right">
            <div className="agency-group">
              <img src="/artworksit-logo.png" alt="ArtWorksIT" width="828" height="823" />
              <div><strong>ArtWorksIT</strong><a href="https://artworksit.com" target="_blank" rel="noopener noreferrer">artworksit.com</a></div>
            </div>
          </div>
        </div>
        <div className="outro-content">
          <p>Proposal</p>
          <h2>Proposed Wedding &amp; Corporate Event Planning Platform</h2>
        </div>
        <div className="outro-meta">
          <div className="signatory-group">
            <img src="/uday-rathore-signature.png" alt="Signature of Uday Rathore" width="871" height="477" />
            <div className="signatory-details">
              <div><span>Prepared by</span><strong>Uday Rathore</strong></div>
              <a className="call-link" href="tel:+918792745204" aria-label="Call Uday Rathore at +91 87927 45204" title="Call +91 87927 45204">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.36 2.3.54 3.6.54a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.18 2.46.54 3.6a1 1 0 0 1-.25 1L6.6 10.8Z" /></svg>
              </a>
            </div>
          </div>
          <a className="download-link" href="/ConnectX-Statement-of-Work.pdf" download>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14" /></svg>
            <span><small>PDF document</small>Download proposal</span>
          </a>
        </div>
      </section>
      </main>
    </>
  );
}
