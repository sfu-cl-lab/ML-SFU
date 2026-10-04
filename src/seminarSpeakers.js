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
