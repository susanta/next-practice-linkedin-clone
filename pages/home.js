import Image from 'next/image';
import HeaderLink from '../components/HeaderLink';
import ExploreIcon from '@mui/icons-material/Explore';
import GroupIcon from '@mui/icons-material/Group';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

function Home() {
  return (
    <div className="space-y-10">
      <header className="flex flex-row justify-between items-center py-4 px-4 xl:px-0 max-w-screen-lg mx-auto">
        <div className="relative w-36 h-10">
          <Image
            src="https://rb.gy/vtbzlp"
            priority
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
            <HeaderLink Icon={ExploreIcon} text="Discover" />
            <HeaderLink Icon={GroupIcon} text="People" />
            <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" />
            <HeaderLink Icon={BusinessCenterIcon} text="Jobs" />
          </div>
          <div className="pl-4">
            <button className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 shadow-inner transition-all   hover:bg-blue-50">
              Sign in
            </button>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center overflow-hidden">
        <div className="flex flex-col md:flex-row max-w-screen-lg mx-auto px-4 xl:px-0">
          <div className="space-y-6 xl:space-y-10 shrink-0">
            <h1 className="text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug">
              Welcome to your professional community
            </h1>
            <div className="space-y-4">
              <div className="intent">
                <h2 className="text-xl">Search for a job</h2>
                <ArrowForwardIosRoundedIcon className="text-gray-700" />
              </div>
              <div className="intent">
                <h2 className="text-xl">Find a person you know</h2>
                <ArrowForwardIosRoundedIcon className="text-gray-700" />
              </div>
              <div className="intent">
                <h2 className="text-xl">Learn a new skill</h2>
                <ArrowForwardIosRoundedIcon className="text-gray-700" />
              </div>
            </div>
          </div>

          {/* <div className="relative xl:shrink w-80 h-80 xl:w-[650px] xl:h-[650px]">
          <Image src="https://rb.gy/vkzpzt" layout="fill" priority />
        </div> */}

          <img
            className="max-w-[80%] mx-auto mt-5 block z-[-1] md:max-w-full md:w-[700px] md:h-[560px] relative xl:shrink"
            alt="Welcome to your professional community"
            src="https://media.licdn.com/media//AAYQAgSrAAgAAQAAAAAAADCLr3coQt8AQiyj4giyWxfjsg.svg"
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
