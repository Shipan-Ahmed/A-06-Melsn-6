import React from "react";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for getting started",
    price: 0,
    period: "month",
    features: [
      "Access to 10 tools",
      "Basic AI features",
      "Community support",
      "5 project exports",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    tagline: "Best for professionals",
    price: 29,
    period: "month",
    features: [
      "Access to all tools",
      "Advanced AI features",
      "Unlimited exports",
      "Priority support",
      "Custom templates",
      "Advanced analytics",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    tagline: "For large businesses",
    price: 99,
    period: "month",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Dedicated support",
      "SLA guarantee",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-sm">
            Choose a plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 flex flex-col shadow-sm hover:-translate-y-1 transition-transform duration-200 relative ${
                plan.popular ? "text-white" : "bg-white border border-gray-100"
              }`}
              style={
                plan.popular
                  ? { background: "linear-gradient(135deg, #7c3aed, #a855f7)" }
                  : {}
              }
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1 rounded-full shadow">
                  Most Popular
                </span>
              )}
              <p
                className={`text-sm font-bold mb-1 ${plan.popular ? "text-white" : "text-gray-800"}`}
              >
                {plan.name}
              </p>
              <p
                className={`text-xs mb-4 ${plan.popular ? "text-purple-200" : "text-gray-400"}`}
              >
                {plan.tagline}
              </p>
              <div className="mb-6">
                <span className="text-3xl font-extrabold">${plan.price}</span>
                <span
                  className={`text-sm ml-1 ${plan.popular ? "text-purple-200" : "text-gray-400"}`}
                >
                  /{plan.period}
                </span>
              </div>
              <ul className="space-y-2 flex-1 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <svg
                      className={`w-4 h-4 shrink-0 ${plan.popular ? "text-purple-200" : "text-violet-500"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={
                        plan.popular ? "text-purple-100" : "text-gray-600"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-colors cursor-pointer ${
                  plan.popular
                    ? "bg-white text-violet-700 hover:bg-gray-100"
                    : "border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
