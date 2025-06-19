export default function AboutMe() {
  {/* everything here is a mess beware */}

  return (
    <section id="about" className="bg-gray-100 px-6 md:px-20 py-16 text-gray-800 pt-32">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* quick intro about me */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 max-w-5xl mx-auto">
          <div className="md:w-2/3 space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">About me</h2>
            <p className="text-gray-800 text-xl leading-relaxed">
              Hey, I am Samantha. I was born and raised in Oakland, California.
              I am a first-gen college graduate from UC Berkeley in Electrical Engineering
              and Computer Science. I am highly interested in robotics and user interface
              (UI) design.  I am currently in search of a full-time
              position as a software engineer in a place that fosters innovation and creativity.
              I enjoy working with others and want to find a place where collaboration is encouraged.
            </p>
          </div>
          <img src="/IMG_8451.png" alt="Profile" className="w-60 rounded-lg shadow-md ml-auto" />
        </div>

        {/* robotics stuff */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 max-w-5xl mx-auto">
          <div className="md:w-2/3 space-y-4">
            <p className="text-gray-800 text-xl leading-relaxed">
              I am super grateful that I found the robotics community at UC Berkeley.
              College can be overwhelming and a never-ending cycle of readings and study
              sessions, but it was through robotics that I got hands-on experience. I
              participated in combat robotics with an amazing club on campus called Robobears.
              I got the opportunity to travel to New York for the first time and fight robots,
              two of my lifelong goals! I was given the opportunity to be facilator for a class about 
              manficutring and designing robots for three years and was the president of the robotics club 
              for 2 years. I also got to work on big industry-standard robots
              during one of my favorite classes at Cal called 106a 🦾.
            </p>
          </div>
          <img src="/IMG_3903.png" alt="Robotics" className="w-60 rounded-lg shadow-md ml-auto" />
        </div>

        {/* recap about teaching experience */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-6" >
          <div className="md:w-2/3 space-y-4 md:order-2">
            <p className="text-gray-800 text-xl leading-relaxed">
              Within my four years at UC Berkeley, I have taught STEM-related courses to both high school 
              and college students. I love being an engineer, and it is through education that I have the 
              power to motivate younger generations that engineering is for everyone, regardless of their 
              background. Getting your code to work after hours of debugging is such a rewarding feeling, 
              but seeing that through the eyes of a high schooler has been so inspirational. But most 
              importantly, I am passionate about creating a space for women of color to prosper in STEM. ❤️
            </p>
          </div>
          <img
            src="/Image_20250611_201617_234.jpg"
            alt="Teaching"
            className="w-60 md:order-1 rounded-lg shadow-md"/>
        </div>

        {/* who am i outside */}
        <div className="space-y-4 max-w-5xl mx-auto">
          <p className="text-gray-800 text-xl leading-relaxed">
            I like to believe that I am more than just who I am at school and work,
            although my family begs to differ lol. I love going on hikes ⛰ and trying
            new food spots in the Bay Area, which is the best place to live for a foodie
            like me. I love spending time with my dog Nova, who is the most spoiled dog ever!🐾
             Most importantly, I am a big family person. I am the eldest of 3 and have a big
            Hispanic family 🇲🇽, so we are always celebrating someone's birthday!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <img src="/IMG_3152.png" alt="Hiking" className="rounded-lg shadow-md" />
            <img src="/IMG_1859.png" alt="Dog Nova" className="rounded-lg shadow-md" />
            <img src="/IMG_8468.png" alt="Family" className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
