import ControlButtons from './ControlButtons';
import Details from './Details';

const  Player = () => {
    return (
      <div className="container flex justify-center items-center border sm:mt-20 w-96 sm:min-h-0 min-h-screen rounded-lg bg-gray-100">
          <div className="flex flex-col justify-center items-center py-5">
              
                <img src="./images/musicLogo.png" alt="Music Logo" className="object-cover h-12 w-12" />
              

              <p className="py-10 font-medium text-xl">Now Playing</p>

              <Details />

              <ControlButtons />
          </div>
      </div>
    )
}

export default Player;