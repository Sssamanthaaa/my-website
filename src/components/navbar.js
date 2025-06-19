import sfLogo from '../images/sf-logo.png'; 

export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-white drop-shadow-[0_4px_4px_rgba(236,72,153,0.4)] shadow-md">       {/*  <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"> */}
        <div className="w-full px-6 py-4 flex justify-between items-center">
          {/* logo for now should look into updating doesnt really fit page */}
          <div className="text-xl font-bold">
          <a href="#home"> 
            <img src={sfLogo} alt="SF Logo"className="h-10 w-10 object-contain scale-150 cursor-pointer"/> </a>          
          </div>

          {/* navigation to the about me, projects, and contact me. perhaps add resume tab or achievements or roles */}
          <ul className="flex space-x-6 text-base font-medium">
            <li><a href="#about" className="font-medium text-gray-800 hover:text-pink-600">About me</a></li>
            <li><a href="#projects" className="font-medium ext-gray-800 hover:text-pink-600">Projects</a></li>
            <li><a href="#resume" className="font-medium text-gray-800 hover:text-pink-600">My Resume</a></li>
            <li><a href="mailto:samantha.flores@berkeley.edu" className="bg-gray-800 text-white px-6 py-2 rounded-full font-medium hover:bg-pink-600 transition px-6 py-3">Contact me</a></li>
            
          </ul>

        </div>
      </nav>
    );
  }
  