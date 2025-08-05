const PricingCard = `import { Button } from "./Button";

export default function PricingCard() {
  return (
    <div className="max-w-sm border-2 border-blue-500 border-opacity-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ">
      <div className="p-6">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Pro Plan</h3>
          <div className="mb-4">
            <span className="text-4xl font-bold">$29</span>
            <span className="text-gray-600">/month</span>
          </div>
          <ul className="text-left space-y-2 mb-6">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>Unlimited projects
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>24/7 support
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>Advanced analytics
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>Team collaboration
            </li>
          </ul>
          <Button className="w-full">Choose Plan</Button>
        </div>
      </div>
    </div>
  );
}
`;
export default PricingCard;
