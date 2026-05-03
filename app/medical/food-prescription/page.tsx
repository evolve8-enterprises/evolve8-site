import Link from "next/link";
import { PageHeader, Section, CalloutBand } from "@/components/PageHeader";

export const metadata = {
  title: "Food Prescription Campaign — Evolve8 Enterprises",
  description: "Working with doctors and policymakers to make medically prescribed food a covered benefit. A doctor prescribes your diet. Insurance helps cover it.",
};

export default function FoodPrescriptionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Medical · Food Prescription Campaign"
        title="Food is medicine. The prescription should say so."
        accent="The prescription should say so."
        lede="The Food Prescription Campaign is working with physicians, dietitians, and policymakers to make doctor-issued food access a standard covered benefit in American healthcare. When your doctor prescribes a specialized diet, it should be treated like any other prescription — covered by insurance, and cheaper out of pocket than the grocery store."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/medical", label: "Medical" },
          { href: "/medical/food-prescription", label: "Food Prescription" },
        ]}
      />

      {/* The Prescription Model */}
      <Section>
        <p className="eyebrow mb-4">How it works</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-8 max-w-4xl">
          A doctor prescribes food. Insurance covers it. You pay less than the grocery store.
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            {
              step: "01",
              title: "Doctor Issues the Prescription",
              body: "A licensed physician, dietitian, or specialist writes a food prescription based on your health condition — diabetes, heart disease, malnutrition, obesity, food allergy, or chronic illness. Just like a medication prescription, it specifies what, how much, and for how long.",
            },
            {
              step: "02",
              title: "Insurance Covers It",
              body: "The campaign works with policymakers to classify medically necessary food as a covered health benefit. For insured patients, the food prescription is filed like any other covered treatment. Medicaid and Medicare pathways are a priority target.",
            },
            {
              step: "03",
              title: "You Pay Less Than Groceries",
              body: "For patients paying out of pocket, the Food Prescription program connects to Vivinate Farms production and bulk food networks to ensure the cost of prescribed food is below standard grocery prices. Access to healthy food should not be a luxury.",
            },
          ].map((s) => (
            <div key={s.step} className="card">
              <span className="text-accent font-mono text-sm mb-3 block">{s.step}</span>
              <h3 className="h-display text-bone text-xl mb-3">{s.title}</h3>
              <p className="text-bone/75 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="eyebrow mb-4">Conditions targeted</p>
            <ul className="space-y-2 text-bone/80 text-sm">
              <li>· Type 2 Diabetes — dietary management and reversal</li>
              <li>· Heart disease and hypertension — anti-inflammatory diets</li>
              <li>· Obesity and metabolic syndrome — prescribed nutrition plans</li>
              <li>· Food allergies and intolerances — verified safe alternatives</li>
              <li>· Malnutrition and food insecurity — baseline caloric needs</li>
              <li>· Chronic inflammation — whole-food anti-inflammatory protocols</li>
              <li>· Mental health conditions — gut-brain nutrition connections</li>
              <li>· Pregnancy and pediatric nutrition — critical development windows</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Who we are reaching out to</p>
            <ul className="space-y-2 text-bone/80 text-sm">
              <li><span className="text-accent mr-2">→</span> Primary care physicians and family medicine doctors</li>
              <li><span className="text-accent mr-2">→</span> Registered dietitians and nutritionists</li>
              <li><span className="text-accent mr-2">→</span> Medicaid and Medicare policy offices</li>
              <li><span className="text-accent mr-2">→</span> State health departments and food security directors</li>
              <li><span className="text-accent mr-2">→</span> Insurance companies and self-insured employers</li>
              <li><span className="text-accent mr-2">→</span> Federally Qualified Health Centers (FQHCs)</li>
              <li><span className="text-accent mr-2">→</span> Community health workers and clinics</li>
              <li><span className="text-accent mr-2">→</span> Food banks and hunger relief organizations</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* The Case */}
      <Section>
        <p className="eyebrow mb-4">Why this matters</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-6 max-w-4xl">
          The most expensive healthcare is treating what food could have prevented.
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 text-bone/80 leading-relaxed">
            <p>The American healthcare system spends over $4 trillion per year, with chronic diseases — most of which are diet-related — accounting for 90% of that cost. Type 2 diabetes alone costs $327 billion annually in direct medical costs and lost productivity.</p>
            <p>Meanwhile, the average American family spends over $1,200 per month on food, with no guidance on what to eat, no prescription framework to reduce cost, and no infrastructure to ensure healthy food is actually accessible and affordable where they live.</p>
          </div>
          <div className="card">
            <p className="eyebrow mb-3">Food prescription economics</p>
            <ul className="space-y-3 text-bone/80 text-sm">
              <li><span className="text-accent mr-2">→</span> Average cost of food prescription: estimated $150-$400/month</li>
              <li><span className="text-accent mr-2">→</span> Average American grocery spend: $400-$600/month (individual)</li>
              <li><span className="text-accent mr-2">→</span> Annual cost of treating Type 2 diabetes: $16,752/patient</li>
              <li><span className="text-accent mr-2">→</span> Cost of dietary reversal program: $1,800-$3,600/year</li>
              <li><span className="text-accent mr-2">→</span> Medicaid produce prescription programs show $1.27 return per $1 invested</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Vivinate Farms Integration */}
      <Section>
        <p className="eyebrow mb-4">Vivinate Farms Integration</p>
        <h2 className="h-display text-bone text-3xl md:text-4xl mb-6 max-w-4xl">
          From campus to container to prescription.
        </h2>
        <p className="text-bone/80 max-w-3xl leading-relaxed mb-6">
          Vivinate Farms provides the food production infrastructure behind the prescription system.
          Campus-grown produce, container farm output, and bulk cooperative purchasing are routed
          to fulfill food prescriptions at below-grocery-store cost. Way Stations serve as
          distribution and pickup points along highway and community corridors.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/food" className="btn-primary">Vivinate Farms →</Link>
          <Link href="/medical/way-stations" className="btn-secondary">Way Stations</Link>
          <Link href="/contact" className="btn-secondary">Partner with Us</Link>
        </div>
      </Section>

      <CalloutBand
        title="Are you a doctor, dietitian, or policymaker?"
        body="We are actively building the physician and policy network for the Food Prescription Campaign. If you want to participate — or if you are a patient who wants to be prescribed food — contact us."
        ctaHref="/contact"
        ctaLabel="Get in touch"
      />

      <Section bordered={false}>
        <p className="text-bone/50 text-sm max-w-3xl">
          The Food Prescription Campaign does not provide medical advice. Food prescriptions must be issued by licensed physicians or dietitians. Insurance coverage pathways are in development and vary by state and plan. Evolve8 Enterprises is not a healthcare provider. See <Link href="/disclaimers" className="text-accent hover:underline">full disclaimers</Link>.
        </p>
      </Section>
    </>
  );
}
