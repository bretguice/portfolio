import Link from 'next/link';
import Seo from '../../components/Seo/Seo';
import { notes } from '../../data/notes';
import classes from '../../styles/Notes.module.css';

function NoteCard({ note, featured = false }) {
  return (
    <Link
      className={`${classes.noteCard} ${featured ? classes.featuredNote : classes.publishedNote}`}
      href={`/notes/${note.slug}`}
    >
      <div className={classes.noteCardMeta}>
        <span>{note.number}</span>
        <span>{note.category}</span>
        <span>{note.readingTime}</span>
      </div>
      <h2>{note.title}</h2>
      <p className={classes.noteQuestion}>{note.question}</p>
      <p className={classes.noteDescription}>{note.description}</p>
      <span className={classes.textLink}>Read note</span>
    </Link>
  );
}

export default function Notes() {
  const [featured, ...published] = notes;

  return (
    <>
      <Seo
        title="Notes — Bret Guice"
        description="Observations about strategy, systems, participation, digital work and the questions beneath the work."
        path="/notes"
      />

      <header className={`${classes.shell} ${classes.notesHero}`}>
        <p className={classes.eyebrow}>Notes</p>
        <h1>Ideas worth preserving.</h1>
        <p className={classes.heroIntro}>
          Observations about strategy, systems, participation, and the questions beneath the work.
        </p>
        <div className={classes.heroRule} aria-hidden="true">
          <span>Questions</span>
          <span>Observations</span>
          <span>Implications</span>
        </div>
      </header>

      <section className={classes.readingSection} aria-labelledby="start-reading">
        <div className={classes.shell}>
          <div className={classes.sectionHeading}>
            <p className={classes.eyebrow} id="start-reading">Start reading</p>
            <p className={classes.sectionAside}>One idea at a time.</p>
          </div>
          <NoteCard note={featured} featured />
        </div>
      </section>

      <section className={classes.questionsSection} aria-labelledby="published-notes">
        <div className={classes.shell}>
          <div className={classes.sectionHeading}>
            <p className={classes.eyebrow} id="published-notes">Continue reading</p>
            <p className={classes.sectionAside}>Follow the ideas, not the chronology.</p>
          </div>
          <div className={classes.publishedNotesGrid}>
            {published.map((note) => <NoteCard key={note.slug} note={note} />)}
          </div>
          <div className={classes.notesCoda}>
            <p>Broad subjects. Specific observations.</p>
            <ul aria-label="Note categories">
              <li>Strategy</li>
              <li>Leadership</li>
              <li>Digital</li>
              <li>Athletics</li>
              <li>Life</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className={`${classes.shell} ${classes.siteFooter}`}>
        <p>Notes by Bret Guice</p>
        <p>Written to remain useful.</p>
      </footer>
    </>
  );
}
