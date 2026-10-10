'use client';

import { useState } from 'react';
import {
  ArrowRight, Menu, X, Heart, Leaf, Sun, ShieldCheck, MapPin, Clock,
  MoveUpRight, Brain, Sparkles, Waves, BriefcaseBusiness, Palette,
  Users, Activity, Wind, CheckCircle2,
} from 'lucide-react';

const services = [
  { n: '01', title: 'Anxiety & Panic', text: 'Understand worry, tension, overthinking, and the physical side of anxiety while building practical ways to feel more steady and regulated.', icon: Brain },
  { n: '02', title: 'Trauma & EMDR', text: 'Work carefully with the effects of single-incident or long-standing trauma, with an emphasis on safety, stabilization, and regulation.', icon: ShieldCheck },
  { n: '03', title: 'Burnout & Perfectionism', text: 'Slow down the pressure to keep pushing, reconnect with yourself, and develop more sustainable ways of living and working.', icon: Sparkles },
];

const faqs = [
  { q: 'Do you work with adults who are dealing with anxiety or burnout?', a: 'Yes. Dr. Maya Reynolds works with adults who feel overwhelmed by anxiety, panic, burnout, perfectionism, or high internal pressure. Many clients are thoughtful, self-aware, high-achieving people who feel exhausted or stuck beneath the surface.' },
  { q: 'Do you offer trauma therapy and EMDR?', a: 'Trauma work is an important part of the practice. Dr. Reynolds integrates EMDR and takes a carefully paced approach that emphasizes safety, stabilization, and helping clients feel more regulated in daily life.' },
  { q: 'Do you offer in-person and telehealth therapy?', a: 'Both options are offered. In-person therapy is available from the Santa Monica office, and secure telehealth sessions are available for clients located in California.' },
  { q: 'What is the therapy approach like?', a: 'The approach is warm, collaborative, and grounded. Sessions integrate CBT, EMDR, mindfulness-based practices, and body-oriented techniques while leaving room for reflection and depth.' },
];

const expertise = ['Anxiety', 'Panic', 'Burnout', 'Perfectionism', 'Trauma', 'Stress', 'Past experiences', 'Emotional regulation'];
const specialties = [
  { title: 'Trauma', text: 'A careful, paced process for working with single-incident or long-standing trauma while prioritizing safety and stabilization.', icon: ShieldCheck },
  { title: 'EMDR', text: 'An evidence-based approach integrated into trauma work to help process difficult experiences with care and intention.', icon: Waves },
  { title: 'CBT', text: 'Practical cognitive-behavioral tools that help you notice patterns, shift unhelpful cycles, and build useful skills.', icon: Brain },
  { title: 'Mindfulness & body-oriented work', text: 'Ways to notice the emotional and physiological sides of your experience and develop greater regulation.', icon: Activity },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="announcement">Adult therapy in Santa Monica & secure telehealth across California <span>✳</span></div>

      <header className="nav wrap">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark"><Leaf size={22} /></span>
          <span>Dr. Maya Reynolds, PsyD<small>LICENSED CLINICAL PSYCHOLOGIST</small></span>
        </a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#approach" onClick={closeMenu}>Approach</a>
          <a href="#who-help" onClick={closeMenu}>Who I help</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#office" onClick={closeMenu}>Our office</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Explore therapy <ArrowRight size={15} /></a>
        </nav>
      </header>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> ADULT THERAPY IN SANTA MONICA</div>
          <h1>Therapy for <em>anxiety, trauma & burnout</em> in Santa Monica.</h1>
          <p className="hero-sub">A warm, grounded space for adults who feel overwhelmed, stuck in overthinking, or quietly exhausted from holding everything together.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">Explore working together <ArrowRight size={17} /></a>
            <a className="text-link" href="#approach">My approach <MoveUpRight size={15} /></a>
          </div>
          <div className="hero-note"><span className="avatar-stack"><i>M</i><i>♡</i><i>✳</i></span><span>Practical tools. Depth. A pace that respects you.</span></div>
        </div>
        <div className="hero-art">
          <div className="hero-photo" role="img" aria-label="Quiet, naturally lit therapy office" />
          <div className="photo-caption"><span className="caption-icon"><Sun size={19} /></span><span><b>A calm place to begin</b><small>Private, comfortable, grounding</small></span></div>
          <div className="art-stamp"><span>FEEL</span><span>SAFE</span><span>TO BEGIN</span><Leaf size={21} /></div>
          <div className="art-blob" />
        </div>
      </section>

      <section className="trust-strip"><div className="wrap trust-inner"><div><ShieldCheck size={20} /><span>Safety & stabilization</span></div><div><Heart size={20} /><span>Warm, collaborative care</span></div><div><Leaf size={20} /><span>Insight with practical tools</span></div></div></section>

      <section className="intro section wrap" id="approach">
        <div className="section-label">A PLACE TO BEGIN</div>
        <div className="intro-grid">
          <h2>Therapy for adults who feel overwhelmed by anxiety, stress, or the <em>lingering effects of past experiences.</em></h2>
          <div className="intro-copy"><p>Many clients look functional on the outside while privately feeling exhausted, emotionally on edge, or always bracing for something to go wrong. Therapy can be a place to slow down, understand what is happening, and reconnect with yourself.</p><a className="text-link" href="#how-we-work">See how I work <ArrowRight size={16} /></a></div>
        </div>
        <div className="values-grid">
          <article><span className="value-icon"><Heart /></span><h3>Warm & collaborative</h3><p>Feel respected, understood, and actively involved in the process.</p></article>
          <article><span className="value-icon"><Waves /></span><h3>Grounded & paced</h3><p>Work at a pace that supports safety, stabilization, and regulation.</p></article>
          <article><span className="value-icon"><Leaf /></span><h3>Practical & deep</h3><p>Combine practical tools with reflection and depth-oriented work.</p></article>
        </div>
      </section>

      <section className="who-help section" id="who-help">
        <div className="wrap">
          <div className="section-label">WHO I HELP</div>
          <div className="section-heading"><h2>For adults who are <em>doing a lot</em> and feeling it.</h2><p>Dr. Reynolds often works with thoughtful, self-aware adults who may look functional from the outside while feeling exhausted or stuck inside.</p></div>
          <div className="audience-grid">
            <article><span><BriefcaseBusiness /></span><h3>High-achieving professionals</h3><p>Support for people carrying high expectations, responsibility, and internal pressure.</p></article>
            <article><span><Users /></span><h3>Entrepreneurs & leaders</h3><p>A grounded place to step out of constant performance mode and reconnect with yourself.</p></article>
            <article><span><Palette /></span><h3>Creatives & thoughtful adults</h3><p>Space to understand patterns, process what has happened, and move forward with greater clarity.</p></article>
          </div>
        </div>
      </section>

      <section className="expertise section wrap">
        <div className="expertise-inner">
          <div><div className="section-label">AREAS OF EXPERTISE</div><h2>Nothing about your experience has to be <em>too much.</em></h2></div>
          <div className="expertise-list">{expertise.map((item) => <span key={item}>{item}<i>✳</i></span>)}</div>
        </div>
      </section>

      <section className="how-work section" id="how-we-work">
        <div className="wrap how-grid">
          <div className="how-art"><div className="how-card"><span>01</span><Wind size={30} /><b>Slow down.</b><p>Notice what your mind and body are asking for.</p></div><div className="how-circle">WARM<br />PRACTICAL<br /><em>DEPTH</em></div></div>
          <div className="how-copy"><div className="section-label">HOW I WORK</div><h2>We’ll make room for both <em>insight and practical change.</em></h2><p>Dr. Reynolds’ approach is warm, collaborative, grounded, and practical. Therapy can include reflection and depth while also giving you tools you can use in daily life.</p><p>Her work integrates CBT, EMDR, mindfulness-based practices, and body-oriented techniques, with attention to safety, stabilization, and regulation when trauma is part of the picture.</p><a className="button button-outline" href="#services">Explore services <ArrowRight size={16} /></a></div>
        </div>
      </section>

      <section className="services-section section" id="services">
        <div className="wrap">
          <div className="section-label">SUPPORT & SERVICES</div>
          <div className="section-heading"><h2>Support for what you’re <em>carrying.</em></h2><p>Focused adult therapy for anxiety, trauma, burnout, perfectionism, and the pressure to keep pushing.</p></div>
          <div className="service-grid">{services.map((s) => { const Icon = s.icon; return <article className="service-card" key={s.n}><div className="service-top"><span>{s.n}</span><Icon size={23} /></div><h3>{s.title}</h3><p>{s.text}</p><a href="#contact" aria-label={`Learn about ${s.title}`}><ArrowRight size={18} /></a></article>; })}</div>
        </div>
      </section>

      <section className="specialties section wrap" id="specialties">
        <div className="section-label">MY SPECIALTIES</div>
        <div className="specialties-heading"><h2>Honoring where you’ve been & helping shape where you’re <em>headed.</em></h2><p>Different tools can support different parts of the work. The goal is a thoughtful, individualized process rather than a one-size-fits-all approach.</p></div>
        <div className="specialty-grid">{specialties.map((item) => { const Icon = item.icon; return <article className="specialty-card" key={item.title}><span className="specialty-icon"><Icon size={21} /></span><h3>{item.title}</h3><p>{item.text}</p><a href="#contact">Learn more <ArrowRight size={14} /></a></article>; })}</div>
      </section>

      <section className="about section wrap" id="about">
        <div className="about-art"><div className="about-photo-wrap"><img className="about-photo" src="/images/maya-reynolds.jpg" alt="Dr. Maya Reynolds" /></div><div className="about-note"><span>✳</span><p>Practical tools<br /><b>with depth.</b></p></div></div>
        <div className="about-copy"><div className="section-label">ABOUT DR. MAYA REYNOLDS, PSYD</div><h2>A therapist who understands the pressure to <em>keep pushing.</em></h2><p>I’m Dr. Maya Reynolds, a licensed clinical psychologist based in Santa Monica, California. I offer therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.</p><p>My work is warm, collaborative, and grounded. I integrate cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they’re experiencing.</p><p>My goal is not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself over time.</p><a className="button button-outline" href="#contact">Explore therapy <ArrowRight size={16} /></a></div>
      </section>

      <section className="quote-band"><div className="wrap quote-inner"><span className="quote-mark">“</span><blockquote>Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.</blockquote><span className="quote-byline">DR. MAYA REYNOLDS, PSYD</span></div></section>

      <section className="office section wrap" id="office">
        <div className="section-label">OUR OFFICE</div>
        <div className="office-heading"><div><h2>A quiet, private space designed to feel <em>calm and grounding.</em></h2><p>The Santa Monica office offers natural light and a comfortable, uncluttered environment. For clients who prefer to meet remotely, secure telehealth sessions are available across California.</p></div><div className="office-pin"><MapPin size={20} /><span>Santa Monica, California<br /><b>123th Street 45 W, Santa Monica, CA 90401</b></span></div></div>
        <div className="office-grid"><div className="office-img office-img-one" role="img" aria-label="Sunlit Santa Monica therapy office" /><div className="office-img office-img-two" role="img" aria-label="Comfortable private counseling space" /><div className="office-img office-img-three" role="img" aria-label="Quiet therapy room with natural light" /></div>
        <div className="office-bottom"><span><ShieldCheck size={19} /> Private & grounding environment</span><span><Sun size={19} /> Natural light & uncluttered space</span><span><Clock size={19} /> In-person + secure telehealth</span></div>
      </section>

      <section className="schedule section" id="schedule"><div className="wrap schedule-inner"><div className="schedule-copy"><div className="section-label">SCHEDULE AN APPOINTMENT</div><h2>Find a pace and setting that feels <em>right for you.</em></h2><p>Starting therapy is a personal decision. Dr. Reynolds offers in-person adult therapy in Santa Monica and secure telehealth across California, so you can choose the format that fits your needs.</p><a className="button button-dark" href="#contact">Explore session options <ArrowRight size={17} /></a></div><div className="schedule-card"><CheckCircle2 size={22} /><h3>A thoughtful first step</h3><p>Take your time, bring your questions, and explore whether this approach feels like a good fit.</p><div><span>Santa Monica</span><span>California telehealth</span><span>Adult therapy</span></div></div></div></section>

      <section className="faq-section section" id="faqs"><div className="wrap faq-layout"><div><div className="section-label">GOOD TO KNOW</div><h2>Questions you <em>might have.</em></h2><p>It is okay to have questions before reaching out. Here are a few details based on Dr. Reynolds’ practice.</p><a className="text-link" href="#contact">Still have a question? <ArrowRight size={16} /></a></div><div className="faq-list">{faqs.map((f, i) => <article className={openFaq === i ? 'faq-item active' : 'faq-item'} key={f.q}><button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} aria-controls={`faq-answer-${i}`}><span>{f.q}</span><span className="faq-plus">{openFaq === i ? '−' : '+'}</span></button>{openFaq === i && <p id={`faq-answer-${i}`}>{f.a}</p>}</article>)}</div></div></section>

      <section className="contact-section" id="contact"><div className="wrap contact-inner"><div className="contact-spark">✳</div><div className="section-label">WHEN YOU’RE READY</div><h2>You don’t have to keep carrying it <em>alone.</em></h2><p>Explore whether therapy with Dr. Maya Reynolds could be a good fit for you, in person in Santa Monica or through secure telehealth across California.</p><a className="button button-light" href="#schedule">Explore session options <ArrowRight size={17} /></a><small>Take your time. Reaching out can be a small first step.</small></div></section>

      <footer className="footer"><div className="wrap footer-top"><a className="brand brand-footer" href="#home"><span className="brand-mark"><Leaf size={21} /></span><span>Dr. Maya Reynolds, PsyD<small>LICENSED CLINICAL PSYCHOLOGIST</small></span></a><p>Insight, resilience,<br />and a stronger relationship with yourself.</p><div className="footer-links"><a href="#approach">Approach</a><a href="#who-help">Who I help</a><a href="#services">Services</a><a href="#office">Office</a><a href="#faqs">FAQs</a><a href="#contact">Contact</a></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD · Fictional therapist website concept for internship assignment</span><a href="#home">Back to top ↑</a></div></footer>
    </main>
  );
}
