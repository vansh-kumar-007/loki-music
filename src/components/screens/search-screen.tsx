"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { demoTracks } from "@/data/demo-catalog";
import { DemoBadge } from "@/components/ui/demo-badge";
import { TrackRow } from "@/components/ui/track-row";

export function SearchScreen() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const matches = demoTracks.filter((track) =>
    [track.title, track.artist, track.collection, track.mood]
      .some((value) => value.toLocaleLowerCase().includes(normalizedQuery)),
  );

  return (
    <div className="page-enter">
      <div className="page-intro">
        <p className="eyebrow">FIND A NEW FAVORITE</p>
        <h2>Search <span>the sound.</span></h2>
        <p>This search runs locally against a small fictional sample catalog. It does not query a music provider.</p>
      </div>
      <form className="search-form" role="search" onSubmit={(event) => event.preventDefault()}>
        <Search size={20} aria-hidden="true" />
        <label className="sr-only" htmlFor="catalog-search">Search sample music</label>
        <input
          id="catalog-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try a track, artist, album or mood"
          autoComplete="off"
        />
        {query ? (
          <button className="search-clear" type="button" onClick={() => setQuery("")} aria-label="Clear search">
            <X size={17} />
          </button>
        ) : <kbd>/</kbd>}
      </form>
      <div className="search-result-heading">
        <div><h3>{normalizedQuery ? "Sample matches" : "A few places to start"}</h3><span>{matches.length} fictional sample {matches.length === 1 ? "track" : "tracks"}</span></div>
        <DemoBadge>Local only</DemoBadge>
      </div>
      <div className="track-list-panel search-results" aria-live="polite">
        {matches.length > 0 ? matches.map((track, index) => <TrackRow key={track.id} track={track} index={index} />) : (
          <div className="search-no-results">
            <span className="empty-state-icon"><Search size={20} /></span>
            <h3>No sample tracks match “{query}”</h3>
            <p>Try another title, artist, collection, or mood.</p>
            <button className="button button--secondary button--small" type="button" onClick={() => setQuery("")}>Clear search</button>
          </div>
        )}
      </div>
    </div>
  );
}
