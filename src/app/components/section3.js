export default function Section3() {
  return (
    <section id="skills" className="bg-[#1e3a8a] bg-cover min-h-screen flex items-center justify-center text-white">
      <div className="w-full max-w-3xl">
        <h1 className="text-6xl font-serif text-center mb-10">Skills</h1>
        <section className="overflow-x-auto">
          <table className="table-auto w-full border-white border-2">
            <tbody>
              <tr className="border-white border-2">
                <td className="p-2 border-white border-2">
                  <div className="flex flex-col items-center">
                    <p className="text-3xl font-serif p-4">Data Visualization</p>
                    <p className="font-serif p-4">Visual Story Telling</p>
                  </div>
                </td>
                <td className="p-2 border-white border-2">
                  <div className="flex flex-col items-center">
                    <ul className="font-serif">
                      <li>Tableau</li>
                      <li>Power BI</li>
                      <li>Excel</li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr className="border-white border-2">
                <td className="p-4 border-white border-2">
                  <div className="flex flex-col items-center">
                    <p className="text-3xl font-serif p-4">Data Cleaning</p>
                    <p className="font-serif p-4">Reducing Noise</p>
                  </div>
                </td>
                <td className="p-4 border-white border-2">
                  <div className="flex flex-col items-center">
                    <ul className="font-serif">
                      <li>Python</li>
                      <li>R</li>
                      <li>SQL</li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr className="border-white border-2">
                <td className="p-4 border-white border-2">
                  <div className="flex flex-col items-center">
                    <p className="text-3xl font-serif p-4">Data Modeling</p>
                    <p className="font-serif p-4">Structuring Data</p>
                  </div>
                </td>
                <td className="p-4 border-white border-2">
                  <div className="flex flex-col items-center">
                    <ul className="font-serif">
                      <li>ER Diagrams</li>
                      <li>Normalization</li>
                      <li>UML</li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </section>
  );
}