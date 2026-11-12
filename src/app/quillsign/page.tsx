import { redirect } from "next/navigation";

export default function QuillSign() {
  // Keep the shared policy breadcrumbs working without adding a marketing page.
  redirect("/quillsign/support");
}
