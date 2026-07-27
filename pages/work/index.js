import Image from 'next/image';
import Seo from '../../components/Seo/Seo';
import classes from '../../styles/Work.module.css';

const chapters = [
  { number: '01', href: '#friction', title: 'Why do fans keep asking?' },
  { number: '02', href: '#evidence', title: 'What does “unused” mean?' },
  { number: '03', href: '#repeatable', title: 'What should not happen again?' },
  { number: '04', href: '#participation', title: 'What makes someone return?' },
];

const repeatedSteps = [
  'Collect numbers from several places',
  'Clean and reconcile the files',
  'Rebuild the same comparisons',
  'Check that nothing moved',
];

export default function WorkPage() {
  const year = new Date().getFullYear();
  const title = 'How I Solve Problems — Selected Work by Bret Guice';
  const description = 'Four stories about Bret Guice using clearer information, better evidence, repeatable systems and meaningful participation to solve real problems.';

  return (
    <>
      <Seo title={title} description={description} path="/work" />

      <header className={classes.hero} aria-labelledby="work-title">
        <p className={classes.eyebrow}>Selected work</p>
        <h1 id="work-title">The first question is rarely the useful one.</h1>
        <div className={classes.heroLower}>
          <p className={classes.deck}>
            My work moves between ticketing, data, websites, communication, and
            student engagement. It usually begins with something visible: repeat
            calls, an attendance gap, a slow report, an empty section. I try not to
            fix it too quickly. The useful work begins when the question changes.
          </p>
          <p className={classes.issueNote}>
            <strong>Four stories about the work</strong>
            Not a complete archive.<br />
            The examples that best explain the thinking.
          </p>
        </div>
      </header>

      <figure className={classes.leadImage} aria-labelledby="lead-caption">
        <div className={classes.leadImageFrame}>
          <Image
            src="/images/work/gameday-setup.jpg"
            alt="An empty football stadium prepared for the Gator Bowl before fans arrive"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center 54%' }}
            sizes="(max-width: 800px) calc(100vw - 2rem), 1180px"
          />
        </div>
        <figcaption id="lead-caption">
          <strong>Before the gates open</strong>
          Months of work eventually become an empty venue waiting for people. If the
          planning was good, most of it will be invisible by the time they arrive.
        </figcaption>
      </figure>

      <nav className={classes.contents} aria-labelledby="contents-title">
        <div className={classes.contentsHeading}>
          <p className={classes.sectionLabel}>Inside this page</p>
          <h2 id="contents-title">Four moments when the question changed.</h2>
        </div>
        <ol className={classes.contentsList}>
          {chapters.map((chapter) => (
            <li key={chapter.number}>
              <a href={chapter.href}>
                <span className={classes.storyNumber}>{chapter.number}</span>
                <span className={classes.storyTitle}>{chapter.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <article className={classes.article}>
        <section className={classes.questionChapter} id="friction" aria-labelledby="friction-title">
          <div className={classes.chapterMarker}>
            <span>01</span>
            <p>Information</p>
          </div>

          <blockquote className={classes.questionStage} aria-label="Questions fans regularly asked">
            <p>Where do I park?</p>
            <p>How do mobile tickets work?</p>
            <p>What can I bring inside?</p>
          </blockquote>

          <div className={classes.storyCopy}>
            <p className={classes.kicker}>Louisiana Tech digital experience</p>
            <h2 id="friction-title">The same questions kept reaching the ticket office.</h2>
            <p className={classes.standfirst}>The useful moment came when I stopped hearing each call as a separate request.</p>
            <p>Fans were calling because the answer was buried, split across pages, or written for someone who already understood our process. I could have added another FAQ. That would have given us more words without making the path clearer.</p>
            <p>Instead, I started with what the fan was trying to do: plan a visit, manage a ticket, get into the venue. I grouped information around those decisions and rebuilt Ticket Central and the Fan Help Center as routes through game day—not storage for policies.</p>
            <p>The pages became quieter. Internal language gave way to plain language. The next step moved closer to the moment someone needed it—often a family solving one last question before leaving home.</p>
            <p className={classes.takeaway}>Better information is part of the experience.</p>
          </div>
        </section>

        <aside className="featuredArticle" aria-labelledby="featured-article-title">
          <div className="featuredArticleInner">
            <div className="featuredArticleMeta">
              <span>Featured by Louisiana Tech Athletics</span>
              <strong>Louisiana Tech Athletics</strong>
              <time dateTime="2026-07-27">July 27, 2026</time>
            </div>
            <div className="featuredArticleContent">
              <h2 id="featured-article-title">Louisiana Tech Athletics Continues Elevating the Digital Fan Experience</h2>
              <p>
                Louisiana Tech highlighted the work behind its expanding fan-facing digital resources,
                including redesigned ticket information, game-day guides, parking and seating resources,
                and new ways to help fans find a clearer path through the athletics website.
              </p>
              <a
                href="https://latechsports.com/news/2026/7/27/general-louisiana-tech-athletics-continues-elevating-the-digital-fan-experience"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the feature <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </aside>

        <section className={classes.dataChapter} id="evidence" aria-labelledby="evidence-title">
          <div className={classes.dataInner}>
            <div className={classes.chapterMarkerLight}>
              <span>02</span>
              <p>Evidence</p>
            </div>
            <div className={classes.discovery}>
              <p className={classes.kicker}>The first surprise</p>
              <blockquote>The number was right. The question was wrong.</blockquote>
            </div>
            <div className={classes.dataCopy}>
              <h2 id="evidence-title">“Unused” was hiding several different stories.</h2>
              <p>Compare tickets distributed with tickets scanned and a clean gap appears. But a sponsor allocation, a broker-held seat, and a season-ticket holder missing one game all land inside it. They share a total, not a cause.</p>
              <p>I chose to break the number apart. The result was less tidy and more useful. Sponsor use, broker strategy, and ticket-holder behavior could finally have separate conversations.</p>
              <p>The surprise was not that the data changed. It did not. Separating the accounts changed what the data allowed us to ask—and what we could do next.</p>
              <p className={classes.takeawayLight}>A clean number can hide a messy decision.</p>
            </div>
          </div>
        </section>

        <section className={classes.systemChapter} id="repeatable" aria-labelledby="repeatable-title">
          <div className={classes.systemVisual}>
            <figure aria-labelledby="field-caption">
              <div className={classes.workflowArtifact}>
                <div className={classes.artifactHeader}>
                  <span>Weekly football report</span>
                  <span>Recurring build</span>
                </div>
                <ol aria-label="The repeated reporting process">
                  {repeatedSteps.map((step) => <li key={step}>{step}</li>)}
                </ol>
                <p>Same four steps. Every week.</p>
              </div>
              <figcaption id="field-caption">
                <strong>The work before the work</strong>
                Writing down the repeated steps made the real problem visible before
                I tried to automate it.
              </figcaption>
            </figure>
          </div>

          <div className={classes.systemStory}>
            <div className={classes.chapterMarkerInline}>
              <span>03</span>
              <p>Systems</p>
            </div>
            <p className={classes.kicker}>Football reporting</p>
            <h2 id="repeatable-title">A weekly report should not have to be rebuilt every week.</h2>
            <p className={classes.standfirst}>The report was useful. Producing it had quietly become a second job.</p>

            <p>My first thought was automation. That was too early.</p>
            <p>I decided to map the steps before changing them. Some protected the report. Others survived only because the file had grown around them. Automating both would have made the same complicated process run faster.</p>
            <p>Only then did I use formulas and scripts for the predictable work. The result was not a new dashboard. It was a calmer week, fewer places for mistakes to hide, and more time to read the report.</p>
            <p className={classes.takeaway}>A good system removes repetition without removing judgment.</p>
          </div>
        </section>

        <section className={classes.experienceChapter} id="participation" aria-labelledby="participation-title">
          <figure className={classes.experienceFigure} aria-labelledby="arena-caption">
            <div className={classes.experienceImage}>
              <Image
                src="/images/work/participation-tech.jpg"
                alt="Louisiana Tech students painted blue with letters across their chests stand together at a football game"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 760px) calc(100vw - 2rem), 760px"
              />
            </div>
            <figcaption id="arena-caption">
              Painted Blue during my time as a Louisiana Tech student. The visible
              tradition gave students a role—and gave everyone nearby a clear way to
              join the section.
            </figcaption>
          </figure>

          <div className={classes.experienceInner}>
            <div className={classes.chapterMarker}>
              <span>04</span>
              <p>Participation</p>
            </div>
            <div className={classes.experienceCopy}>
              <p className={classes.kicker}>Student experience</p>
              <h2 id="participation-title">A ticket can get someone inside. It cannot make them belong.</h2>
              <p className={classes.standfirst}>I kept returning to a memory from college: The Blue lasted because people found a role inside it.</p>
              <p>The paint and traditions got attention. What made people return was simpler. They knew where to stand, who would notice them, and how they could become part of the group.</p>
              <p>That changed my question from “How do we get students inside?” to “What gives them a reason to come back?” I approached student tickets and Your Tech Journey as invitations: make the first visit less uncertain, offer something recognizable to join, then leave room for students to carry it forward.</p>
              <p>A filled section is easy to see. A student deciding it feels like their section is harder to measure—and more important.</p>
              <p className={classes.takeaway}>Participation begins when people can see a role for themselves.</p>
            </div>

            <figure className={classes.scaleFigure} aria-labelledby="scale-caption">
              <div className={classes.scaleImage}>
                <Image
                  src="/images/work/participation-scale.jpg"
                  alt="A wide line of Louisiana Tech students painted blue stands at the front of the football student section"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="(max-width: 760px) calc(100vw - 2rem), 680px"
                />
              </div>
              <figcaption id="scale-caption">
                A tradition becomes durable when the people who inherit it make it
                larger than the people who started it.
              </figcaption>
            </figure>
          </div>
        </section>
      </article>

      <section className={classes.closing} aria-labelledby="closing-title">
        <div className={classes.closingInner}>
          <p className={classes.sectionLabel}>What comes next</p>
          <h2 id="closing-title">Every answer changes the next question.</h2>
          <p>A clearer page changes what people ask. A better report exposes the next gap. A stronger experience makes the next one harder to settle for.</p>
          <p>That unfinished part keeps the work interesting: not having every answer, but learning to notice a better question than the one I started with.</p>
        </div>
      </section>

      <footer className={classes.footer}>
        <div className={classes.footerInner}>
          <p>© {year} Bret Guice</p>
        </div>
      </footer>

      <style jsx>{`
        .featuredArticle {
          background: var(--white);
        }

        .featuredArticleInner {
          width: min(calc(100% - 3rem), var(--page));
          margin: 0 auto;
          padding: 0 0 clamp(5rem, 10vw, 9rem);
          display: grid;
          grid-template-columns: minmax(180px, .42fr) minmax(0, 1.58fr);
          gap: clamp(2rem, 6vw, 6rem);
          border-top: 1px solid var(--ink);
        }

        .featuredArticleMeta,
        .featuredArticleContent {
          padding-top: clamp(2rem, 4vw, 3.5rem);
        }

        .featuredArticleMeta {
          color: var(--muted);
          font-size: .78rem;
          line-height: 1.65;
        }

        .featuredArticleMeta span {
          display: block;
          margin-bottom: 1rem;
          color: var(--orange);
          font-size: .66rem;
          font-weight: 800;
          letter-spacing: .14em;
          text-transform: uppercase;
        }

        .featuredArticleMeta strong,
        .featuredArticleMeta time {
          display: block;
        }

        .featuredArticleMeta strong {
          color: var(--ink);
        }

        .featuredArticleContent {
          border-bottom: 1px solid var(--line);
          padding-bottom: clamp(2rem, 4vw, 3.5rem);
        }

        .featuredArticleContent h2 {
          max-width: 790px;
          margin: 0 0 1.3rem;
          font-family: var(--serif);
          font-size: clamp(2rem, 4.1vw, 4rem);
          font-weight: 400;
          letter-spacing: -.045em;
          line-height: 1.02;
        }

        .featuredArticleContent p {
          max-width: 720px;
          margin: 0 0 1.6rem;
          color: var(--muted);
          font-family: var(--serif);
          font-size: clamp(1.06rem, 1.55vw, 1.25rem);
          line-height: 1.65;
        }

        .featuredArticleContent a {
          display: inline-flex;
          align-items: center;
          gap: .65rem;
          padding-bottom: .35rem;
          color: var(--blue);
          border-bottom: 1px solid var(--blue);
          font-size: .75rem;
          font-weight: 800;
          letter-spacing: .11em;
          text-decoration: none;
          text-transform: uppercase;
        }

        .featuredArticleContent a:hover {
          color: var(--orange);
          border-color: var(--orange);
        }

        @media (max-width: 900px) {
          .featuredArticleInner {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .featuredArticleMeta {
            max-width: 360px;
          }
        }

        @media (max-width: 760px) {
          .featuredArticleInner {
            width: min(calc(100% - 2rem), var(--page));
          }
        }
      `}</style>
    </>
  );
}
