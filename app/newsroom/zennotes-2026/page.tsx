import PressRelease from "@/components/PressRelease/PressRelease";

export default function Page() {
  return (
    <PressRelease
      title="The ZenNotes 2026 Release: Intelligence Meets the Infrastructure of Care"
      subtitle="A new category: Ambient Clinical Intelligence built on proven infrastructure"
      author="ZenNotes Team"
      date="March 23, 2026"
      heroImage="/images/zennotes.png"
      sections={[
        {
          content:
            "For decades, the digital revolution in healthcare has felt more like a burden than a benefit. Clinicians have been forced to choose between being present with their patients or being compliant with their paperwork. Today, that choice ends.",
        },
        {
          content: "\n\nListening is active. Present. Intentional. It's what therapists are trained to do. It's the whole job. The entire therapeutic relationship is built on being heard. The therapist\'s primary tool is listening. The patient's primary need is to feel heard.The session itself is sound — words, tone, silence, breath. And yet every documentation system built for therapy is visual.Text boxes.Forms.Typing.It forces therapists to split their attention between hearing their patient and capturing what they hear. Our ACI closes that gap completely. The therapist stays in the hearing. The machine captures what was heard. That's not a feature — that\'s the philosophical justification for why ambient AI belongs in therapy more than anywhere else."
        },
        {
          content:
            "Introducing ZenNotes Ambient Clinical Intelligence (ACI)—a reimagined approach to documentation built on the proven, high-availability infrastructure that has been powering care since 2020.",
        },
        {
          heading: "Passive by Design",
          content:
            "Most medical AI today relies on intrusive meeting bots that disrupt the sacred space of a session. ZenNotes does away with the digital third wheel. By utilizing a Native Audio Context Tap, ZenNotes captures the clinical narrative invisibly. There is no bot. There is only the Waveform Interface—a dimensional signal that the session is being safely captured by a system that never sleeps.",
        },
        {
          heading: "The Two Truths of a Session",
          content:
            "Every session produces two distinct needs, and ZenNotes is built to address both simultaneously.",
        },
        {
          heading: "Clinical Truth",
          content:
            "A 90% HIPAA-complete, RAM-only SOAP note generated the moment the session ends.",
        },
        {
          heading: "Human Truth",
          content:
            "A Patient Pocket Note—a plain-language summary that bridges the gap between appointments, ensuring the patient leaves with more than just a memory.",
        },
        {
          heading: "Revenue without the Leakage",
          content:
            "In a field where minutes matter, ZenNotes introduces Duration-Derived Billing. By capturing session variances, the system suggests correct CPT codes and generates an Instant Superbill PDF for reimbursement.",
        },
        {
          heading: "The 2020 Foundation",
          content:
            "ZenNotes is powered by the Instadr Infrastructure—a stack refined over six years to handle high-concurrency, high-security medical data.",
        },
        {
          heading: "Zero-Persistence Privacy",
          content:
            "Audio is processed in volatile memory and dissolves after a 12-second distillation cycle.",
        },
        {
          heading: "90% HIPAA Readiness",
          content:
            "Built on an established backbone, clearing the hurdles that stop most startups.",
          quote:
            "Documentation shouldn't be a second job. By layering our 90% HIPAA-complete engine over our 2020 core, we’ve made the scribe invisible. No bots, no distractions, no data persistence. Just a clear path back to the person sitting across from you. Stop documenting. Start listening.",
        },
      ]}
    />
  );
}