const FeatureCard = ({
  title,
  content,
  link,
}: {
  title: string;
  content: string;
  link?: string;
}) => {
  return (
    <div className="flex flex-col justify-between p-5 border hover:border-primary-500 rounded shadow-sm">
      <div>
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
          <svg
            className="w-12 h-12 text-deep-purple-accent-400"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
        <h6 className="mb-2 font-semibold leading-5">{title}</h6>
        <p className="mb-3 text-sm text-gray-900">{content}</p>
      </div>
      {link && (
        <a
          href={link}
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Learn more
        </a>
      )}
    </div>
  );
};

export default FeatureCard;
