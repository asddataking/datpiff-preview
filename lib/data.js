// Sample data — replace with real DB later
export const tapes = [
  {
    slug: 'night-shift',
    title: 'Night Shift',
    artist: 'Young Maverick',
    artistSlug: 'young-maverick',
    plays: '128K',
    rating: 5,
    badge: 'hot',
    tracks: [
      { title: 'Intro', duration: '1:12' },
      { title: 'City Lights', duration: '3:04' },
      { title: 'After Hours', duration: '2:51' },
    ],
  },
  {
    slug: 'gold-rush',
    title: 'Gold Rush',
    artist: 'King Solo',
    artistSlug: 'king-solo',
    plays: '94K',
    rating: 5,
    badge: 'new',
    tracks: [
      { title: 'Gold Intro', duration: '0:58' },
      { title: 'Chains', duration: '3:22' },
    ],
  },
  {
    slug: 'block-party',
    title: 'Block Party',
    artist: 'Real From The Block',
    artistSlug: 'real-from-the-block',
    plays: '52K',
    rating: 4,
    tracks: [
      { title: 'Block Intro', duration: '1:05' },
      { title: 'On The Corner', duration: '2:48' },
    ],
  },
  {
    slug: 'spotlight',
    title: 'Spotlight',
    artist: 'She',
    artistSlug: 'she',
    plays: '76K',
    rating: 4,
    tracks: [
      { title: 'Shine', duration: '3:11' },
      { title: 'Real Talk', duration: '2:39' },
    ],
  },
];

export const artists = [
  { slug: 'young-maverick', name: 'Young Maverick', tapes: 3, followers: '42K' },
  { slug: 'king-solo', name: 'King Solo', tapes: 2, followers: '28K' },
  { slug: 'real-from-the-block', name: 'Real From The Block', tapes: 1, followers: '15K' },
  { slug: 'she', name: 'She', tapes: 2, followers: '31K' },
];

export function getTape(slug) {
  return tapes.find((t) => t.slug === slug);
}

export function getArtist(slug) {
  return artists.find((a) => a.slug === slug);
}

export function getTapesByArtist(artistSlug) {
  return tapes.filter((t) => t.artistSlug === artistSlug);
}
