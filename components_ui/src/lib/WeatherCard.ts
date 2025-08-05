const WeatherCard = `export default function WeatherCard() {
  return (
    <div className="max-w-sm bg-gradient-to-br from-blue-400 to-blue-600 text-white border-0 rounded-lg">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold">San Francisco</h3>
            <p className="text-sm opacity-90">Partly Cloudy</p>
          </div>
          <span className="text-3xl">⛅</span>
        </div>
        <div className="mb-4">
          <span className="text-4xl font-bold">72°F</span>
        </div>
        <div className="flex justify-between text-sm opacity-90">
          <div>Humidity: 65%</div>
          <div>Wind: 8 mph</div>
        </div>
      </div>
    </div>
  );
}
`;
export default WeatherCard;
