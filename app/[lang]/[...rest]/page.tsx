import { notFound } from "next/navigation";

// Any unknown address inside a language (e.g. /en/old-page) shows the branded 404 page.
export default function CatchAll() {
  notFound();
}
