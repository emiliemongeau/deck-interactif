import { createFileRoute } from "@tanstack/react-router";
import { Presentation } from "@/components/nexora/Presentation";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "NEXORA IA — Présentation commerciale" },
      {
        name: "description",
        content:
          "Présentation NEXORA IA : transformez vos devis dormants en chiffre d’affaires récupéré.",
      },
    ],
  }),
});

function Index() {
  return <Presentation />;
}
