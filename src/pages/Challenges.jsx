import { useEffect, useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import GlassCard from '../components/ui/GlassCard.jsx'
import GlowButton from '../components/ui/GlowButton.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import ComingSoon from '../components/ui/ComingSoon.jsx'
import { EVENT } from '../data/site.js'
import { READY } from '../data/readiness.js'
import { CHALLENGES, CHALLENGES_REVEAL_AT, CHALLENGES_REVEAL_LABEL } from '../data/challenges.js'

// This page isn't linked from the nav on purpose — it's only reachable via
// the "View challenges" buttons. Even once READY.challenges is flipped to
// true, it keeps showing "not available yet" until CHALLENGES_REVEAL_AT
// passes, so it's safe to fill in challenges.js and flip the flag early.
function useRevealTimeReached() {
  const target = new Date(CHALLENGES_REVEAL_AT).getTime()
  const [reached, setReached] = useState(() => Date.now() >= target)

  useEffect(() => {
    if (reached) return
    const id = setInterval(() => {
      if (Date.now() >= target) setReached(true)
    }, 30_000)
    return () => clearInterval(id)
  }, [reached, target])

  return reached
}

export default function Challenges() {
  const timeReached = useRevealTimeReached()
  const revealed = READY.challenges && timeReached

  return (
    <div className="section">
      <SectionHeading
        eyebrow="Hackathon"
        title="Challenges"
        description={
          revealed
            ? "This year's tracks and problem statements — pick one and start building."
            : `Challenges unlock ${CHALLENGES_REVEAL_LABEL}, right as the hackathon kicks off.`
        }
      />

      {revealed && CHALLENGES.length > 0 ? (
        <>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CHALLENGES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <GlassCard glow className="p-6 h-full flex flex-col">
                  <p className="eyebrow mb-2">{c.track}</p>
                  <h4 className="font-display text-ink mb-2">{c.title}</h4>
                  <p className="text-sm text-ink-muted leading-relaxed flex-1">{c.desc}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>

          {EVENT.hackathonRepo && (
            <Reveal>
              <div className="mt-10 text-center">
                <GlowButton href={EVENT.hackathonRepo} variant="ghost">
                  View starter repo on GitHub ↗
                </GlowButton>
              </div>
            </Reveal>
          )}
        </>
      ) : (
        <ComingSoon
          title="Not available yet"
          message={`Challenges will be revealed here ${CHALLENGES_REVEAL_LABEL} — check back then!`}
        />
      )}
    </div>
  )
}
