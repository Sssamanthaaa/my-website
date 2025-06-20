import ProjectCard from "../components/projectCard.js";
import babyLogo from '../images/baby-on-the-go-LOGO.png';
import stackImg from '../images/Sawyer-stack-attack.png';
import geniusImg from '../images/Genius.png';
import robotGif from '../images/test3.gif';
import csLogo from '../images/cs161-logo.png';
import slasherImg from '../images/Slayer.png';
import berkeleyImg from '../images/berkeley-lab-log.png';

{/* NEEDS ALOT OF WORK!! ALL CARDS ARE BORING AND NEED MORE INFO! */}
export default function Projects() {
  return (
  <section id="projects" className="snap-start bg-gray-100 px-6 md:px-20 pt-32">
      <div className="max-w-5xl mx-auto mb-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Projects</h2>
        <p className="text-gray-800 text-xl leading-relaxed">
        I have a mixture of personal projects, academic projects, to curriculum projects. 
        They also range from independent, pair, to group projects. Some of the projects 
        have my code under a private repo and if you would like to see my work more 
        thoroughly feel free to reach out so I give you access. 😁         </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        <ProjectCard
          title="Baybe on the Go"
          icon={babyLogo}
          github="https://github.com/gonzaIke/Baybe-On-The-Go"
          link="https://your-site.com"
          description= {`A collaborative project developed as part of a UI Design class, 
          where we built a website to help parents traveling with young children. We 
          incorporated AI to simplify packing and organize travel documents. I created a demo 
          video to showcase the product's goals and usability. My main contribution was designing 
          and implementing the documentation feature, which uses AI to scan and automatically 
          sort documents into their appropriate categories.`}
        />

        <ProjectCard
          title="Stack Atack"
          icon={stackImg}
          github="https://github.com/tsg132/eecs106a-final"
          link="https://tsg132.github.io/106final/"
          description= {`A collaborative project developed as part of a robotics class, 
          where we programmed a Sawyer Robot to scan a table for blocks, locate them, 
          find a path to pick up the block ,and stack them into either a pymaid, 
          hortiontal stack or vertical stack. My main contribution was the horizontal 
          stacking, this was a big issue for us because we had to make sure that the 
          gripper didnt get hit or move other blocks as it attempted to place another block.`}
        />

        <ProjectCard
          title="Genieus"
          icon={geniusImg}
          link="https://www.figma.com/slides/a2Hc9phJ5H9VNsPPCvjIlU/DesInv_Final_Project?node-id=127-8&t=iZBeRA4LAHksPuSp-1"
          video="https://drive.google.com/drive/folders/1edP2iuz31XDyeQ6B9gg0e3rPxhZY2q4-?usp=drive_link"
          description= {`A collaborative project developed as part of a design class, where 
          we developed a product that encoperates AI into a form of everyday technology. 
          We came up with Genieus an adaptive musical vase that can elvate a space based 
          on the detected energy in the room.`}
        />

        <ProjectCard
          title="EECS106a Robotics Labs"
          icon={robotGif}
          github="https://github.com/Sssamanthaaa/106a-labs"
          description= {`A collaborative lab as part of a robotics class, 
          where we worked with a Rethink Robot sawyer and turtle bot. We used 
          ROS and SLAM for Simultaneous Locomotion and Mapping. other tools like Lidar sensors, camera, and more!`}
        />

        <ProjectCard
          title="Secure Sharable File System"
          icon={csLogo}
          github="https://github.com/cs161-students/sp24-proj2-161-proj2-angela-samantha"
          link = "https://docs.google.com/document/d/1SuW6TJbPMyR9eArrKUhR7heeISdoPSjoRmZTIizFxSE/edit?usp=sharing"
          description= {`A collaborative project as part of a cyber secutirty class, 
          where we designed a file sharing system that creates a safe environment for 
          users and protexts them from attacks and other malious users.`}
        />

        <ProjectCard
          title="Slasher"
          icon={slasherImg}
          github="https://github.com/Sssamanthaaa/Slasher-CombatRobot"
          link = "https://www.figma.com/slides/WBrLHsl6m7Y78THtMMibV1/Project2?node-id=1-114&t=IWy800TiFSIKznJP-1"
          description= {`A individual project as part of a robotics club, where 
          I designed a combat robot on CAD and manifuatured all part at UC 
          Berkeleley Jacob's Machine Shop. I used the sawmill, Drill Press, Laser cutter,
           Waterjet, and more. I also got the opportunity to take my robot Slasherto the NHRL Compettion.`}
        />

        <ProjectCard
          title="Berkeley Lab k-12 Autonmous Robot"
          icon={berkeleyImg}
          github="https://github.com/Sssamanthaaa/LBNL-UltraSonicRobot-SAGE"
          link = "https://docs.google.com/document/d/1nQrLKBx4-WxRqAirzwuitr7w4bXJCsgjGqO7zh6QiS8/edit?usp=sharing"
          description= {`A collaborative project as part of a cyber secutirty class, 
          where we designed a file sharing system that creates a safe environment for 
          users and protexts them from attacks and other malious users.`}
        />



      </div>
    </section>
  );
}
