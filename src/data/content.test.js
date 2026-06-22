import { describe, it, expect } from 'vitest'
import {
  NAV,
  VISION,
  MISSION,
  PILLARS,
  GAPS,
  STRATEGY_PRINCIPLES,
  DOCTORAL_RESEARCHERS,
  EVENTS,
  MILESTONES,
  HIGHLIGHTS,
  PERSON,
  TEAM,
  PHDS,
  PHD_GROUPS,
  CONTACT,
  LEGAL,
} from './content'

const isHttpUrl = (s) => typeof s === 'string' && /^https?:\/\/\S+$/.test(s)

describe('NAV', () => {
  it('every item has a label and an internal path', () => {
    expect(NAV.length).toBeGreaterThan(0)
    for (const item of NAV) {
      expect(typeof item.label).toBe('string')
      expect(item.label.length).toBeGreaterThan(0)
      expect(item.to.startsWith('/')).toBe(true)
    }
  })
})

describe('core copy', () => {
  it('has vision and mission text', () => {
    expect(VISION.statement.length).toBeGreaterThan(0)
    expect(Array.isArray(VISION.qualities)).toBe(true)
    expect(MISSION.headline.length).toBeGreaterThan(0)
  })

  it('pillars, gaps and strategy are non-empty', () => {
    expect(PILLARS.length).toBe(3)
    for (const p of PILLARS) expect(p.id && p.title && p.body).toBeTruthy()
    expect(GAPS.length).toBeGreaterThan(0)
    expect(STRATEGY_PRINCIPLES.length).toBeGreaterThan(0)
  })
})

describe('EVENTS', () => {
  it('each event has the required fields and valid links', () => {
    for (const ev of EVENTS) {
      expect(ev.date && ev.title && ev.location && ev.type).toBeTruthy()
      if (ev.href) expect(isHttpUrl(ev.href)).toBe(true)
    }
  })
})

describe('MILESTONES', () => {
  it('each group has a period and items', () => {
    for (const group of MILESTONES) {
      expect(typeof group.period).toBe('string')
      expect(Array.isArray(group.items)).toBe(true)
      expect(group.items.length).toBeGreaterThan(0)
    }
  })

  it('research milestones carry full citation data', () => {
    const research = MILESTONES.flatMap((g) => g.items).filter(
      (i) => i.track === 'Research',
    )
    expect(research.length).toBeGreaterThan(0)
    for (const r of research) {
      expect(r.paper && r.venue).toBeTruthy()
      expect(typeof r.year).toBe('number')
      expect(isHttpUrl(r.href)).toBe(true)
    }
  })
})

describe('HIGHLIGHTS', () => {
  it('are four numeric stats and stay in sync with the data', () => {
    expect(HIGHLIGHTS).toHaveLength(4)
    for (const h of HIGHLIGHTS) {
      expect(typeof h.value).toBe('number')
      expect(h.value).toBeGreaterThanOrEqual(0)
      expect(h.label.length).toBeGreaterThan(0)
    }
    const doctoral = HIGHLIGHTS.find((h) => /doctoral/i.test(h.label))
    expect(doctoral.value).toBe(DOCTORAL_RESEARCHERS)
  })
})

describe('team', () => {
  it('lead and faculty have the required fields and valid links', () => {
    expect(PERSON.name).toMatch(/Kühl/)
    const checkLinks = (links = {}) => {
      for (const url of Object.values(links)) {
        if (url) expect(isHttpUrl(url)).toBe(true)
      }
    }
    checkLinks(PERSON.links)
    for (const m of TEAM) {
      expect(m.name && m.initials && m.role && m.bio).toBeTruthy()
      expect(typeof m.links).toBe('object')
      checkLinks(m.links)
    }
  })

  it('doctoral researchers have a description, valid links and a known group', () => {
    const groupIds = PHD_GROUPS.map((g) => g.id)
    expect(PHDS.length).toBeGreaterThan(0)
    for (const phd of PHDS) {
      expect(phd.name.length).toBeGreaterThan(0)
      expect(phd.initials.length).toBe(2)
      expect(phd.research.length).toBeGreaterThan(0)
      expect(groupIds).toContain(phd.group)
      expect(typeof phd.links).toBe('object')
      for (const url of Object.values(phd.links)) {
        if (url) expect(isHttpUrl(url)).toBe(true)
      }
      if (phd.links.orcid) {
        expect(phd.links.orcid).toMatch(/orcid\.org/)
      }
    }
  })
})

describe('legal & contact', () => {
  it('contact and legal blocks are structured', () => {
    expect(CONTACT.links.every((l) => isHttpUrl(l.href))).toBe(true)
    expect(LEGAL.provider.name.length).toBeGreaterThan(0)
    expect(LEGAL.dpa.name.length).toBeGreaterThan(0)
  })

  // Reminder to fill the ⟨…⟩ placeholders before going fully public.
  it.todo('legal placeholders (phone, DPO email, president) are filled in')
})
