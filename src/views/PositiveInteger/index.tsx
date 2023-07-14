import { useState, ChangeEvent, useEffect } from "react";
import IntroductionApp from "../../Components/IntroductionApp";
import Navigation from "../../Components/Navigation";

const introductionData = {
  label: "Số nguyên dương",
  content: "<N/A>",
};

interface ICheckInteger {
  render: boolean;
  check: boolean;
}

const PositiveInteger = () => {
  const [value, setValue] = useState<number>(0);
  const [checkInteger, setCheckInteger] = useState<ICheckInteger>({
    render: false,
    check: false,
  });

  useEffect(() => {
    setCheckInteger({ render: false, check: false });
  }, [value]);

  const handleSetValue = (e: ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setValue(val);
  };

  const handleCheckNumber = () => {
    if (value % 1 === 0 && value / 1 > 0) {
      setCheckInteger({ render: true, check: false });
    } else if (value / 1 < 0) {
      setCheckInteger({ render: true, check: true });
    }
  };

  return (
    <section>
      <Navigation />
      <IntroductionApp data={introductionData} />
      <div className="flex flex-col items-center mt-10">
        <div className="h-60 w-1/2 p-10 flex flex-col items-center rounded-lg shadow-lg shadow-slate-500">
          <input
            className="w-30 h-8 p-2 border border-black rounded"
            type="number"
            value={value}
            onChange={handleSetValue}
          />
          <button
            className="mt-4 w-24 h-10 bg-sky-400 shadow-md shadow-slate-500 font-bold rounded"
            onClick={handleCheckNumber}
          >
            Check
          </button>
          {checkInteger.render && (
            <h1 className="pt-6 font-bold text-xl">
              Số {value}
              {checkInteger.check ? " không phải" : null} là số nguyên dương
            </h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default PositiveInteger;
