export const notes = [
  {
    number: "01",
    slug: "the-first-question-is-rarely-the-useful-one",
    title: "The First Question Is Rarely the Useful One",
    question: "What are you really trying to solve?",
    description: "A story about looking beyond the request in front of you to understand the problem the work actually needs to solve.",
    category: "Strategy",
    readingTime: "5 minute read",
  },
  {
    number: "02",
    slug: "participation-is-designed",
    title: "Participation Is Designed",
    question: "What happens when the process gets in the way of participation?",
    description: "How the evolution of student ticket access reinforced a larger belief: if participation matters, the process has to make it easy for people to take part.",
    category: "Athletics",
    readingTime: "7 minute read",
  },
  {
    number: "03",
    slug: "learning-what-the-work-required",
    title: "Learning What the Work Required",
    question: "What happens when each problem teaches you the next skill?",
    description: "How a career in ticketing expanded into systems, data, coding, communications, and a broader understanding of the fan experience.",
    category: "Digital",
    readingTime: "12 minute read",
  },
];

export function getNote(slug) {
  return notes.find((note) => note.slug === slug);
}

export function getNextNote(slug) {
  const index = notes.findIndex((note) => note.slug === slug);
  return index >= 0 && index < notes.length - 1 ? notes[index + 1] : undefined;
}
