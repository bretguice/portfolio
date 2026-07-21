import Image from 'next/image';
import Seo, { SITE_DESCRIPTION } from '../components/Seo/Seo';
import classes from '../styles/Home.module.css';

const questions = [
  'Why do we do it this way?',
  'Is there a better way?',
  'Can I learn enough to improve it myself?',
];

const examples = [
  {
    label: 'Analytics',
    text: 'Breaking attendance into smaller groups showed that unused tickets did not all have the same cause. That made the next conversation more useful than “we need a bigger crowd.”',
  },
  {
    label: 'Digital work',
    text: 'When fans kept needing help finding information, I started rebuilding the path instead of writing one more message explaining where to click.',
  },
];

export default function HomePage() {
  const year = new Date().getFullYear();
  const title = 'Bret Guice — Strategy, Systems and Meaningful Experiences';
  const description = SITE_DESCRIPTION;

  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/"
        openGraphType="profile"
        pageType="ProfilePage"
      />

      <section className={classes.hero} aria-labelledby="page-title">
        <div>
          <p className={classes.eyebrow}>About Bret</p>
          <h1 id="page-title">
            Most of my work starts with one question: <em>Why?</em>
          </h1>
          <p className={classes.heroDeck}>
            I work in college athletics. That has led me into ticketing, data, email,
            websites, and student engagement—usually because the problem did not fit
            neatly inside one job description.
          </p>
        </div>

        <aside className={classes.atAGlance} aria-label="Bret at a glance">
          <strong>At a glance</strong>
          Ruston, Louisiana<br />
          Louisiana Tech Athletics<br />
          Ticketing · Fan experience · Digital work
        </aside>
      </section>

      <article className={classes.article}>
        <section className={`${classes.storySection} ${classes.opening}`} aria-labelledby="moment-title">
          <div className={classes.sideNote}>
            <strong>A favorite moment</strong>
            After kickoff<br />
            Joe Aillet Stadium
          </div>
          <div className={classes.copy}>
            <h2 id="moment-title">After kickoff, I stop and look around.</h2>
            <p>On game days, I try to find a minute after the game starts. The gates are quiet. Families are in their seats. Students are making noise. Somewhere, a kid is watching a favorite player in person for the first time.</p>
            <p>A few minutes earlier, we were answering questions and solving the last problems. Now all of that has faded into the background. I can see what the work was for.</p>
            <p>That is why I like ticketing. Selling the ticket matters, but the better part comes after someone walks through the gate. The ticket gave them a reason to be there. Everything else we build—an email, a web page, a student program, a smoother process—should make that decision easier.</p>
          </div>
        </section>

        <figure className={`${classes.visualChapter} ${classes.audienceChapter}`} aria-labelledby="fan-view-caption">
          <div className={classes.audienceInner}>
            <div className={classes.audienceImage}>
              <Image
                src="/images/about/fan-view.jpg"
                alt="Two young fans raise their hands while watching a Louisiana Tech basketball game from the stands"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 48%' }}
                sizes="(max-width: 800px) calc(100vw - 2rem), 1180px"
              />
            </div>
            <figcaption className={classes.visualCaption} id="fan-view-caption">
              <strong>Chapter 01 · The view from the other side</strong>
              A Louisiana Tech basketball game from a few rows up. When the work turns into reports, revenue goals, and web pages, this is the view I try to remember. Somebody is on the other side of the system, having the experience.
            </figcaption>
          </div>
        </figure>

        <section className={classes.questions} aria-labelledby="questions-title">
          <div className={classes.questionsInner}>
            <p className={classes.sectionLabel}>The questions behind the work</p>
            <h2 id="questions-title">The subject changes. My starting point rarely does.</h2>
            <ol className={classes.questionList}>
              {questions.map((question) => <li key={question}>{question}</li>)}
            </ol>
          </div>
        </section>

        <figure className={`${classes.visualChapter} ${classes.originChapter}`} aria-labelledby="super-t-caption">
          <div className={classes.visualChapterInner}>
            <div className={classes.originImage}>
              <Image
                src="/images/about/super-t.jpg"
                alt="Bret painted blue with a large T on his chest, wearing shoulder pads beneath a bright sky"
                width={453}
                height={604}
                sizes="(max-width: 800px) calc(100vw - 2rem), 590px"
              />
            </div>
            <figcaption className={classes.visualCaption} id="super-t-caption">
              <strong>Chapter 02 · Before the job</strong>
              The “T” was passed down by the student who wore it before me. The paint and shoulder pads look theatrical now. At the time, they gave a quiet person a role—and gave other students one more reason to join the experience.
            </figcaption>
          </div>
        </figure>

        <section className={classes.storySection} aria-labelledby="learning-title">
          <div className={classes.sideNote}>
            <strong>Learning as a tool</strong>
            Curiosity is useful when it produces movement.
          </div>
          <div className={classes.copy}>
            <h2 id="learning-title">The problem usually decides what I learn next.</h2>
            <p>I did not learn web development because I planned to become a developer. I learned after losing a job and having time to notice how often an idea stopped at “we would need someone to build that.” I wanted to know whether I could get it to a first version myself.</p>
            <p>Data started the same way. An unscanned ticket looks like one attendance problem until you separate sponsor allocations, broker-held seats, and other account types. Then one number becomes several problems, each needing a different response. The useful part was not producing another report. It was changing the question we were asking.</p>
            <blockquote className={classes.pullQuote}>Usually, I am not trying to master a new field. I am trying to learn enough to get unstuck.</blockquote>
            <p>That is also how I think about technology. If a new tool makes the work harder to explain or maintain, it probably has not solved much.</p>

            <ul className={classes.evidence} aria-label="More examples of this approach">
              {examples.map(({ label, text }) => (
                <li key={label}><strong>{label}</strong><span>{text}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <figure className={`${classes.visualChapter} ${classes.sharedChapter}`} aria-labelledby="gator-caption">
          <div className={classes.visualChapterInner}>
            <div className={classes.sharedImage}>
              <Image
                src="/images/about/gator-bowl.jpg"
                alt="Bret and his wife smiling together on the football field after the Gator Bowl, with the stadium crowd behind them"
                width={682}
                height={1023}
                sizes="(max-width: 800px) calc(100vw - 2rem), 650px"
              />
            </div>
            <figcaption className={classes.visualCaption} id="gator-caption">
              <strong>Chapter 03 · The work around the work</strong>
              After the Gator Bowl in Jacksonville. The sign records the result. I remember the people—the staff who made the event happen and the support that made the long days possible. Meaningful work is rarely an individual story.
            </figcaption>
          </div>
        </figure>

        <section className={classes.storySection} aria-labelledby="lead-title">
          <div className={classes.sideNote}>
            <strong>Working with people</strong>
            Start with the person, not a standard management script.
          </div>
          <div className={classes.copy}>
            <h2 id="lead-title">I want to know what someone is good at—and where they want to go.</h2>
            <p>I often call myself a utility infielder. I am comfortable moving between responsibilities when the team needs it. I do not expect everyone I lead to work the same way.</p>
            <p>If someone has an accounting background, I may give them more financial work. If they are comfortable with people, I may put them in front of customers. That helps the team now, but it is only half the conversation.</p>
            <p>I also ask what they want to do next. Sometimes the right assignment is one they are already good at. Sometimes it is a task that gives them experience they do not have yet.</p>
            <p>I do not always get that balance right. But I would rather adjust the work to the person than manage everyone from the same template.</p>
          </div>
        </section>

        <section className={classes.storySection} aria-labelledby="building-title">
          <div className={classes.sideNote}>
            <strong>What I am building</strong>
            Useful now. Understandable later.
          </div>
          <div className={classes.copy}>
            <h2 id="building-title">A good first version should not need me forever.</h2>
            <p>I like making things, but I do not want to become the only person who knows how they work.</p>
            <p>A useful reporting process is one someone else can run. A useful web page answers the fan before a phone call is necessary. A student program is healthier when its traditions survive the people who started it.</p>
            <p>I am usually happiest with work that becomes ordinary: it solves the problem, people understand it, and eventually nobody remembers that it used to be harder.</p>
          </div>
        </section>
      </article>

      <section className={classes.closing} aria-labelledby="closing-title">
        <div className={classes.closingInner}>
          <p className={classes.sectionLabel}>The short version</p>
          <h2 id="closing-title">Ask why. Find the real problem. Build something useful.</h2>
          <p className={classes.closingCopy}>That is the pattern behind most of my work. The tools change. The questions have stayed pretty consistent.</p>
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
