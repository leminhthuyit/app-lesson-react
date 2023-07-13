const Slide = () => {
  return (
    <div className="bg-gradient-to-r text-white from-blue-500 to-cyan-500 flex justify-between items-center p-16 space-x-2">
      <div>
        <p className="text-5xl font-bold">Lesson ReactJS App</p>
        <p className="text-lg pt-6">
          Tổng hợp các kiến thức JavaScript, React, Redux, Axios, Typescript,
          SCSS, Tailwind
        </p>
      </div>
      <div>
        <img
          src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Slide;
