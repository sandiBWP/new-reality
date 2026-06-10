export interface Episode {
  slug: string;
  title: string;
  date: string;
  duration: string;
  guest?: string;
  guestTitle?: string;
  guestImage?: string;
  tags: string[];
  description: string;
  showNotes?: string;
  audioUrl: string;
  transcriptSlug?: string;
  episodeNumber: number;
}
