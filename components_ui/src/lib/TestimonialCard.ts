const TestimonialCard = `export default function TestimonialCard() {
  return (
    <div className="max-w-md border border-gray-200 rounded-lg shadow-lg p-4 ">
      <div className="p-6">
        <div className="flex text-yellow-400 mb-3">★★★★★</div>
        <p className="text-cyan-300 mb-4 italic">
          &quot;This product has completely transformed how we work. The team is
          more productive and our clients are happier than ever.&quot;
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
            SM
          </div>
          <div className="ml-3">
            <h4 className="font-semibold">Sarah Miller</h4>
            <p className="text-sm text-gray-600">CEO, TechCorp</p>
          </div>
        </div>
      </div>
    </div>
  );
}
`;
export default TestimonialCard;
