import 'animate.css'
// <div className="circle-animation"></div>
export function CirclularComponent( {text , margin} ){
    return (
      <div className={`flex items-center justify-center w-80 h-80 ${margin} rounded-full border-2 border-black bg-gray-200 overflow-hidden relative`}>                
        <span className="text-white text-xl z-10 relative animate_animated animate_pulse animate_repeat-3">{text}</span>
      </div>
      );
}