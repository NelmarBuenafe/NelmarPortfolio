import ExperienceCommunitySection from "./ExperienceCommunitySection";
import ExperienceCompetitionSection from "./ExperienceCompetitionSection";
import SectionHeader from "./SectionHeader";
import TrainingCertifications from "./TrainingCertifications";

function Experience() {
  return (
    <section>
      <SectionHeader
        label="Background"
        title="Experience & Involvement"
        description="Community involvement, competition recognition, and continuous learning experiences."
      />

      <ExperienceCommunitySection />
      <ExperienceCompetitionSection />
      <TrainingCertifications />
    </section>
  );
}

export default Experience;
