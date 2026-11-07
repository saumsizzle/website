import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { stories, topics } from "@/portfolio";
import styles from "@/styles/Portfolio.module.css";

const sections = { home: "Start", index: "All work", writing: "Writing", about: "About" };
const roots = Object.keys(topics);
const labels: Record<string, string> = { ...sections };
for (const [id, topic] of Object.entries(topics)) labels[id] = topic.name;
for (const [id, story] of Object.entries(stories)) labels[id] = story.name;

type Stop = [id: string, title: string, note: string];
const homeStops: Stop[] = roots.map(id => [id, topics[id].name, topics[id].hint]);
const workStops: Stop[] = Object.entries(stories)
  .filter(([, story]) => story.role !== "Essay")
  .map(([id, story]) => [id, story.name, `${story.role} · ${story.period}`]);

function hasRoute(id: string) {
  return Object.prototype.hasOwnProperty.call(labels, id);
}

function readTrail(): string[] {
  const hash = window.location.hash.slice(1);
  const id = hasRoute(hash) ? hash : "home";
  const saved = window.history.state?.portfolioTrail;
  if (Array.isArray(saved) && saved[0] === "home" && saved.at(-1) === id &&
      saved.every(key => typeof key === "string" && hasRoute(key))) {
    return saved;
  }
  if (id === "home") return ["home"];
  return stories[id] ? ["home", stories[id].topic, id] : ["home", id];
}

function Stops({ stops }: { stops: Stop[] }) {
  return (
    <ul className={styles.stops}>
      {stops.map(([id, title, note], index) => (
        <li className={styles.stop} key={id}>
          <a href={`#${id}`}>
            <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <span><strong>{title}</strong><small>{note}</small></span>
            <span className={styles.arrow} aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Ink({ mark }: { mark: "inkSlash" | "inkBloom" | "inkStreak" }) {
  return <span className={`${styles.inkMark} ${styles[mark]}`} aria-hidden="true" />;
}

function PortfolioPage({ id }: { id: string }) {
  const topic = topics[id];
  const story = stories[id];

  if (topic) {
    return (
      <>
        <div className={styles.eyebrow}>Route {String(roots.indexOf(id) + 1).padStart(2, "0")}</div>
        <h1>{topic.name}</h1>
        <Ink mark="inkStreak" />
        <p className={styles.intro}>{topic.intro}</p>
        <Stops stops={topic.stops.map(([key, title]) => [key, title, stories[key].name])} />
      </>
    );
  }

  if (story) {
    return (
      <>
        <article aria-labelledby="story-title">
          <div className={styles.eyebrow}>{story.byline ? "Writing" : story.name}</div>
          <h1 id="story-title">{story.title}</h1>
          <p className={styles.metadata}>{story.byline ?? `${story.role} · ${story.period}`}</p>
          <div className={styles.story}>{story.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
        </article>
        <div className={styles.nextTitle}>Keep following the thread</div>
        <Stops stops={story.next.map(([key, title]) => [key, title, stories[key].name])} />
      </>
    );
  }

  if (id === "index") {
    return (
      <>
        <div className={styles.eyebrow}>The index</div>
        <h1>Selected work</h1>
        <Stops stops={workStops} />
      </>
    );
  }

  if (id === "writing") {
    return (
      <>
        <div className={styles.eyebrow}>The notebook</div>
        <h1>Writing</h1>
        <Stops stops={[["friendships", stories.friendships.name, "Essay · 2024"]]} />
        <a className={styles.archiveLink} href="/blog">All articles ↗</a>
      </>
    );
  }

  if (id === "about") {
    return (
      <>
        <div className={styles.eyebrow}>About</div>
        <h1>Hi, I’m Saumya.</h1>
        <div className={styles.story}>
          <p>I started in computer science and human–computer interaction at Carnegie Mellon. I’ve worked in engineering, product, and research, inside large organizations and as a co-founder.</p>
          <p>At Modern Bloom, I work on tutoring tools and learning research. Away from my desk, I paint slightly odd gardens and gravitate toward plants and black cats.</p>
          <p><a href="mailto:saumyacdalal@gmail.com">Email me</a> · <a href="https://www.linkedin.com/in/saumyadalal/">LinkedIn</a> · <a href="https://github.com/saumsizzle">GitHub</a></p>
        </div>
        <figure className={styles.painting}>
          <div className={styles.paintingImage}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/portfolio-assets/painted-garden.webp"
              alt="A painted garden with wide-eyed plants and creatures beneath a pink sky and yellow sun"
              width="1600"
              height="1043"
            />
          </div>
          <figcaption>sd 2023</figcaption>
        </figure>
      </>
    );
  }

  return (
    <>
      <div className={styles.eyebrow}>A few paths through my work</div>
      <h1>Pick a question.</h1>
      <Ink mark="inkStreak" />
      <p className={styles.intro}>I’m Saumya Dalal. I build products and do research, mostly around learning and technology. Here are three questions that run through my work.</p>
      <Stops stops={homeStops} />
    </>
  );
}

export default function Home() {
  const [trail, setTrail] = useState(["home"]);
  const main = useRef<HTMLElement>(null);
  const shouldFocus = useRef(false);
  const id = trail[trail.length - 1];

  useEffect(() => {
    setTrail(readTrail());
    function onHistoryChange() {
      shouldFocus.current = true;
      setTrail(readTrail());
    }
    window.addEventListener("popstate", onHistoryChange);
    window.addEventListener("hashchange", onHistoryChange);
    return () => {
      window.removeEventListener("popstate", onHistoryChange);
      window.removeEventListener("hashchange", onHistoryChange);
    };
  }, []);

  useEffect(() => {
    if (!shouldFocus.current) return;
    shouldFocus.current = false;
    main.current?.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }, [trail]);

  function navigate(event: MouseEvent<HTMLElement>) {
    if (event.defaultPrevented || event.button !== 0 ||
        event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

    const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
    const next = link?.hash.slice(1);
    if (!link || !next || !hasRoute(next)) return;
    event.preventDefault();

    const crumb = link.dataset.trail;
    let nextTrail: string[];
    if (crumb !== undefined) {
      nextTrail = trail.slice(0, Number(crumb) + 1);
    } else if (next === "home") {
      nextTrail = ["home"];
    } else if (topics[next] || Object.prototype.hasOwnProperty.call(sections, next)) {
      nextTrail = ["home", next];
    } else if (trail.includes(next)) {
      nextTrail = trail.slice(0, trail.indexOf(next) + 1);
    } else {
      nextTrail = [...trail, next];
    }

    window.history.pushState({ portfolioTrail: nextTrail }, "", `#${next}`);
    shouldFocus.current = true;
    setTrail(nextTrail);
  }

  return (
    <section className={styles.site} onClick={navigate}>
      <Head>
        <title>{id === "home" ? "Saumya Dalal · A few paths through my work" : `${labels[id]} · Saumya Dalal`}</title>
        <meta name="description" content="Follow a question through Saumya Dalal’s work in product, research, and engineering." />
      </Head>
      <header className={`${styles.mast} ${styles.wrap}`}>
        <a className={styles.brand} href="#home" aria-label="Saumya Dalal, home">
          {/* Use the original lettering Saumya supplied. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/portfolio-assets/saumya-dalal-wordmark.png" alt="" width="1156" height="216" />
          <Ink mark="inkSlash" />
        </a>
        <nav aria-label="Main">
          <a href="#index">All work</a>
          <a href="#writing">Writing</a>
          <a href="#about">About</a>
        </nav>
      </header>
      <div className={`${styles.layout} ${styles.wrap}`}>
        <main ref={main} tabIndex={-1}><PortfolioPage id={id} /></main>
        <aside className={styles.rail} aria-label="Explore the routes">
          <p className={styles.railTitle}>Your route</p>
          <ol className={styles.trail}>
            {trail.map((key, index) => index === trail.length - 1
              ? <li key={key} aria-current="page">{labels[key]}</li>
              : <li key={key}><a href={`#${key}`} data-trail={index}>{labels[key]}</a></li>)}
          </ol>
          <p className={styles.railTitle}>Other routes</p>
          <ul>
            {roots.filter(key => !trail.includes(key)).map(key => (
              <li key={key}><a href={`#${key}`}>{labels[key]}</a></li>
            ))}
          </ul>
          <Ink mark="inkBloom" />
        </aside>
      </div>
      <footer className={`${styles.footer} ${styles.wrap}`}>
        <span>Mumbai, India</span>
        <a href="mailto:saumyacdalal@gmail.com">Say hello ↗</a>
      </footer>
      <noscript><p className={styles.wrap}>Turn on JavaScript to explore the routes, or <a href="/blog">browse the articles</a>.</p></noscript>
    </section>
  );
}
