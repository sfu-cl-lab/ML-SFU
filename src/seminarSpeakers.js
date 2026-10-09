// A seminar has either a single speaker (speaker, speakerUrl, ...) or a list of speakers
export default function getSpeakers(seminar) {
  if (seminar.speakers) {
    return seminar.speakers
  } else if (seminar.speaker) {
    return [{
      name: seminar.speaker,
      url: seminar.speakerUrl,
      info: seminar.speakerInfo,
      photo: seminar.speakerPhoto
    }]
  }
  return []
}

// e.g. "Friday, September 18, 2026"; noon Pacific time so the day never shifts
export function formatSeminarDate(dateStr, month = 'long') {
  const date = new Date(dateStr + 'T12:00:00.000-07:00')
  return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: month, day: 'numeric' })
}

// When the talk starts (Pacific time), from the time in its location, e.g. "TASC1 9204 12:00pm"; noon if none is given
export function seminarStartTime(seminar) {
  const match = /(\d{1,2}):(\d{2})\s*(am|pm)/i.exec(seminar.location || '')
  const hours = match ? parseInt(match[1]) % 12 + (match[3].toLowerCase() === 'pm' ? 12 : 0) : 12
  const minutes = match ? parseInt(match[2]) : 0
  const midday = new Date(seminar.date + 'T12:00:00Z')
  const pdt = midday.toLocaleString('en-US', { timeZone: 'America/Los_Angeles', timeZoneName: 'short' }).endsWith('PDT')
  const pad = n => ('0' + n).slice(-2)
  return Date.parse(`${seminar.date}T${pad(hours)}:${pad(minutes)}:00${pdt ? '-07:00' : '-08:00'}`)
}
