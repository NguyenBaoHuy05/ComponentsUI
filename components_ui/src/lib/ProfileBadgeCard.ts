const ProfileBadgeCard = `export default function ProfileBadgeCard() {
  return (
    <div className="max-w-sm relative border-2 rounded-2xl  shadow-lg">
      <div className="p-6">
        {/* <div className="absolute top-[1px] right-[4px]">
          <button className="bg-blue-100 text-blue-800 rounded-lg text-[12px] px-1">
            ✓ Verified
          </button>
        </div> */}
        <div className="flex items-center space-x-4 py-1">
          <div className="relative">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              EM
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Emma Wilson</h3>
            <p className="text-gray-600">Product Manager</p>
            <p className="text-sm text-green-600">● Online</p>
          </div>
        </div>
      </div>
    </div>
  );
}
`;
export default ProfileBadgeCard;
