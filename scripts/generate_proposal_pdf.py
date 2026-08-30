#!/usr/bin/env python3
"""Generate the downloadable ConnectX proposal PDF from the current approved copy."""

from pathlib import Path
import sys

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "output/pdf/ConnectX-Statement-of-Work.pdf"
W, H = A4

INK = colors.HexColor("#15191f")
PAPER = colors.HexColor("#f6f4ef")
WHITE = colors.white
BLUE = colors.HexColor("#315f8f")
ACCENT = colors.HexColor("#77a5d2")
MUTED = colors.HexColor("#68717e")
LINE = colors.HexColor("#d6d2ca")

FONT_PATH = Path("/Users/uday/Library/Fonts/InterTight-VariableFont_wght.ttf")
pdfmetrics.registerFont(TTFont("InterTight", str(FONT_PATH)))
FONT = "InterTight"


def clean(text: str) -> str:
    return (
        text.replace("&amp;", "&")
        .replace("–", "-")
        .replace("—", "-")
        .replace("’", "'")
        .replace("“", '"')
        .replace("”", '"')
        .replace("&", "&amp;")
    )


def style(size=10, leading=None, color=INK, bold=False, align=TA_LEFT, space_after=0):
    return ParagraphStyle(
        name=f"s-{size}-{leading}-{bold}-{align}-{color}",
        fontName=FONT,
        fontSize=size,
        leading=leading or size * 1.38,
        textColor=color,
        alignment=align,
        spaceAfter=space_after,
    )


BODY = style(9.5, 13.5, MUTED)
BODY_DARK = style(9.5, 13.5, colors.HexColor("#c1c6cc"))
LEAD = style(13, 17.5, INK)
LEAD_DARK = style(13, 17.5, WHITE)
SMALL = style(8.2, 11.5, MUTED)
SMALL_DARK = style(8.2, 11.5, colors.HexColor("#bdc3ca"))


class Proposal:
    def __init__(self, output: Path):
        output.parent.mkdir(parents=True, exist_ok=True)
        self.c = canvas.Canvas(str(output), pagesize=A4)
        self.c.setTitle("Proposal for the Event Planning Platform")
        self.c.setAuthor("ArtWorksIT")
        self.page = 0

    def finish(self):
        self.c.save()

    def page_base(self, section: str, dark=False, blue=False, show_header=True):
        self.page += 1
        bg = BLUE if blue else (INK if dark else PAPER)
        fg = WHITE if (dark or blue) else INK
        self.c.setFillColor(bg)
        self.c.rect(0, 0, W, H, fill=1, stroke=0)
        if show_header:
            self.c.setFillColor(colors.HexColor("#aeb5bd") if dark else (colors.HexColor("#dce7f2") if blue else MUTED))
            self.c.setFont(FONT, 7.4)
            self.c.drawString(36, H - 30, "CONNECTX  /  PROPOSAL")
            self.c.drawRightString(W - 36, H - 30, f"{self.page:02d}")
            self.c.setStrokeColor(colors.Color(1, 1, 1, .22) if (dark or blue) else LINE)
            self.c.line(36, H - 42, W - 36, H - 42)
        if section:
            self.c.setFillColor(ACCENT if (dark or blue) else BLUE)
            self.c.setFont(FONT, 7.6)
            self.c.drawString(36, H - 70, section.upper())
        return fg

    def end_page(self):
        self.c.showPage()

    def paragraph(self, text, x, y, width, pstyle=BODY):
        p = Paragraph(clean(text), pstyle)
        _, h = p.wrap(width, H)
        p.drawOn(self.c, x, y - h)
        return y - h

    def heading(self, text, x, y, width, size=34, color=INK, leading=None):
        return self.paragraph(text, x, y, width, style(size, leading or size * .98, color))

    def label(self, text, x, y, color=BLUE):
        self.c.setFillColor(color)
        self.c.setFont(FONT, 7.5)
        self.c.drawString(x, y, text.upper())

    def rule(self, x1, y, x2, color=LINE, width=.7):
        self.c.setStrokeColor(color)
        self.c.setLineWidth(width)
        self.c.line(x1, y, x2, y)

    def bullets(self, items, x, y, width, dark=False, size=8.8):
        text_color = colors.HexColor("#c1c6cc") if dark else MUTED
        for item in items:
            self.c.setFillColor(ACCENT if dark else BLUE)
            self.c.circle(x + 2.3, y - 5.5, 1.2, fill=1, stroke=0)
            y = self.paragraph(item, x + 13, y, width - 13, style(size, size * 1.4, text_color)) - 5
        return y

    def numbered_rows(self, items, x, y, width, dark=False, size=9.3):
        fg = colors.HexColor("#c8cdd2") if dark else MUTED
        line = colors.Color(1, 1, 1, .18) if dark else LINE
        for idx, item in enumerate(items, 1):
            self.rule(x, y, x + width, line)
            self.c.setFillColor(ACCENT if dark else BLUE)
            self.c.setFont(FONT, 7.4)
            self.c.drawString(x, y - 20, f"{idx:02d}")
            h_y = self.paragraph(item, x + 42, y - 10, width - 42, style(size, size * 1.42, fg))
            y = h_y - 14
        self.rule(x, y + 5, x + width, line)
        return y


stages = [
    ("31 Aug - 13 Sep 2026", "Research & Product Definition", "2 weeks", [
        "We will begin by understanding the complete system, its users, dependencies and the actions that may need to take place across the platform, both within Phase One and in future iterations.",
        "The research phase will establish the core product structure and identify the information, fields, workflows and dependencies required across customers, vendors and the ConnectX administration team.",
        "A key objective will be to ensure that the platform is not approached simply as a marketplace for venues or individual vendors. The proposed experience will instead begin functioning as an event planning platform from Phase One, helping users understand what needs to happen, what has been planned, what has been booked and what remains to be completed.",
    ], "Product structure, functional mapping and low-fidelity product direction."),
    ("31 Aug - 13 Sep 2026", "Wireframing & User Experience", "Included within the initial product definition and wireframing phase", [
        "Based on the research, we will map the primary user journeys and translate the proposed product structure into low-fidelity wireframes.",
        "This stage will define the key screens, data points, fields, navigation and control flows across the customer, vendor and administrative interfaces.",
        "The experience will account for event creation, sub-events, vendor discovery, vendor selection, proposals, negotiations, notifications and event progress. We will also define how users can visualise the overall state of their event and understand the completion of key planning activities.",
        "The wireframes will also help establish how the platform can evolve beyond the initial implementation without requiring the underlying product structure to be rebuilt.",
    ], "Wireframes and user-flow definitions."),
    ("4 Sep - Mid-Oct 2026", "Design & Prototyping", "A little over one month", [
        "Once the product structure and wireframes have been established, we will develop the visual language and interface design for the platform.",
        "This will include typography, layout, interface components, graphics, visual hierarchy and interaction patterns. Particular attention will be given to making a data-heavy application understandable and accessible, with information presented in a way that allows users to quickly understand what is happening within their event.",
        "The primary usage environment is expected to be desktop, while the interface will also be designed responsively for mobile devices. Mobile layouts will focus on condensing event information and navigation without compromising usability.",
        "The designs will be presented to the Client for review and feedback. Once the design direction is sufficiently defined, the relevant screens will be frozen for development.",
    ], "High-fidelity interface designs and interactive prototypes."),
    ("21 Sep - Mid-Nov 2026", "Development", "Runs progressively through the development period", [
        "Development will begin progressively alongside the product definition and design process rather than only after the visual design stage is complete.",
        "Because the proposed platform is backend and workflow heavy, the underlying systems, dashboards, vendor structures, proposal mechanisms, communications and supporting workflows will begin taking shape from the early stages of the project.",
        "Once the interface design is established, front-end development will proceed alongside the backend implementation.",
        "Development will focus on responsive behaviour, data-heavy interfaces, interaction patterns and the practical usability of the platform across its different user types.",
    ], "Functional web application on staging environment."),
]

scope = [
    ("Customer Experience", "The proposed platform gives customers a central place to define their event requirements, discover suitable vendors and venues, manage enquiries and track their planning progress.", [
        "Create an event and define its key details.", "Break the event into individual sub-events, functions or ceremonies.", "Define requirements such as budget, location, event type, preferred style and other relevant preferences.", "Search for vendors based on their specific requirements.", "View only vendors whose profile, specialisation and availability are relevant to those requirements.", "Explore vendor profiles, portfolios and relevant information.", "Enquire with vendors and receive proposals.", "Participate in proposal and negotiation workflows.", "Track vendors and services that have been shortlisted or finalised.", "Monitor the overall progress of their event.", "Receive relevant notifications throughout the planning process.",
    ], [
        "The same principle applies to venue discovery. Customers can specify requirements such as destination, event dates, expected requirements, budget and property preferences, allowing the platform to surface relevant available venues rather than presenting an unrestricted list of properties.",
        "The proposed customer experience therefore moves beyond simple vendor browsing. It establishes the foundation for progressively more relevant matching and recommendations as the platform evolves.",
    ]),
    ("Vendor Experience", "The proposed platform will give vendors a structured environment to present their services, define their specialisations and manage their availability.", [
        "Maintain a structured vendor profile.", "Define their services and areas of specialisation.", "Specify category-specific attributes. For example, photographers may identify their preferred photography styles.", "Manage availability by blocking dates on their calendar.", "Receive enquiries based on relevant event and service requirements.", "Review customer and sub-event requirements.", "Respond with proposals.", "Participate in proposal and negotiation workflows.", "Receive relevant notifications.", "Track the status of their customer interactions.",
    ], ["Vendor information will actively contribute to the matching process. Specialisation, availability, location, budget suitability and other relevant attributes can influence which vendors are surfaced to a customer."]),
    ("Venue Owner Experience", "Venue booking will be treated as a dedicated module within the platform. Although venues form part of the wider vendor ecosystem, the nature of venue enquiries and negotiations makes them sufficiently different to warrant a dedicated experience. The proposed venue module will focus particularly on properties relevant to destination weddings and other high-value events, including luxury hotels, five-star properties, heritage properties and other specialised venues.", [
        "Maintain a structured property profile.", "Present property information, imagery, facilities and relevant event capabilities.", "Define the types of events and functions the property can accommodate.", "Manage relevant availability.", "Receive enquiries based on customer event requirements.", "Review event dates, requirements and sub-event information.", "Respond to venue enquiries.", "Submit proposals and commercial responses.", "Participate in negotiation workflows.", "Receive notifications and track the status of active enquiries.",
    ], [
        "Unlike a conventional hotel booking platform, the proposed venue workflow is centred around enquiry, proposal and negotiation, rather than instant booking.",
        "This is particularly relevant for destination weddings, where venue selection can involve multiple functions, dates, accommodation requirements, property-specific considerations and commercial negotiations.",
    ]),
    ("ConnectX Operations", "ConnectX will have a central operational layer connecting customers, vendors and venue owners. The proposed administration interface will allow ConnectX to:", [
        "Manage and oversee customers, vendors and venue owners.", "View event, sub-event, vendor and venue information.", "Monitor enquiries, proposals and negotiations.", "Participate in or mediate customer, vendor and venue interactions.", "Track event and booking progress.", "Manage relevant platform data and workflows.", "Intervene when a customer requires assistance.", "Coordinate venue enquiries and negotiations where required.", "Support hybrid or offline workflows where ConnectX becomes directly involved in delivering or coordinating a service.",
    ], ["This operational layer is particularly important for venue booking, where ConnectX may need to facilitate communication and negotiation between the customer and property rather than simply allowing the two parties to transact independently."]),
]

boundaries = [
    "Financial transactions are proposed to remain outside the platform during Phase One. The platform will support vendor discovery, enquiries, proposals and negotiations, but will not process or accept payments from users in this phase.",
    "Proposal and negotiation workflows are included within the initial platform concept.",
    "Future hybrid or fully offline ConnectX-managed workflows can be supported through later phases.",
    "AI-assisted functionality is reserved for a future phase and is not included in the current Phase One implementation.",
    "Advanced operational workflows and additional automation can be scoped separately as the product evolves.",
]

support = [
    "The initial post-launch support period will cover bug fixes relating to the delivered Phase One functionality for one month after go-live.",
    "A bug is understood as a deviation from the approved design or agreed functionality, rather than a new feature or enhancement.",
    "New functionality, additional modules, significant workflow changes or enhancements requested after delivery will be scoped separately.",
    "ArtWorksIT proposes to recommend, configure and manage the hosting infrastructure based on the platform's load, requirements and assets. The appropriate server environment will be assessed as part of the implementation.",
]

terms = [
    ("Project Deliverables & Code Ownership", "ArtWorksIT assures that all code and design components created for the Client's platform are original and tailored to the project's requirements. Code and documentation will be versioned and securely managed through GitHub, providing Client access to code versions and updates as needed. Upon full payment, the Client will have ownership of the custom website or application code, design files and project-specific deliverables created by ArtWorksIT, excluding third-party software, libraries, frameworks, fonts, plugins, stock assets and other components subject to their respective licences. ArtWorksIT reserves the right to showcase the completed project in its portfolio and marketing materials unless otherwise agreed upon in writing."),
    ("Confidentiality & Data Security", "Both parties agree to keep all shared information confidential and will not disclose it to third parties without prior written consent. This provision will remain effective after the project's completion."),
    ("Client Responsibilities & Project Scope", "The Client is responsible for providing all necessary project details, business rules, content, vendor information and timely feedback required for the project. The Client will provide timely access to relevant stakeholders for product decisions, approvals and clarification of workflows. Delays in requirements, content, approvals, feedback or other Client dependencies may result in corresponding changes to the project timeline."),
    ("Payment Terms & Financial Conditions", "All payments are due Net 7 days from the invoice date, and all prices are exclusive of GST. The total project fee excludes costs for external services that may be required. Work will begin once the initial payment is received. If there are delays in payments, work may be paused temporarily and resumed once outstanding payments are cleared. The platform will be scheduled for go-live upon receipt of the applicable go-live stage payment."),
    ("Termination, Dispute Resolution & Governing Law", "Either party may terminate the agreement in the event of a material breach by providing written notice. If terminated, Client agrees to compensate ArtWorksIT for services rendered and any applicable expenses. Disputes will first be addressed through good-faith negotiations. If unresolved, both parties consent to submit to the exclusive jurisdiction of the courts in Bangalore. This Agreement is governed by and construed under the laws of India, with Bangalore courts having exclusive jurisdiction."),
    ("Modifications & Entire Agreement", "This document contains the full understanding between the parties and supersedes previous agreements. Any modifications must be in writing and signed by both parties."),
    ("Assumptions", "The Client is responsible for providing the final requirements, business rules, content guidelines and necessary assets. Data entry and migration of extensive vendor or event data will be the responsibility of the Client unless specifically included in the scope. Hosting and infrastructure management will be defined as part of the final implementation and commercial arrangement. The platform will be developed in phases, and functionality not explicitly included in Phase One will be considered for subsequent phases."),
]


def draw_cover(p: Proposal):
    p.page += 1
    image = ImageReader(str(ROOT / "public/connectx-hero-desktop.png"))
    iw, ih = image.getSize()
    scale = max(W / iw, H / ih)
    dw, dh = iw * scale, ih * scale
    p.c.drawImage(image, (W - dw) / 2, (H - dh) / 2, dw, dh, mask="auto")
    p.c.saveState()
    p.c.setFillAlpha(.52)
    p.c.setFillColor(INK)
    p.c.rect(0, 0, W, H, fill=1, stroke=0)
    p.c.restoreState()
    p.c.setFillColor(WHITE)
    p.c.setFont(FONT, 16)
    p.c.drawString(36, H - 55, "connectX")
    p.c.setFont(FONT, 7)
    p.c.drawString(81, H - 67, "events")
    p.c.setFont(FONT, 8)
    p.c.drawCentredString(W / 2, H - 54, "PROPOSAL")
    p.c.drawRightString(W - 36, H - 54, "30 AUGUST 2026")
    p.label("Proposed", 36, H - 170, colors.HexColor("#e8d8bf"))
    p.heading("Wedding &amp; Corporate<br/>Event Planning Platform", 36, H - 195, W - 72, 51, WHITE, 49)
    p.rule(36, 112, W - 36, colors.Color(1, 1, 1, .55))
    labels = [("PREPARED BY", "ArtWorksIT"), ("PROJECT START", "31st August 2026"), ("PROJECT COMPLETION", "Mid-November 2026"), ("PROJECT TIMELINE", "10 to 11 weeks")]
    col = (W - 72) / 4
    for i, (lab, val) in enumerate(labels):
        x = 36 + col * i
        p.c.setFillColor(colors.HexColor("#dedad3")); p.c.setFont(FONT, 6.4); p.c.drawString(x, 88, lab)
        p.c.setFillColor(WHITE); p.c.setFont(FONT, 9); p.c.drawString(x, 70, val)
    p.end_page()


def stage_block(p, stage, y):
    date, title, duration, paragraphs, deliverable = stage
    p.label(date, 36, y, BLUE)
    y = p.heading(title, 36, y - 20, W - 72, 22, INK, 23)
    y = p.paragraph(duration, 36, y - 5, W - 72, style(9, 12, BLUE)) - 14
    for para in paragraphs:
        y = p.paragraph(para, 36, y, W - 72, BODY) - 8
    p.c.setFillColor(colors.HexColor("#e9eef4")); p.c.roundRect(36, y - 48, W - 72, 40, 5, fill=1, stroke=0)
    p.label("Deliverables", 49, y - 23, BLUE)
    p.paragraph(deliverable, 122, y - 16, W - 171, style(8.7, 12, INK))
    return y - 64


def scope_page(p, number, item):
    title, intro, bullets, closing = item
    p.page_base(f"03.{number:02d} / {title}", dark=True)
    y = p.heading(title, 36, H - 102, W - 72, 35, WHITE)
    y = p.paragraph(intro, 36, y - 20, W - 72, LEAD_DARK) - 22
    y = p.bullets(bullets, 36, y, W - 72, dark=True, size=8.65)
    for para in closing:
        p.rule(36, y - 2, W - 36, colors.Color(1, 1, 1, .15))
        y = p.paragraph(para, 36, y - 22, W - 72, BODY_DARK) - 10
    p.end_page()


def build():
    p = Proposal(OUTPUT)
    draw_cover(p)

    p.page_base("01 / Project Objective")
    p.heading("Project Objective", 36, H - 108, 250, 40, INK)
    y = H - 118
    x = 300
    y = p.paragraph("ArtWorksIT proposes to design and develop Phase One of a web-based event planning and vendor management platform for ConnectX.", x, y, W - x - 36, LEAD) - 14
    for para in [
        "The proposed platform will allow users to create and plan events, define individual sub-events, discover and select vendors, facilitate enquiries and negotiations, and track the progress of their event through a centralised interface.",
        "The initial phase is intended to establish the core planning and marketplace infrastructure while keeping the system flexible enough to support future enhancements, including deeper operational workflows, hybrid or offline service models, and AI-assisted functionality.",
        "The platform is proposed to support both wedding and corporate events. While the underlying planning flow will remain similar, the experience can accommodate the different requirements and contexts of each event type.",
    ]:
        y = p.paragraph(para, x, y, W - x - 36, BODY) - 11
    p.rule(x, y - 8, W - 36)
    p.label("Co-Founders", x, y - 32)
    p.paragraph("Prranit Bhanne and Mukesh Tekchandani", x + 95, y - 26, W - x - 131, style(10, 13, INK))
    p.end_page()

    p.page_base("02 / Project Scope & Timelines")
    p.heading("Project Scope &amp;<br/>Timelines", 36, H - 108, 250, 37, INK, 38)
    p.paragraph("A key objective will be to ensure that the platform is not approached simply as a marketplace for venues or individual vendors. The proposed experience will instead begin functioning as an event planning platform from Phase One.", 310, H - 108, W - 346, LEAD)
    p.rule(36, H - 255, W - 36)
    summary = [("PROJECT START", "31st August 2026"), ("PROJECT COMPLETION", "Mid-November 2026"), ("PROJECT TIMELINE", "Approximately 10 to 11 weeks")]
    for i, (lab, val) in enumerate(summary):
        x = 36 + i * (W - 72) / 3
        p.label(lab, x, H - 284)
        p.paragraph(val, x, H - 302, (W - 92) / 3, style(10, 13, INK))
    p.rule(36, H - 333, W - 36)
    weeks = ["31 Aug", "7 Sep", "14 Sep", "21 Sep", "28 Sep", "5 Oct", "12 Oct", "19 Oct", "26 Oct", "2 Nov", "9 Nov"]
    gx, gy, gw = 160, H - 400, W - 196
    cell = gw / 11
    p.label("Phase", 36, gy + 12)
    for i, w in enumerate(weeks):
        p.c.setFillColor(MUTED); p.c.setFont(FONT, 6.1); p.c.drawCentredString(gx + cell*(i+.5), gy + 12, w)
    tracks = [("Research & Product Definition",0,2,colors.HexColor("#7799b8")),("Wireframing & User Experience",0,2,colors.HexColor("#a48d7c")),("Design & Prototyping",0,7,colors.HexColor("#afa15d")),("Development",3,8,colors.HexColor("#47788a")),("Testing & Launch",10,1,colors.HexColor("#8d739a"))]
    for row, (title, start, span, colr) in enumerate(tracks):
        y = gy - 34 - row*55
        p.rule(36, y + 24, W - 36)
        p.paragraph(title, 36, y + 10, 112, style(8.2, 10, INK))
        p.c.setFillColor(colr); p.c.roundRect(gx + start*cell + 3, y + 6, span*cell - 6, 14, 2, fill=1, stroke=0)
    p.rule(36, gy - 34 - 5*55 + 24, W - 36)
    p.paragraph("The parallel tracks indicate where project stages overlap.", 36, 104, W - 72, SMALL)
    p.end_page()

    for pair in (stages[:2], stages[2:]):
        p.page_base("02 / Project Scope & Timelines")
        y = H - 92
        for st in pair:
            y = stage_block(p, st, y)
        p.end_page()

    p.page_base("02 / Project Scope & Timelines")
    p.label("Mid-November 2026", 36, H - 95)
    y = p.heading("Testing &amp; Launch", 36, H - 120, W - 72, 31, INK)
    y = p.paragraph("Included within the overall project timeline", 36, y - 7, W - 72, style(9, 12, BLUE)) - 20
    for para in ["The completed platform will be tested across its core workflows and relevant devices before launch. A staging environment will be used for review and User Acceptance Testing.", "Following completion of testing and agreed fixes, the platform will be prepared for production deployment and launch."]:
        y = p.paragraph(para, 36, y, W - 72, LEAD) - 18
    p.c.setFillColor(colors.HexColor("#e9eef4")); p.c.roundRect(36, y - 58, W - 72, 46, 5, fill=1, stroke=0)
    p.label("Deliverables", 50, y - 30); p.paragraph("Tested production-ready web application.", 130, y - 23, W - 180, style(9, 12, INK))
    y -= 92
    p.label("UAT", 36, y)
    p.paragraph("The project includes up to 2 consolidated rounds of UAT feedback and fixes during the staging phase. Bugs are limited to deviations from the approved designs or agreed functionality. New features, enhancements or changes in scope will be treated separately.", 36, y - 18, W - 72, BODY)
    p.end_page()

    p.page_base("03 / The Platform", dark=True)
    y = p.heading("The Platform", 36, H - 112, W - 72, 43, WHITE)
    y = p.paragraph("The proposed ConnectX platform is built around four connected experiences: the customer organising an event, vendors providing event services, venue owners managing their properties, and ConnectX operating the ecosystem between them.", 36, y - 22, W - 72, LEAD_DARK) - 13
    y = p.paragraph("The four experiences are connected through a common planning, enquiry, availability and negotiation system.", 36, y, W - 72, BODY_DARK) - 40
    p.label("System overview", 36, y, ACCENT)
    p.heading("The connected ecosystem", 36, y - 22, W - 72, 27, WHITE)
    cx, cy = W/2, 300
    p.c.setStrokeColor(colors.Color(1,1,1,.32)); p.c.setLineWidth(1)
    p.c.line(cx, cy + 70, cx, cy + 132); p.c.line(cx, cy - 70, cx, cy - 130); p.c.line(cx, cy - 130, 145, cy - 175); p.c.line(cx, cy - 130, W - 145, cy - 175)
    p.c.setFillColor(colors.HexColor("#1d2530")); p.c.roundRect(cx - 105, cy - 55, 210, 110, 4, fill=1, stroke=1)
    p.paragraph("CONNECTX", cx-80, cy+22, 160, style(18,20,WHITE,align=TA_CENTER))
    p.paragraph("Event planning &amp; vendor ecosystem", cx-80, cy-9, 160, style(10,13,colors.HexColor("#c1c6cc"),align=TA_CENTER))
    nodes = [("CUSTOMER","Plans & discovers",cx,cy+162),("VENDOR","Offers & responds",145,cy-205),("VENUE OWNER","Properties & negotiations",W-145,cy-205),("CONNECTX OPERATIONS","Coordinates & facilitates",cx,cy-285)]
    for title, sub, x, yy in nodes:
        p.paragraph(title, x-85, yy, 170, style(10,12,WHITE,align=TA_CENTER)); p.paragraph(sub, x-85, yy-21, 170, style(8,10,ACCENT,align=TA_CENTER))
    p.end_page()

    for i, item in enumerate(scope, 1):
        scope_page(p, i, item)

    p.page_base("04 / Phase One Boundaries", blue=True)
    p.heading("Phase One<br/>Boundaries", 36, H - 115, 250, 42, WHITE, 42)
    y = p.paragraph("Phase One is proposed as the foundation of the ConnectX platform. The system will be structured with future expansion in mind. Any subsequent phase or additional functionality will be scoped and commercialised separately.", 300, H - 112, W - 336, LEAD_DARK) - 28
    p.numbered_rows(boundaries, 300, y, W - 336, dark=True, size=8.7)
    p.end_page()

    p.page_base("05 / Proposed Tech Stack")
    p.heading("Proposed<br/>Tech Stack", 36, H - 120, 250, 43, INK, 43)
    p.numbered_rows(["Laravel", "Filament", "Livewire", "Alpine JS", "MYSQL"], 300, H - 118, W - 336, size=14)
    p.end_page()

    p.page_base("06 / Pricing & Milestones")
    p.heading("Pricing &amp;<br/>Milestones", 36, H - 120, 250, 43, INK, 43)
    y = p.paragraph("The total proposed price for Phase One of this project is <b><font color='#315f8f'>₹10,00,000 + GST.</font></b>", 300, H - 120, W - 336, style(16,21,INK)) - 14
    p.paragraph("The proposed payment structure consists of three milestones.", 300, y, W - 336, BODY)
    y = H - 385
    cols = [36, 255, 410, W-36]
    heads = ["MILESTONE","TIMELINE","PAYMENT"]
    p.rule(36,y,W-36)
    for i,h in enumerate(heads): p.label(h,cols[i],y-20,MUTED)
    rows = [("Initiation","31st August 2026","₹3,30,000 (33%)"),("Design Sign-off","Design completion / mid-project","₹3,30,000 (33%)"),("Project Go-live","Mid-November 2026","₹3,40,000 (34%)")]
    for row in rows:
        y -= 65; p.rule(36,y+30,W-36)
        p.paragraph(row[0],cols[0],y+18,cols[1]-cols[0]-12,style(10,13,INK)); p.paragraph(row[1],cols[1],y+18,cols[2]-cols[1]-12,BODY); p.paragraph(row[2],cols[2],y+18,cols[3]-cols[2],style(10,13,BLUE))
    p.rule(36,y-5,W-36)
    p.end_page()

    p.page_base("07 / Support & Maintenance")
    p.heading("Support &amp;<br/>Maintenance", 36, H - 120, 255, 42, INK, 42)
    p.numbered_rows(support, 300, H - 118, W - 336, size=9.3)
    p.end_page()

    for batch_index, batch in enumerate((terms[:4], terms[4:]), 1):
        p.page_base("08 / Terms & Assumptions")
        if batch_index == 1:
            p.heading("Terms &amp;<br/>Assumptions", 36, H - 120, 245, 41, INK, 41)
        y = H - 106
        x = 300 if batch_index == 1 else 36
        width = W - x - 36
        for idx, (title, body) in enumerate(batch, 1 if batch_index == 1 else 5):
            p.rule(x, y, x + width)
            p.c.setFillColor(BLUE); p.c.setFont(FONT,7.2); p.c.drawString(x,y-24,f"{idx:02d}")
            y = p.heading(title, x + 38, y - 14, width - 38, 15, INK, 17) - 9
            y = p.paragraph(body, x + 38, y, width - 38, style(8.6,12.3,MUTED)) - 18
        p.rule(x, y + 8, x + width)
        p.end_page()

    p.page_base("", dark=True)
    p.c.setFillColor(WHITE); p.c.setFont(FONT,16); p.c.drawString(36,H-60,"connectX"); p.c.setFont(FONT,7); p.c.drawString(81,H-72,"events")
    p.c.drawRightString(W-36,H-60,"ArtWorksIT")
    p.label("Proposal",36,H-170,ACCENT)
    p.heading("Proposed Wedding<br/>&amp; Corporate Event<br/>Planning Platform",36,H-205,W-72,47,WHITE,46)
    p.rule(36,190,W-36,colors.Color(1,1,1,.35))
    sig = ROOT / "public/uday-rathore-signature.png"
    p.c.drawImage(str(sig),36,91,135,74,mask="auto",preserveAspectRatio=True,anchor="sw")
    p.label("Prepared by",36,82,ACCENT); p.c.setFillColor(WHITE); p.c.setFont(FONT,14); p.c.drawString(36,59,"Uday Rathore")
    p.c.setFillColor(colors.HexColor("#c1c6cc")); p.c.setFont(FONT,9); p.c.drawString(185,64,"+91 87927 45204")
    p.end_page()
    p.finish()


if __name__ == "__main__":
    build()
