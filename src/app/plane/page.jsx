
import React from "react";

const UserPlanePage = () => {
  const plans = [
    {
      name: "Basic",
      id: "Basic",
      price: "5",
      description: "নিয়মিত Job Apply করার জন্য উপযুক্ত",
      applications: "Unlimited Job Apply",
      features: [
        "Unlimited Job Apply",
        "Job Search",
        "Job Details দেখা",
        "Profile Management",
        "Application Tracking",
      ],
      button: "Subscribe Now",
      popular: true,
    },

    {
      name: "Pro",
      id: "pro",
      price: "10",
      description: "যারা দ্রুত এবং বেশি Job Opportunity চান",
      applications: "Unlimited Job Apply",
      features: [
        "Unlimited Job Apply",
        "Priority Application",
        "Application Tracking",
        "Advanced Profile",
        "More Job Opportunities",
      ],
      button: "Subscribe Now",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Subscription
          </p>

          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Choose Your Plan
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            আপনার ৩টি Free Job Apply শেষ হয়েছে। এখন একটি subscription
            plan বেছে নিয়ে Unlimited Job Apply করুন।
          </p>
        </div>

        {/* Plans */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.popular
                  ? "border-blue-500 ring-2 ring-blue-100"
                  : "border-gray-200"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-blue-600 px-5 py-1.5 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6 flex items-end gap-1">
                <span className="text-5xl font-bold text-gray-900">
                  ${plan.price}
                </span>

                <span className="mb-1 text-sm text-gray-500">
                  / month
                </span>
              </div>

              {/* Unlimited */}
              <div className="mb-7 rounded-xl bg-blue-50 p-4">
                <p className="font-semibold text-blue-700">
                  ✓ {plan.applications}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8 space-y-4">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-600">
                      ✓
                    </span>

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Subscribe Button */}
              <form action="/api/checkout_sessions" method="POST">
                <input
                  type="hidden"
                  name="plane_id"
                  value={plans.id}
                />

                <section>
                  <button
                    className="
                      w-full
                      rounded-xl
                      bg-gradient-to-r from-blue-600 to-indigo-600
                      px-6 py-3
                      text-lg font-semibold text-white
                      shadow-md
                      transition-all duration-300
                      hover:from-blue-700 hover:to-indigo-700
                      hover:shadow-lg
                      active:translate-y-0
                      focus:outline-none
                      focus:ring-4
                      focus:ring-blue-200
                    "
                    type="submit"
                    role="link"
                  >
                    Checkout
                  </button>
                </section>
              </form>
            </div>
          ))}
        </div>

        {/* Payment Info */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            🔒 Secure payment powered by Stripe
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserPlanePage;

