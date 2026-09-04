import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-400">
          Error 404
        </p>

        <h1 className="mt-3 text-6xl font-bold tracking-tight text-stone-950">
          Page Not Found
        </h1>

        <p className="mx-auto mt-5 max-w-md leading-7 text-stone-500">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
        >
          <ArrowLeft size={17} />
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
