import Head from 'next/head';
import Image from 'next/image';
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
  const description = 'Four stories about how Bret Guice questions assumptions, finds the real problem, and builds more useful systems and experiences.';

  return (
    <>
      <Head>
        <title>Selected Work — Bret Guice</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#f5f2eb" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://bretguice.com/work" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Selected Work — Bret Guice" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://bretguice.com/work" />
        <meta name="twitter:card" content="summary" />
      </Head>

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
          <figure className={classes.experienceImage} aria-labelledby="arena-caption">
            <Image
              src="/images/work/participation-tech.jpg"
              alt="Four Louisiana Tech students with T E C H painted across their chests raise their arms with the crowd"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center 44%' }}
              sizes="100vw"
            />
            <figcaption id="arena-caption">Four letters gave four students a role. The tradition gave everyone nearby a way to join them.</figcaption>
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
                  alt="Louisiana Tech students gather around a large university flag in a crowded football section"
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
    </>
  );
}
