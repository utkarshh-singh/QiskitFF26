// Contact channels — edit freely, no code changes needed.
import { EVENT } from './site.js'

export const CHANNELS = [
  { label: 'Discord', desc: 'Announcements, team-finding, and live support.', cta: 'Join Discord', href: EVENT.discord },
  { label: '#helpdesk', desc: 'Logistics, accessibility, and general questions on Discord.', cta: 'Open Discord', href: EVENT.discord },
  { label: '#ask-a-mentor', desc: 'Technical help during the hackathon, on Discord.', cta: 'Open Discord', href: EVENT.discord },
]

// Map shows the main weekend venue. The finale (Oct 10) is at a different
// building — see the venue list on this page and the About page for both.
export const MAP_QUERY = 'CRX 240, Learning Crossroads, University of Ottawa'
export const MAP_NOTE = "This pin shows the main weekend venue (Oct 3–4). The finale on Oct 10 is at a different building — see the venue list above."
