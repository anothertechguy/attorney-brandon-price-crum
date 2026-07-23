/**
 * Single source of truth for every word on the site.
 *
 * Ground rule: nothing in this file is invented. Each claim traces to one of the
 * sources listed in CONTENT-SOURCES.md at the repo root. If a fact cannot be
 * sourced, it does not belong here — an attorney's site is advertising, and
 * unverifiable claims about results or credentials carry real bar-rule risk.
 *
 * Anything still awaiting client confirmation is marked `UNVERIFIED:` in a
 * comment rather than being quietly published.
 */

export const site = {
  name: "Brandon Price-Crum",
  formalName: "Brandon Price-Crum, Esq.",
  role: "Trial Attorney",
  firm: "Serious Injury Law Group, P.C.",
  firmShort: "Serious Injury Law Group",
  firmUrl: "https://www.seriouslawyers.com/attorneys/brandon-price-crum/",
  // His own long-running handle and self-description across every platform.
  moniker: "The Serious Lawyer",
  url: "https://www.brandonpricecrum.com",
  tagline: "Standing in the gap between a wrong and a remedy.",
  description:
    "Brandon Price-Crum is a trial attorney with Serious Injury Law Group, representing people and families in personal injury, wrongful death, and civil rights matters across Alabama and Georgia.",
} as const;

export const contact = {
  phone: "404-904-4506",
  phoneHref: "tel:+14049044506",
  email: "connect@brandonpricecrum.com",
  emailHref: "mailto:connect@brandonpricecrum.com",
  firmPhone: "1-855-SERIOUS",
  office: {
    label: "Serious Injury Law Group, P.C.",
    street: "One Chase Corporate Drive, Suite 150",
    city: "Hoover",
    state: "AL",
    zip: "35244",
  },
  /** Firm office cities — from the July 2026 Recap Report profile. */
  cities: ["Montgomery, AL", "Birmingham, AL", "Atlanta, GA", "Thomasville, GA"],
} as const;

export const socials = [
  {
    label: "Instagram",
    handle: "@theseriouslawyer",
    href: "https://www.instagram.com/theseriouslawyer",
  },
  {
    label: "LinkedIn",
    handle: "in/brandonpricecrum",
    href: "https://www.linkedin.com/in/brandonpricecrum/",
  },
  { label: "X", handle: "@attorneybpc", href: "https://twitter.com/attorneybpc" },
  { label: "YouTube", handle: "@AttorneyBPC", href: "https://www.youtube.com/@AttorneyBPC" },
  {
    label: "Facebook",
    handle: "Attorney Brandon Price-Crum",
    href: "https://www.facebook.com/people/Attorney-Brandon-Price-Crum/61550741924893/",
  },
] as const;

/** Verified credentials. Years are only shown where a source states them. */
export const credentials = [
  {
    title: "Rising Stars",
    issuer: "Super Lawyers",
    detail: "Selected 2022–2026",
  },
  {
    title: "Top 40 Under 40",
    issuer: "The National Black Lawyers",
    detail: "Nationwide recognition for trial attorneys under 40",
  },
  {
    title: "Top 100 Trial Lawyers",
    issuer: "The National Trial Lawyers",
    detail: "Invitation-only membership",
  },
  {
    title: "Top Attorneys in the Mid-South",
    issuer: "Rising Stars",
    detail: "2022",
  },
] as const;

export const memberships = [
  "American Association for Justice (AAJ)",
  "Alabama Association for Justice (ALAJ)",
  "The National Trial Lawyers",
] as const;

export const education = [
  {
    school: "Florida A&M University College of Law",
    degree: "Juris Doctor",
    detail: "2018 · Attended on academic scholarship",
  },
  {
    school: "Alabama State University",
    degree: "Bachelor of Arts",
    detail: "Magna Cum Laude · Academic Excellence Scholarship",
  },
] as const;

export const barAdmissions = ["Alabama", "Georgia"] as const;

/**
 * Practice areas, taken from his firm profile and Super Lawyers listing.
 * Descriptions are plain-language and avoid any promise of outcome.
 */
export const practiceAreas = [
  {
    id: "injury",
    title: "Serious Injury",
    blurb:
      "Car, motorcycle, and commercial trucking collisions where the injuries — and the medical bills that follow — reshape a family's life.",
  },
  {
    id: "wrongful-death",
    title: "Wrongful Death",
    blurb:
      "Careful, unhurried representation for families who have lost someone, and who need the full account of what happened.",
  },
  {
    id: "malpractice",
    title: "Medical Malpractice",
    blurb:
      "Claims involving negligent care, missed diagnoses, and the institutional failures that allowed them to happen.",
  },
  {
    id: "premises",
    title: "Premises & Nursing Home",
    blurb:
      "Unsafe properties and neglect in the facilities families trusted to look after the people they love.",
  },
  {
    id: "products",
    title: "Products Liability",
    blurb:
      "Defective and unreasonably dangerous products, and the companies that put them into circulation.",
  },
  {
    id: "civil-rights",
    title: "Civil Rights",
    blurb:
      "Holding individuals, businesses, institutions, and government agencies accountable when their conduct causes harm.",
  },
] as const;

/**
 * Verified quote bank. Every one is a direct quotation with a named publication
 * — no composed or paraphrased "signature lines."
 *
 * Intentionally larger than what the pages currently render: these are all
 * cleared for use, so swapping one into a section is a one-line change and
 * never requires sourcing a new claim.
 */
export const quotes = {
  calling: {
    text: "The law is a calling. For me, it has also been a vehicle to do some of the dynamic work within the community and within society that I've always wanted to do.",
    source: "The Recap Report",
    year: "2026",
  },
  gap: {
    text: "Lawyers stand in the gap between people's life and their liberty. Lawyers stand in the gap between right and wrong. Lawyers stand in the gap between a wrong and a remedy.",
    source: "The Recap Report",
    year: "2026",
  },
  heard: {
    text: "They want somebody who hears them. They want somebody who is going to stand beside them through the process and guide them through the process.",
    source: "The Recap Report",
    year: "2026",
  },
  worstDay: {
    text: "People don't come to us on their best day. They come to us on their worst day, and we have to shoulder that burden for them.",
    source: "The Recap Report",
    year: "2026",
  },
  notChasing: {
    text: "I don't chase any case. A case that comes to me comes to me because a family is in need. It is the worst day of their life.",
    source: "The Recap Report",
    year: "2026",
  },
  institutions: {
    text: "One of the things that is important to me is building institutions and building opportunities for others.",
    source: "The Recap Report",
    year: "2026",
  },
  commitment: {
    text: "If I take on your case, I'm going to fight for you. I'm going to stay up late nights. I'm going to stay up on weekends.",
    source: "The Recap Report",
    year: "2026",
  },
  nextGeneration: {
    text: "We need you to become a lawyer. We need more voices. We need more diversity. We need more people who are passionate about different communities and different issues.",
    source: "The Recap Report",
    year: "2026",
  },
  inTheRoom: {
    text: "You are not just sitting on the sideline hoping to get an opportunity. Once you get in that room, once you get on that committee and once you get on that board, you have the power to say what needs to be said.",
    source: "The Recap Report",
    year: "2026",
  },
  leadership: {
    text: "My leadership style is that I'm at the front of the chariot, on the ropes, pulling it. You're walking with me, and we're walking together.",
    source: "The Recap Report",
    year: "2026",
  },
  stillTheFight: {
    text: "We can watch documentaries from 50, 60 or 70 years ago, and we are still in the same fight today.",
    source: "The Recap Report",
    year: "2026",
  },
} as const;

/** Third-party endorsement quoted on brandonpricecrum.com. */
export const endorsement = {
  text: "I was intrigued by Brandon's commitment to providing opportunities for people within the community.",
  attribution: "Quinton Ross, Ph.D.",
  title: "President, Alabama State University",
} as const;

/** His stated core values — his words, from the Recap Report interview. */
export const values = [
  {
    n: "01",
    title: "Transparency",
    body: "Plain answers about where a case stands, what it is worth, and what comes next — even when the answer is not the one anyone wanted.",
  },
  {
    n: "02",
    title: "Determination",
    body: "Files built carefully and early, so the other side is dealing with a case that is ready rather than one still being assembled.",
  },
  {
    n: "03",
    title: "Integrity",
    body: "Cases taken because a family needs help, not because a file looked profitable.",
  },
  {
    n: "04",
    title: "Service",
    body: "Leadership from the front — carrying the same weight as the team, and walking with clients rather than ahead of them.",
  },
] as const;

/**
 * Media appearances. Only entries with a real, checkable source appear here.
 * `href` is omitted where the outlet is named on his own site but the specific
 * segment has not been located — those render without a link rather than
 * fabricating one.
 */
export const mediaFeatures = [
  {
    outlet: "The Recap Report",
    kind: "Feature Interview",
    title: "Attorney Brandon Price-Crum Is Fighting for More Than Just Verdicts",
    dek: "A long-form profile by Tajala Kelly on service-centered leadership, civil rights work, and making justice more accessible.",
    date: "July 2026",
    href: "https://therecapreport.com/article/attorney-brandon-price-crum-is-fighting-for-more-than-just-verdicts",
    photo: "navy-seated-smiling",
  },
  {
    outlet: "WSFA 12 News",
    kind: "Television",
    title:
      "ATV crash that killed mom, dad and injured 7 children could've been prevented, attorney says",
    dek: "Representing four of the seven surviving children, Price-Crum discusses rule enforcement and emergency planning.",
    date: "September 2025",
    href: "https://www.wsfa.com/2025/09/11/atv-crash-that-killed-mom-dad-injured-7-children-couldve-been-prevented-attorney-says/",
    photo: "navy-headshot",
  },
] as const;

/**
 * Outlets that have covered or featured him, listed on brandonpricecrum.com.
 * Rendered as set wordmarks — no logo files were supplied, and using a
 * broadcaster's real mark without permission is its own problem.
 */
export const pressOutlets = [
  { name: "WSFA 12 News", note: "Montgomery, AL" },
  { name: "Montgomery Advertiser", note: "Alabama" },
  { name: "The Greenville Advocate", note: "Alabama" },
  { name: "The Greenville Standard", note: "Alabama" },
  { name: "The Recap Report", note: "Atlanta, GA" },
] as const;

/** Biography, assembled only from sourced material. */
export const bio = {
  lede: "Brandon Price-Crum is a trial attorney and partner with Serious Injury Law Group, representing people and families in personal injury, wrongful death, and civil rights matters across Alabama and Georgia.",
  paragraphs: [
    "He came into the profession by way of Alabama State University, where he graduated magna cum laude on an Academic Excellence Scholarship, and Florida A&M University College of Law, which he attended on academic scholarship and where he earned his Juris Doctor in 2018. FAMU Law's mission — that legal training is something you take back to your community — became the through-line of his practice.",
    "At Alabama State he founded student organizations including Gifted Gardeners, a chapter of the National Association for Blacks in Criminal Justice, and Alpha Phi Sigma. He led the Student Government Association Supreme Court and served as Chief Golden Ambassador. He clerked in Montgomery, Fayette, and Fulton counties and interned with the Orange County Attorney's office, and he returns to ASU today as an adjunct instructor.",
    "His practice covers collisions involving cars, motorcycles, and commercial trucks, along with wrongful death, nursing home neglect, premises liability, products liability, and medical malpractice — and, increasingly, civil rights matters. Much of that work means standing between a grieving family with limited resources and an institution with considerable ones.",
    "He credits his family for the way he approaches it. His great-grandfather began as a sharecropper and became the first Black county commissioner in Butler County, Alabama — a demonstration, as he tells it, of what someone can do with a position once they hold one. He also points to Thurgood Marshall and the civil rights attorneys who used the law to defend communities that had been denied a voice.",
    "He did not personally meet a lawyer until his senior year of college. Most of what he understood about the profession until then came from watching attorneys on television — which is a large part of why he now teaches, mentors, and talks openly about the path. He is a father, and his six-year-old son has already said he wants to be an attorney too.",
  ],
} as const;

/**
 * How the practice works in ways that matter to clients but are not claims
 * about outcomes. Sourced from the 2026 Recap Report interview.
 */
export const accessPoints = [
  {
    title: "No fee unless there is a recovery",
    body: "Matters are handled on contingency. There is no charge for the consultation and no attorney's fee unless the case results in a recovery — which is often what makes it possible to challenge a well-funded institution at all.",
  },
  {
    title: "Staffed to be understood",
    body: "The firm has hired staff from a range of backgrounds who can work with clients in more than one language, so that understanding your own rights does not depend on which language you speak.",
  },
  {
    title: "Cases come in, they are not chased",
    body: "Personal injury lawyers get called ambulance chasers. His answer is that a file arrives because a family needs help on the worst day of their life — and that the remedy should not stop at a settlement when a practice or a system caused the harm.",
  },
] as const;

/**
 * The mentorship and civil rights thread from the Recap Report interview — the
 * part of his story that is about the profession rather than any one case.
 */
export const legacy = {
  eyebrow: "Beyond the verdict",
  title: "Getting more people into the room.",
  lede: "Attorneys become elected officials, policymakers, board members — the people who write the rules. He is unusually direct about wanting more of them to come from communities that have historically had no say in those rooms.",
  points: [
    "Adjunct instructor at Alabama State University, where he also founded student organizations as an undergraduate.",
    "Speaks with students and young professionals about law school, access, and what the work actually involves.",
    "Continues to take civil rights matters alongside the injury practice.",
  ],
} as const;

/**
 * Facts stated plainly, without invented figures.
 * Deliberately excluded: dollar amounts recovered, case counts, and years in
 * practice — none are documented in any available source, and results-based
 * claims are the most heavily regulated statements an attorney can publish.
 */
export const factStrip = [
  { k: "2018", v: "Juris Doctor, FAMU Law" },
  { k: "AL · GA", v: "Licensed in two states" },
  { k: "2022–26", v: "Super Lawyers Rising Stars" },
  { k: "Top 40", v: "Under 40 · Nat'l Black Lawyers" },
] as const;
