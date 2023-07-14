import { Props } from "../types/introductionApp";

const IntroductionApp = (props: Props) => {
  const { data } = props;
  return (
    <section>
      <div className="font-mono flex flex-col items-center text-center text-white pt-4">
        <h1 className="p-2 text-4xl font-black w-1/4 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-md shadow-lg shadow-sky-700">
          {data.label}
        </h1>
        <p className="p-2 mt-3 w-2/5 font-bold bg-gradient-to-r from-sky-400 to-indigo-500 rounded-md shadow-lg shadow-sky-700">
          {data.content}
        </p>
      </div>
    </section>
  );
};

export default IntroductionApp;
