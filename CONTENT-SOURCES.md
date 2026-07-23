# Content sources

Every factual claim on this site traces to one of the sources below. This file
exists so anyone editing `src/content/site.ts` can check a statement before
publishing it.

**The rule:** if it isn't sourced here, it doesn't go on the site. An attorney's
website is legal advertising. Unverifiable statements about results, experience,
or credentials are the category most likely to draw a bar complaint.

## Primary sources

| #   | Source                                                                                                 | URL                                                                                                                      |
| --- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| S1  | Serious Injury Law Group — attorney profile                                                            | <https://www.seriouslawyers.com/attorneys/brandon-price-crum/>                                                           |
| S2  | The Recap Report — "Attorney Brandon Price-Crum Is Fighting for More Than Just Verdicts", 20 July 2026 | <https://therecapreport.com/article/attorney-brandon-price-crum-is-fighting-for-more-than-just-verdicts>                 |
| S3  | WSFA 12 News — ATV crash coverage, 10 September 2025                                                   | <https://www.wsfa.com/2025/09/11/atv-crash-that-killed-mom-dad-injured-7-children-couldve-been-prevented-attorney-says/> |
| S4  | Super Lawyers — profile                                                                                | <https://profiles.superlawyers.com/alabama/hoover/lawyer/brandon-m-price-crum/b90da0a3-0584-4eeb-834a-ab3ccecaff05.html> |
| S5  | brandonpricecrum.com (previous site)                                                                   | <https://www.brandonpricecrum.com/>                                                                                      |

## Claim → source

| Claim on the site                                                                                    | Source                                  |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Trial attorney / partner, Serious Injury Law Group, P.C.                                             | S1, S2                                  |
| Licensed in Alabama and Georgia                                                                      | S1, S4                                  |
| Juris Doctor, Florida A&M University College of Law, 2018                                            | S1, S4                                  |
| B.A., Alabama State University, magna cum laude, Academic Excellence Scholarship                     | S1                                      |
| Adjunct instructor, Alabama State University                                                         | S1                                      |
| Super Lawyers Rising Stars, 2022–2026                                                                | S4                                      |
| The National Black Lawyers Top 40 Under 40                                                           | S5, award visible in office photography |
| The National Trial Lawyers Top 100                                                                   | S1                                      |
| Top Attorneys in the Mid-South, Rising Stars 2022                                                    | Award visible in office photography     |
| AAJ / ALAJ memberships                                                                               | S1                                      |
| Practice areas                                                                                       | S1, S4                                  |
| Firm offices: Montgomery, Birmingham, Atlanta, Thomasville                                           | S2                                      |
| Office address, Hoover AL                                                                            | S4                                      |
| Phone 404-904-4506, connect@brandonpricecrum.com                                                     | S5                                      |
| Social handles                                                                                       | S5                                      |
| Founded Gifted Gardeners, NABCJ chapter, Alpha Phi Sigma; SGA Supreme Court; Chief Golden Ambassador | S1                                      |
| Clerkships in Montgomery, Fayette, Fulton counties; Orange County Attorney intern                    | S1                                      |
| Great-grandfather: sharecropper, first Black county commissioner in Butler County, AL                | S2                                      |
| Core values: transparency, determination, integrity                                                  | S2                                      |
| All quotations in `quotes`                                                                           | S2                                      |
| Thurgood Marshall / civil rights attorneys as influences                                             | S2                                      |
| Did not meet a lawyer until his senior year of college                                               | S2                                      |
| Father; six-year-old son interested in law                                                           | S2                                      |
| Contingency model as an access-to-justice mechanism                                                  | S2                                      |
| Firm hired staff who can work with clients in multiple languages                                     | S2                                      |
| Rebuttal of the "ambulance chaser" characterization                                                  | S2                                      |
| Mentorship / encouraging young people into the profession                                            | S2                                      |
| Quinton Ross endorsement                                                                             | S5                                      |
| Outlets in `pressOutlets`                                                                            | S5 (named as coverage on his own site)  |

## Removed in this rebuild

The previous generated build contained the following, none of which appears in
any source. All of it has been deleted:

- **"10+ Years in Practice"** — he was admitted in 2018, so the figure was wrong
  as well as unsourced.
- **"$MM Recovered for Clients"** — no documented figure exists, and unqualified
  results claims are heavily restricted in attorney advertising.
- **"Client Rated" five-star badge** — no review source.
- **Six invented media appearances** — "The Legal Leaders Podcast," "Mid-South
  Attorneys Journal," an "ASU Alumni Speaker Series" panel, a "FAMU Law Alumni
  Weekend" keynote, and two others, each with a fabricated title and date.
- **A forthcoming book** — an entire homepage section and media entry for a book
  that is not referenced anywhere.
- **"Small-town roots"** — his family roots are in Butler County, Alabama, but
  the firm bio places his birth in Flint, Michigan.
- **Invented pull quotes** — including "Prepare like it's trial. Every time."
  and a paragraph-long quotation about affording a lawyer, neither of which he
  is recorded as saying. Every quote on the site now carries a named publication.
- **"Rising Stars 2024"** — the actual Super Lawyers selection runs 2022–2026.

## Still to confirm with the client

- **Martin Luther King Jr. Leadership Award** — an award of this name is visible
  in his office photography (dated May 2015), and the previous build listed it.
  The awarding body could not be confirmed, so it is **not** currently published.
  Add it to `credentials` in `src/content/site.ts` once the issuer is known.
- **Broadcast logos** — WSFA and the other outlets are currently set as
  typographic wordmarks. Using a broadcaster's actual mark needs their
  permission; once cleared, drop SVGs into `OutletWall` in `src/routes/media.tsx`.
- **Additional coverage** — only two press items could be independently verified.
  Greenville Standard, Greenville Advocate, and Montgomery Advertiser are named
  on his old site but the specific articles weren't locatable; they appear in the
  "featured by" row without links. Supply URLs and they can become full entries.
- **Headshot for social sharing** — `og:image` currently points at
  `navy-headshot`. Swap if he prefers a different frame.
