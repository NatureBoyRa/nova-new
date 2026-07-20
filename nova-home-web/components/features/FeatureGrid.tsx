import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/features/FeatureCard";
import { features } from "@/lib/data";

export function FeatureGrid() {
  return (
    <Section id="features">
      <SectionHeading
        eyebrow="Capabilities"
        title="Everything the house needs, none of the clutter."
        description="Each module does one job well, and reports back to a single dashboard — so the system stays legible even as it grows."
      />

      <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, ...feature }, i) => (
          <li key={feature.title} className="list-none">
            <FeatureCard
              feature={feature}
              icon={<Icon size={20} strokeWidth={1.75} aria-hidden="true" />}
              index={i}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
