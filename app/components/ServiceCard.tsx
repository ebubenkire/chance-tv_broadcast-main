interface ServiceCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

export default function ServiceCard({ title, description, onClick }: ServiceCardProps) {
  return (
    <button
      onClick={onClick}
      className="group text-left w-full p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
    >
      <h3 className="text-xl font-bold mb-2 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
      <span className="inline-flex items-center text-red-600 font-semibold mt-4">
        Learn More
        <span className="ml-2">→</span>
      </span>
    </button>
  );
} 