"use client";

import Link from "next/link";
import { MotionConfig, motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Headphones,
  HeartHandshake,
  Music2,
  Radio,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { BrandMark } from "@/components/brand/brand-mark";
import { Artwork } from "@/components/ui/artwork";
import { DemoBadge } from "@/components/ui/demo-badge";

const featureCards = [
  {
    number: "01",
    icon: Music2,
    title: "Find your next favorite",
    copy: "A home for music discovery, with metadata and listening history designed to connect to the services you already use.",
  },
  {
    number: "02",
    icon: UsersRound,
    title: "Make a room of your own",
    copy: "Create a listening space for friends, with clear privacy and control built into the experience.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Take turns at the aux",
    copy: "Room roles and shared controls are part of the roadmap. Real playback will only ship where providers permit it.",
  },
];

export function LandingPage() {
  return (
    <MotionConfig reducedMotion="user">
    <div className="landing-page">
      <header className="landing-header">
        <Link className="landing-brand" href="/" aria-label="LOKI home">
          <BrandMark />
        </Link>
        <nav className="landing-nav" aria-label="Main">
          <a href="#experience">Experience</a>
          <a href="#how-it-works">The idea</a>
          <a href="#open-source">Open source</a>
        </nav>
        <div className="landing-header-actions">
          <Link className="landing-signin" href="/login">Sign in</Link>
          <Link className="button button--small button--light" href="/dashboard">
            Explore the preview <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </header>

      <main>
        <section className="landing-hero" aria-labelledby="landing-title">
          <div className="landing-orb landing-orb--one" aria-hidden="true" />
          <div className="landing-orb landing-orb--two" aria-hidden="true" />
          <div className="landing-hero-copy">
            <motion.p
              className="landing-eyebrow"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow-line" />
              YOUR SPACE. YOUR SOUND.
            </motion.p>
            <motion.h1
              id="landing-title"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              Music is better
              <br />
              <span>when shared.</span>
            </motion.h1>
            <motion.p
              className="landing-subtitle"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
            >
              Discover your sound. Create your space.
              <br className="desktop-break" /> Listen together.
            </motion.p>
            <motion.div
              className="landing-hero-actions"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28 }}
            >
              <Link className="button button--primary" href="/dashboard">
                Start listening <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link className="button button--quiet" href="/rooms">
                Explore rooms <Headphones size={16} aria-hidden="true" />
              </Link>
            </motion.div>
            <p className="landing-disclaimer">
              <Sparkles size={13} aria-hidden="true" />
              Early interface preview. No music or accounts are connected yet.
            </p>
          </div>

          <motion.div
            className="landing-stage"
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div className="stage-frame">
              <div className="stage-frame-top">
                <span className="window-dots" aria-hidden="true"><i /><i /><i /></span>
                <span>LOKI / ROOM PREVIEW</span>
                <span className="stage-live-label"><i /> NOT LIVE</span>
              </div>
              <div className="stage-art-row">
                <div className="stage-record">
                  <Artwork variant="moss" label="Original abstract sample album art" />
                  <span className="record-ring" aria-hidden="true" />
                </div>
                <div className="stage-track-info">
                  <DemoBadge>Sample track</DemoBadge>
                  <p className="stage-track-title">Glass<br />Gardens</p>
                  <p className="stage-artist">The Solstice</p>
                  <span className="stage-track-note"><Radio size={13} /> No audio attached</span>
                </div>
              </div>
              <div className="stage-room-card">
                <div className="stage-room-heading">
                  <div>
                    <span className="eyebrow">LISTENING SPACE</span>
                    <strong>Somewhere, slowly</strong>
                  </div>
                  <span className="room-preview-count"><UsersRound size={13} /> PREVIEW</span>
                </div>
                <div className="stage-room-members">
                  <span className="room-avatar room-avatar--one">A</span>
                  <span className="room-avatar room-avatar--two">M</span>
                  <span className="room-avatar room-avatar--three">J</span>
                  <span className="room-member-copy">Illustrative room layout</span>
                </div>
                <div className="stage-waveform" aria-hidden="true">
                  {Array.from({ length: 38 }, (_, index) => (
                    <i key={index} style={{ height: (18 + ((index * 17) % 34)) + "px" }} />
                  ))}
                </div>
                <div className="stage-room-foot">
                  <span>Room controls are not connected</span>
                  <span className="stage-lock"><Radio size={13} /> UI SAMPLE</span>
                </div>
              </div>
              <div className="stage-float-note">
                <span className="stage-float-icon"><Music2 size={17} /></span>
                <span><strong>One shared space</strong><small>built around the music</small></span>
                <span className="stage-float-dot" />
              </div>
            </div>
            <span className="stage-caption">An early look at the LOKI listening space</span>
          </motion.div>
          <a className="landing-scroll-cue" href="#experience">
            <span>SCROLL TO EXPLORE</span><ArrowDown size={14} aria-hidden="true" />
          </a>
        </section>

        <section className="landing-proof-band" id="experience" aria-label="LOKI principles">
          <div><span>01</span><strong>Music-first</strong><small>A considered place for discovery</small></div>
          <div><span>02</span><strong>People together</strong><small>Listening spaces with intention</small></div>
          <div><span>03</span><strong>Open by design</strong><small>Built to be self-hosted</small></div>
        </section>

        <section className="landing-section landing-features" id="how-it-works">
          <div className="landing-section-intro">
            <p className="landing-eyebrow"><span className="eyebrow-line" /> A MORE PERSONAL KIND OF MUSIC SPACE</p>
            <h2>Not another feed.<br /><span>A place to listen.</span></h2>
            <p>LOKI brings discovery and shared listening into one thoughtful space. The foundation is taking shape now; each connection will be real, and clearly explained.</p>
          </div>
          <div className="feature-card-grid">
            {featureCards.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  className="feature-card"
                  key={feature.number}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className="feature-card-top"><span>{feature.number}</span><Icon size={19} aria-hidden="true" /></div>
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                  <span className="feature-card-rule" />
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="landing-lastfm">
          <div className="lastfm-monogram" aria-hidden="true">L.fm</div>
          <div>
            <p className="eyebrow">METADATA, NOT MUSIC</p>
            <h2>Your listening story,<br /><span>on your terms.</span></h2>
            <p>Last.fm can bring metadata and listening history into LOKI when you choose to connect it. It does not provide LOKI with streaming rights; playback will depend on a separately approved provider.</p>
          </div>
          <span className="integration-state"><i /> INTEGRATION NOT CONNECTED</span>
        </section>

        <section className="landing-open-source" id="open-source">
          <div className="open-source-copy">
            <p className="landing-eyebrow"><span className="eyebrow-line" /> MADE TO BE OPEN</p>
            <h2>A listening space<br /><span>you can make yours.</span></h2>
            <p>LOKI is an open-source project built to be understandable, maintainable, and easy to self-host. The product is still in its early foundation stage.</p>
            <a className="button button--secondary" href="https://github.com/vansh-kumar-007/loki-music" target="_blank" rel="noreferrer">
              <Code2 size={17} aria-hidden="true" /> View on GitHub <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <div className="open-source-mark">
            <BrandMark compact />
            <span className="open-source-orbit open-source-orbit--one" />
            <span className="open-source-orbit open-source-orbit--two" />
            <span className="open-source-caption">MUSIC IS BETTER<br />WHEN SHARED</span>
          </div>
        </section>

        <section className="landing-final-cta">
          <div>
            <p className="eyebrow">THE FIRST LISTEN STARTS HERE</p>
            <h2>Find your people.<br /><span>Find your sound.</span></h2>
          </div>
          <Link className="button button--primary" href="/dashboard">
            Explore the preview <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </section>
      </main>

      <footer className="landing-footer">
        <Link href="/" className="footer-brand"><BrandMark compact /><span>LOKI</span></Link>
        <p>Music is better when shared.</p>
        <span>Open source · Made for listening together</span>
      </footer>
    </div>
    </MotionConfig>
  );
}
