export default function Resume() {
    {/* fix the padding at the bottom of the page of the mbile page */}
  return (
    <section className="min-h-screen pt-32 px-10 md:px-20 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">My Resume</h2>

        {/* Embed PDF in an iframe */}
        <iframe
          src={`${process.env.PUBLIC_URL}/sf-resume.pdf`}
          width="100%"
          height="700px"
          title="Resume PDF"
          className="border rounded shadow-md"
        ></iframe>

        {/* Link to download/open in new tab */}
        <div className="mt-6">
          <a
            href={`${process.env.PUBLIC_URL}/sf-resume.pdf`}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
