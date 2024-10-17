import { CheckIcon, StarIcon } from "@heroicons/react/20/solid";

import product from "./product";
const reviews = { average: 5, totalCount: 1 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function ProductViewServer() {
  return (
    <div className="lg:max-w-lg lg:self-end">
      <nav aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-2 ralewayRegular">
          {product.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
            <li key={breadcrumb.id}>
              <div className="flex items-center text-sm">
                <a
                  href={breadcrumb.href}
                  className="font-medium blueText hover:text-gray-900"
                >
                  {breadcrumb.name}
                </a>
                {breadcrumbIdx !== product.breadcrumbs.length - 1 ? (
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mohaveHeader">
          {product.name}
        </h1>
      </div>

      <section aria-labelledby="information-heading" className="mt-4">
        <h2 id="information-heading" className="sr-only">
          Product information
        </h2>

        <div className="flex items-center">
          <p className="text-lg sm:text-xl ralewayRegular">
            {`$${product.price}`}
          </p>

          <div className="ml-4 border-l border-gray-300 pl-4">
            <h2 className="sr-only">Reviews</h2>
            <div className="flex items-center">
              <div>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        reviews.average > rating
                          ? "text-yellow-400"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
              </div>
              <p className="ml-2 text-sm ralewayRegular">
                {reviews.totalCount} review (by me)...
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-6">
          <p className="text-base ralewayRegular">{product.description}</p>
        </div>

        <div className="mt-6 flex items-center ralewayRegular">
          <CheckIcon
            aria-hidden="true"
            className="h-5 w-5 flex-shrink-0 blueText"
          />
          <p className="ml-2 text-sm">In stock and ready to ship</p>
        </div>
      </section>
    </div>
  );
}
