import FeatureCard from "components/FeatureCard";
import Logo from "components/Logo";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <header className="container flex justify-between items-center mx-auto py-2 px-8 md:px-4">
        <Logo />
        <nav>
          <ul className="flex items-center justify-center">
            <li className="mr-5">
              <a href="#features" className="font-medium">
                Features
              </a>
            </li>
            <li className="">
              <a href="#" className="font-medium">
                Docs
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <span className="relative left-96 top-20">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect
              fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
              width="52"
              height="24"
            />
          </svg>
        </span>
        <div className="container mx-auto flex flex-col justify-center my-14 px-4 py-8">
          <span className="text-gray-600 font-semibold tracking-wider text-center uppercase">
            Open source. Free forever
          </span>
          <h1 className="text-center font-inter text-7xl my-5 max-w-2xl mx-auto leading-none font-black tracking-wider">
            More than a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-rose-700">
              url shortner.
            </span>
          </h1>

          <div className="text-center mt-5">
            <a
              href="/docs"
              className="text-xl inline-block bg-blue-600 hover:scale-125 rounded transition-transform text-white py-5 px-10"
            >
              Learn More &rarr;
            </a>
          </div>
        </div>
      </main>
      <section
        id="features"
        className="bg-white
        "
      >
        <div className="container mx-auto px-8 md:px-4 py-10">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Features
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">More</span>
                </span>{" "}
                than a url shortner
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                List of features that make it easy to shorten and share your
                links.
              </p>
            </div>
            <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                title="Free and open source."
                content="Shtr. is free and open source available in MIT license on Github."
                link="https://github.com/projectashik/shtr"
              />
              <FeatureCard
                title="Internationalization"
                content="Currently available in around 4 languages and more coming soon."
                link="https://github.com/projectashik/shtr"
              />
              <FeatureCard
                title="Easy to install."
                content="One click installation on Netlify, Vercel, Railway, Heroku and more."
                link="https://github.com/projectashik/shtr"
              />
              <FeatureCard
                title="Analytics"
                content="You can get to know about the traffic of your links like country, browsers, referrals and more coming."
                link="https://github.com/projectashik/shtr"
              />
              <FeatureCard
                title="Bulk Create"
                content="Shorten multiple domains at once."
                link="https://github.com/projectashik/shtr"
              />
              <FeatureCard
                title="Editable"
                content="You can easily edit the back half the the shortened link. Create a link with custom slug or alias."
                link="https://github.com/projectashik/shtr"
              />
              <FeatureCard
                title="Branded Domain"
                content="You can deploy shtr in your own domain name."
                link="https://github.com/projectashik/shtr"
              />
              <FeatureCard
                title="Password Protected"
                content="Short links can be password protected. You can protect your links with a password."
                link="https://github.com/projectashik/shtr"
              />
              <FeatureCard
                title="Editable link destination"
                content="You can edit the link destination of the shortened link after it is created."
                link="https://github.com/projectashik/shtr"
              />
              <FeatureCard
                title="QR Code"
                content="You can share your links with the qr code."
                link="https://github.com/projectashik/shtr"
              />
              <FeatureCard
                title="API"
                content="Easily create short links using the API."
                link="https://github.com/projectashik/shtr"
              />
              <FeatureCard
                title="Refresh Links"
                content="You can refresh the link and start the analytics from the beginning."
                link="https://github.com/projectashik/shtr"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
