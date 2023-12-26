const HomePage = () => {
  return (
    <>
      <header
        className="bg-cover bg-center h-screen bg-gradient-to-b from-slate-900 to-transparent flex items-center"
        style={{ backgroundImage: `url("/home-header2.jpg")` }}
      >
        <div className="text-slate-50  ml-7 md:ml-48 mt-56 break-inside-avoid-column">
          <div className="text-5xl md:whitespace-pre-line break-words lg:text-7xl">
            Lets Relax &<br /> Unwind by the Sea
          </div>
          <div className="text-1xl font-semibold">
            Your Serene Escape at the Beach Hotel
          </div>
        </div>
      </header>
    </>
  );
};

export default HomePage;
