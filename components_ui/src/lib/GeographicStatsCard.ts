const GeographicStatscard = `export default function GeographicStatsCard() {
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow-md">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
            <span className="text-blue-600 text-lg">🌍</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-200">Global Reach</h3>
        </div>
        <div className="mb-4">
          <p className="text-3xl font-bold text-green-500">47</p>
          <p className="text-sm text-gray-600">Countries reached</p>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-sm mr-2 bg-black rounded-lg w-[30px] text-center border border-gray-100 p-1">
                🇺🇸
              </span>
              <span className="text-sm text-gray-200  ">United States</span>
            </div>
            <span className="text-sm font-medium text-cyan-500">34%</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-sm mr-2 bg-black rounded-lg w-[30px] text-center border border-gray-100 p-1">
                🇬🇧
              </span>
              <span className="text-sm text-gray-200 ">United Kingdom</span>
            </div>
            <span className="text-sm font-medium text-pink-500">18%</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-sm mr-2 bg-black rounded-lg w-[30px] text-center border border-gray-100 p-1">
                🇩🇪
              </span>
              <span className="text-sm text-gray-200 ">Germany</span>
            </div>
            <span className="text-sm font-medium text-orange-500">12%</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-sm mr-2 bg-black rounded-lg w-[30px] text-center border border-gray-100 p-1">
                🌐
              </span>
              <span className="text-sm text-gray-200 ">Others</span>
            </div>
            <span className="text-sm font-medium text-purple-500">36%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
`;
export default GeographicStatscard;
