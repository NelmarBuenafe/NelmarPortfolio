import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import { services } from "../data/services";

function Services() {
  return (
    <section>
      <SectionHeader
        label="Services"
        title="How I Can Help"
        description="I create clear and practical digital experiences through UI/UX design and front-end development. These are services I can offer while continuing to grow through future projects."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.value} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <article
      className="group flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg motion-safe:animate-[serviceReveal_500ms_ease-out_both]"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#10201f] text-white transition duration-300 group-hover:bg-teal-700 group-hover:shadow-md">
        <Icon size={22} aria-hidden="true" />
      </div>

      <h2 className="mt-5 text-xl font-bold text-stone-950">{service.name}</h2>
      <p className="mt-3 leading-7 text-stone-600">{service.description}</p>

      <div className="mt-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
          Deliverables
        </p>
        <ul className="mt-3 space-y-2 text-sm text-stone-600">
          {service.deliverables.map((deliverable) => (
            <li key={deliverable} className="flex items-start gap-2">
              <Check size={16} className="mt-0.5 shrink-0 text-teal-600" aria-hidden="true" />
              <span>{deliverable}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        to={`/contact?service=${service.value}`}
        className="group/link mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-teal-700 transition hover:text-teal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
      >
        Request This Service
        <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
      </Link>
    </article>
  );
}

export default Services;
