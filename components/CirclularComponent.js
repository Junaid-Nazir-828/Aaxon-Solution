export function CirclularComponent( {text , margin} ){
    return (
      <div className={`flex items-center justify-center w-80 h-80 ${margin} rounded-full border-2 border-black bg-gray-200 overflow-hidden relative`}>
        <div className="circle-animation"></div>
        <span className="text-white text-xl z-10 relative">{text}</span>
      </div>
      );
}