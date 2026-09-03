import { assetUrl } from '../../lib/assetUrl.js'

export default function SponsorMark({ sponsor, nameSize = 'text-lg', accentDot }) {
  if (sponsor.placeholder) {
    return (
      <span className={`font-display ${nameSize} text-ink-faint whitespace-nowrap`}>{sponsor.name}</span>
    )
  }
  if (sponsor.logo) {
    // White backing plate — sponsor logos vary wildly in color (some are
    // dark wordmarks meant for light backgrounds), so a fixed light plate
    // keeps every logo legible regardless of the site's dark/light theme.
    return (
      <div className="rounded-lg bg-white px-3 py-2">
        <img src={assetUrl(sponsor.logo)} alt={sponsor.name} className="max-h-8 max-w-[140px] object-contain" />
      </div>
    )
  }
  return (
    <>
      <span className={`h-2 w-2 rounded-full shrink-0 ${accentDot}`} />
      <span className={`font-display ${nameSize} text-ink whitespace-nowrap`}>{sponsor.name}</span>
    </>
  )
}
