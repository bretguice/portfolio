import Seo from '../../components/Seo/Seo';
import classes from '../../styles/Conversation.module.css';

const takeaways = [
  {
    number: '01',
    title: 'Reducing Friction for Fans',
    text: 'Clear information, easier paths, and thoughtful game-day systems help fans spend less time figuring things out and more time looking forward to the experience.',
  },
  {
    number: '02',
    title: 'Using Technology to Improve Operations',
    text: 'Software, data, and automation are most useful when they simplify the work, answer better questions, and give people more time for judgment.',
  },
  {
    number: '03',
    title: 'Building Lifelong Connections',
    text: 'A ticket can open the gate. Belonging, tradition, and meaningful participation are what give people a reason to return.',
  },
];

export default function ConversationPage() {
  const title = 'Tech Drive Podcast — Building Better Fan Experiences | Bret Guice';
  const description = 'Bret Guice joins Tech Drive to discuss ticket operations, technology, and the work behind a better Louisiana Tech fan experience.';

  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/conversation"
        image="/images/media/tech-drive.jpg"
        imageAlt="Bret Guice on the Tech Drive podcast"
      />

      <header className={classes.hero} aria-labelledby="conversation-title">
        <p className={classes.eyebrow}>Featured conversation · Tech Drive</p>
        <h1 id="conversation-title">Building better fan experiences.</h1>
        <div className={classes.heroLower}>
          <p className={classes.deck}>
            In this episode of Tech Drive, I discuss my path through collegiate and
            professional sports, how software development shaped my approach to
            ticket operations, and the work behind improving the Louisiana Tech fan
            experience.
          </p>
          <p className={classes.issueNote}>
            <strong>Tech Drive podcast</strong>
            Ticket operations · Technology<br />
            Fan experience · Louisiana Tech
          </p>
        </div>
      </header>

      <section className={classes.videoSection} aria-label="Tech Drive podcast video">
        <div className={classes.videoFrame}>
          <iframe
            src="https://www.youtube-nocookie.com/embed/AsN4V9hpHo8?rel=0"
            title="Tech Drive podcast interview with Bret Guice"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className={classes.videoCaption}>
          <strong>Tech Drive</strong>
          A conversation about the work around the ticket: the systems, decisions,
          and relationships that shape how a fan experiences an event.
        </div>
      </section>

      <section className={classes.takeaways} aria-labelledby="takeaways-title">
        <div className={classes.takeawaysHeading}>
          <p className={classes.eyebrow}>Three ideas from the conversation</p>
          <h2 id="takeaways-title">The work is broader than the ticket.</h2>
        </div>
        <ol className={classes.takeawayGrid}>
          {takeaways.map(({ number, title: takeawayTitle, text }) => (
            <li key={number}>
              <span>{number}</span>
              <h3>{takeawayTitle}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={classes.closing} aria-labelledby="conversation-closing-title">
        <div className={classes.closingInner}>
          <p className={classes.eyebrow}>The guiding idea</p>
          <h2 id="conversation-closing-title">
            Spend less time figuring out how to attend—and more time looking forward to it.
          </h2>
          <a
            href="https://youtu.be/AsN4V9hpHo8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on YouTube <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
