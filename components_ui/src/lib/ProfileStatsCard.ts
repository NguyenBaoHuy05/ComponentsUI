const ProfileStatsCard = `export default function ProfileStatsCard() {
  return (
    <div className="max-w-sm border-purple-500 border-2 rounded-2xl">
      <div className="p-6">
        <div className="text-center">
          <div className="w-20 h-20 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl">
            AS
          </div>
          <h3 className="font-semibold text-xl mb-2">Alice Smith</h3>
          <p className="text-gray-600 mb-4">UI/UX Designer</p>
          <div className="flex justify-between space-x-4">
            <div className="text-center">
              <div className="font-bold text-lg">127</div>
              <div className="text-sm text-gray-500">Projects</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg">2.4k</div>
              <div className="text-sm text-gray-500">Followers</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg">89</div>
              <div className="text-sm text-gray-500">Following</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`;
export default ProfileStatsCard;
