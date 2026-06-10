export interface Event {
  slug: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  type: "workshop" | "webinar" | "live" | "speaking";
  description: string;
  registrationUrl?: string;
  isUpcoming?: boolean;
}
