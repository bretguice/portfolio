import Link from 'next/link';
import Seo from '../../components/Seo/Seo';
import { getNextNote, getNote, notes } from '../../data/notes';
import { noteContent } from '../../data/noteContent';
import classes from '../../styles/Notes.module.css';

export function getStaticPaths() {
  return {
    paths: notes.map((note) => ({ params: { slug: note.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const note = getNote(params.slug);

  if (!note || !noteContent[note.slug]) return { notFound: true };

  return {
    props: {
      note,
      blocks: noteContent[note.slug],
      nextNote: getNextNote(note.slug) || null,
    },
  };
}

export default function Note({ note, blocks, nextNote }) {
  return (
    <>
      <Seo
        title={`${note.title} — Bret Guice`}
        description={note.description}
        path={`/notes/${note.slug}`}
        openGraphType="article"
        pageType="Article"
        imageAlt={`${note.title} — a note by Bret Guice`}
      />

      <article className={classes.articleMain}>
        <header className={`${classes.shell} ${classes.articleHeader}`}>
          <Link className={classes.backLink} href="/notes">← All notes</Link>
          <div className={classes.articleKicker}>
            <span>{note.number}</span>
            <span>{note.category}</span>
            <span>{note.readingTime}</span>
          </div>
          <h1>{note.title}</h1>
          <p className={classes.articleDeck}>{note.question}</p>
        </header>

        <div className={classes.articleBody}>
          {blocks.map((block, index) => {
            if (block.type === 'heading') {
              return <h2 className={classes.articleSectionHeading} key={`${block.text}-${index}`}>{block.text}</h2>;
            }

            if (block.type === 'questions') {
              return (
                <ul className={classes.articleQuestions} key={`questions-${index}`}>
                  {block.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              );
            }

            const isEnding = index === blocks.length - 1;
            return <p className={isEnding ? classes.articleEnding : undefined} key={`${block.text}-${index}`}>{block.text}</p>;
          })}
        </div>

        <aside className={`${classes.shell} ${classes.continueReading}`} aria-label="Continue reading">
          <p className={classes.eyebrow}>{nextNote ? 'Continue reading' : 'Explore the collection'}</p>
          {nextNote ? (
            <Link href={`/notes/${nextNote.slug}`}>
              <span className={classes.continueNumber}>{nextNote.number}</span>
              <span>
                <strong>{nextNote.title}</strong>
                <small>{nextNote.question}</small>
              </span>
              <span className={classes.continueArrow} aria-hidden="true">→</span>
            </Link>
          ) : (
            <Link href="/notes">
              <span className={classes.continueNumber}>←</span>
              <span><strong>Return to Notes</strong><small>Follow another idea.</small></span>
              <span className={classes.continueArrow} aria-hidden="true">→</span>
            </Link>
          )}
        </aside>
      </article>

      <footer className={`${classes.shell} ${classes.siteFooter}`}>
        <p>Notes by Bret Guice</p>
        <p>Written to remain useful.</p>
      </footer>
    </>
  );
}
