import Navigation from "../../Components/Navigation";

const Product = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-r from-sky-400 to-indigo-400 p-10">
        <table className="border-collapse border border-slate-400 bg-slate-50">
          <thead>
            <tr>
              <th className="border border-slate-300"></th>
              <th className="border border-slate-300">City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300">Indiana</td>
              <td className="border border-slate-300">Indianapolis</td>
            </tr>
            <tr>
              <td className="border border-slate-300">Ohio</td>
              <td className="border border-slate-300">Columbus</td>
            </tr>
            <tr>
              <td className="border border-slate-300">Michigan</td>
              <td className="border border-slate-300">Detroit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Product;
