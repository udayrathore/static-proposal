import { SectionNav } from "@/components/section-nav";

const stages = [
  {
    number: "01",
    title: "Research & Product Definition",
    duration: "2 weeks",
    body: "Study the complete system, users, dependencies and actions across Phase One and future phases. Establish the product structure, information, fields, workflows and dependencies across customer, vendor and administration interfaces.",
    deliverable: "Product structure, functional mapping and low-fidelity product direction.",
  },
  {
    number: "02",
    title: "Wireframing & User Experience",
    duration: "Included in initial phase",
    body: "Define primary user journeys and low-fidelity wireframes across event creation, sub-events, vendor discovery and selection, proposals, negotiations, notifications and progress tracking.",
    deliverable: "Wireframes and user-flow definitions.",
  },
  {
    number: "03",
    title: "Design & Prototyping",
    duration: "3 weeks",
    body: "Create the visual language and interface design, including typography, layouts, components, graphics, hierarchy and interactions. Desktop will be the primary experience, with responsive mobile behaviour.",
    deliverable: "High-fidelity interface designs and interactive prototypes.",
  },
  {
    number: "04",
    title: "Development",
    duration: "Progressive",
    body: "Development begins alongside product definition and design. Backend systems, workflows, dashboards, vendors, proposals and communications will be established early, with the frontend developed progressively as interfaces are defined.",
    deliverable: "Functional web application on a staging environment.",
  },
  {
    number: "05",
    title: "Testing & Launch",
    duration: "Within overall timeline",
    body: "Test core workflows across devices, conduct user acceptance testing on staging and deploy the approved application.",
    deliverable: "Tested, production-ready web application.",
  },
];

const scopeItems = [
  {
    number: "01",
    title: "Event Creation & Planning",
    text: "Users can create events, define dates and organise separate sub-events while retaining a central view of status and progress.",
    list: ["Wedding functions and ceremonies", "Corporate and destination event requirements", "Separate flows for each sub-event", "Central overview and status tracking"],
  },
  {
    number: "02",
    title: "Vendor Discovery & Selection",
    text: "Users can discover relevant vendor categories—including venues, photography, decoration, special effects, choreography and others—with recommendations shaped by budget, location, style and preferences.",
  },
  {
    number: "03",
    title: "Vendor Profiles",
    text: "Structured vendor and customer profiles will support the information and interactions required across the platform.",
  },
  {
    number: "04",
    title: "Proposals & Negotiation",
    text: "Users can send enquiries, vendors can respond, and both parties can move through proposal and negotiation flows with clear statuses. Financial transactions remain outside Phase One.",
  },
  {
    number: "05",
    title: "Event Progress & Completion",
    text: "The platform will help users understand progress. Initial completion states will be based on key planning actions, such as finalising vendors for each sub-event, and may evolve in later phases.",
  },
  {
    number: "06",
    title: "Notifications & Communication",
    text: "Relevant alerts will cover proposal and vendor updates, key status changes and event notifications through email and platform communications.",
  },
  {
    number: "07",
    title: "ConnectX Administration",
    text: "An administration interface will give the ConnectX team visibility and control, support mediation where required and provide a foundation for future hybrid or offline workflows.",
  },
];

const technical = [
  "Responsive web application architecture",
  "Backend systems, database and workflows",
  "Customer, vendor and administration interfaces",
  "Structured vendor and event data",
  "Notifications and communications",
  "Scalable architecture for future phases",
];

const terms = [
  {
    title: "Project Deliverables & Code Ownership",
    body: "The solution will use original, tailored code with version control and client access through GitHub. Upon full payment, the client will own the custom website and application code, design files and project deliverables, excluding third-party items and licences. ArtWorksIT may include the work in its portfolio unless otherwise agreed in writing.",
  },
  {
    title: "Confidentiality & Data Security",
    body: "Both parties will keep confidential information private. These obligations continue after the project is complete.",
  },
  {
    title: "Client Responsibilities",
    body: "The client will provide project details, business rules, content, vendor information, timely feedback and access to relevant stakeholders. Delays in these inputs may adjust the project timeline.",
  },
  {
    title: "Payment Terms",
    body: "Payments are due within seven days, are exclusive of GST and exclude external services. Work begins after the initial payment. Payment delays may pause work, and go-live is subject to receipt of the applicable payment.",
  },
  {
    title: "Termination, Disputes & Governing Law",
    body: "Either party may terminate for material breach after written notice. ArtWorksIT will be compensated for services performed and expenses incurred. Disputes will first be addressed in good faith and, if unresolved, will be subject to the exclusive jurisdiction of Bangalore under the laws of India.",
  },
  {
    title: "Modifications & Entire Agreement",
    body: "Changes must be agreed in writing. This Statement of Work and its agreed amendments form the complete understanding between the parties for this project.",
  },
  {
    title: "Assumptions",
    body: "The client will provide final requirements, business rules, content and assets. Extensive data migration will be handled by the client unless separately scoped. Hosting and infrastructure will be defined in the final arrangement. The engagement is phased, and functionality not listed here may be considered for later phases.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="ConnectX proposal home">
          Connect<span>X</span>
        </a>
        <p>Statement of Work</p>
        <p className="masthead-date">30 August 2026</p>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true"><span /><span /><span /><span /></div>
        <div className="hero-copy">
          <p className="eyebrow">Proposed platform</p>
          <h1>Wedding &amp; Corporate<br />Event Planning</h1>
          <p className="hero-deck">A web-based planning and vendor management platform for ConnectX.</p>
        </div>
        <div className="hero-meta">
          <div><span>Prepared for</span><strong>ConnectX</strong></div>
          <div><span>Prepared by</span><strong>ArtWorksIT</strong></div>
          <div><span>Phase</span><strong>Phase One</strong></div>
          <div><span>Indicative duration</span><strong>10 weeks</strong></div>
        </div>
      </section>

      <SectionNav />

      <section className="section paper" id="overview">
        <div className="section-index">01 / Overview</div>
        <div className="section-content intro-grid">
          <h2>One place to plan, discover and progress.</h2>
          <div className="measure">
            <p className="lead">ArtWorksIT proposes Phase One of a web-based event planning and vendor management platform for ConnectX.</p>
            <p>The platform will allow users to create and plan events, define sub-events, discover and select vendors, manage enquiries and negotiations, and track progress through a central interface.</p>
            <p>It will support both weddings and corporate events. While both follow a similar planning flow, the platform will account for their different contexts and requirements.</p>
          </div>
        </div>
        <div className="objective-note">
          <span>Phase One objective</span>
          <p>Establish the core planning and marketplace infrastructure, with a flexible foundation for deeper operations, hybrid or offline workflows, and AI-assisted capabilities in future phases.</p>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="section-index">02 / Process</div>
        <div className="section-content section-heading">
          <div>
            <p className="eyebrow">From definition to launch</p>
            <h2>Five connected stages.</h2>
          </div>
          <p>The product is not simply a marketplace. Event planning is built into Phase One from the start, and development runs progressively alongside product definition and design.</p>
        </div>
        <div className="stage-list">
          {stages.map((stage) => (
            <article className="stage" key={stage.number}>
              <div className="stage-head"><span>{stage.number}</span><p>{stage.duration}</p></div>
              <h3>{stage.title}</h3>
              <p>{stage.body}</p>
              <div className="deliverable"><span>Deliverable</span><p>{stage.deliverable}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-section" id="platform">
        <div className="section-index">03 / Core platform scope</div>
        <div className="section-content platform-intro">
          <div>
            <p className="eyebrow">Planning infrastructure</p>
            <h2>Three sides.<br />One system.</h2>
          </div>
          <div className="interface-map" aria-label="Platform interfaces">
            <div><span>01</span><strong>Customer</strong><p>Create, discover, enquire and track.</p></div>
            <div><span>02</span><strong>Vendor</strong><p>Present, respond, propose and negotiate.</p></div>
            <div><span>03</span><strong>Admin</strong><p>Oversee, control and mediate.</p></div>
          </div>
        </div>
        <div className="scope-list">
          {scopeItems.map((item) => (
            <article className="scope-item" key={item.number}>
              <span className="scope-number">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.list && <ul>{item.list.map((entry) => <li key={entry}>{entry}</li>)}</ul>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section blue-section" id="boundaries">
        <div className="section-index">04 / Phase One boundaries</div>
        <div className="section-content boundary-grid">
          <div>
            <p className="eyebrow">A focused first phase</p>
            <h2>Foundation now. Expansion later.</h2>
          </div>
          <div className="boundary-list">
            <div><span>Included</span><p>Planning, vendor discovery, proposals and negotiation flows.</p></div>
            <div><span>Outside Phase One</span><p>Financial transactions.</p></div>
            <div><span>Future consideration</span><p>Hybrid or offline workflows and AI-assisted capabilities.</p></div>
            <div><span>Separately scoped</span><p>Advanced operations and automation.</p></div>
          </div>
        </div>
      </section>

      <section className="section paper" id="technical">
        <div className="section-index">05 / Technical foundation</div>
        <div className="section-content technical-grid">
          <div>
            <p className="eyebrow">Product considerations</p>
            <h2>Built for structure and scale.</h2>
          </div>
          <div>
            <p className="lead">The specific technology stack and infrastructure will be finalised during technical planning and product definition.</p>
            <ol className="technical-list">
              {technical.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}
            </ol>
          </div>
        </div>
      </section>

      <section className="section timeline-section" id="timeline">
        <div className="section-index">06 / Timeline & commercials</div>
        <div className="section-content timeline-grid">
          <div>
            <p className="eyebrow">Indicative delivery</p>
            <h2>Approximately 10 weeks.</h2>
            <p className="timeline-note">2.5 months from commencement, subject to timely inputs, feedback and approvals.</p>
          </div>
          <div className="timeline-visual" aria-label="Ten-week project timeline">
            <div className="week-labels">{Array.from({ length: 10 }, (_, i) => <span key={i}>W{i + 1}</span>)}</div>
            <div className="timeline-track"><span /><span /><span /></div>
            <div className="timeline-legend"><span>Define</span><span>Design</span><span>Develop &amp; launch</span></div>
          </div>
        </div>
        <div className="commercials">
          <div className="commercials-intro">
            <span>Commercial structure</span>
            <p>The project fee and final commercial terms will be proposed separately by ArtWorksIT. Payments are structured across three milestones.</p>
          </div>
          <table className="milestone-table">
            <caption className="sr-only">Payment milestones</caption>
            <thead><tr className="table-row table-head"><th>Milestone</th><th>Timing</th><th>Payment</th></tr></thead>
            <tbody>
              <tr className="table-row"><th>Initiation</th><td>At commencement</td><td>33.33%</td></tr>
              <tr className="table-row"><th>Design sign-off</th><td>Mid-project</td><td>33.33%</td></tr>
              <tr className="table-row"><th>Project go-live</th><td>End of project</td><td>33.34%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section support-section" id="support">
        <div className="section-index">07 / Support & maintenance</div>
        <div className="section-content support-grid">
          <h2>Clear support after delivery.</h2>
          <div>
            <p className="lead">Initial support covers bug fixes for the Phase One release.</p>
            <div className="support-definition">
              <span>Definition of a bug</span>
              <p>A deviation from the approved design or agreed functionality—not a new feature.</p>
            </div>
            <p>New functionality, modules and workflow changes requested after delivery will be scoped separately. Hosting, infrastructure and ongoing maintenance will be defined in the final commercial and technical agreement.</p>
          </div>
        </div>
      </section>

      <section className="section terms-section" id="terms">
        <div className="section-index">08 / Terms & assumptions</div>
        <div className="section-content terms-grid">
          <div className="terms-heading">
            <p className="eyebrow">Working agreement</p>
            <h2>The terms behind the work.</h2>
            <p>Select each item to review the detail.</p>
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

      <footer>
        <div className="wordmark">Connect<span>X</span></div>
        <p>Statement of Work · Phase One</p>
        <div><span>Prepared by</span><strong>Uday Rathore, ArtWorksIT</strong></div>
      </footer>
    </main>
  );
}
