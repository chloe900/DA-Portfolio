export default function Section3() {
    return(
        <section className = "bg-[#1e3a8a] bg-cover h-screen flex text-white flex-col">
            <h1 className = "text-6xl font-serif ml-20 mt-10">Skills Acquired</h1>
            <p className = "text-xl font-serif ml-20 py-8">Diving into Data Analysis</p>
        <section>
        <table className="table-auto ml-20 mt-10 w-11/12 border-white border-2">
          <tbody>
            <tr className="border-white border-2">
              <td className="p-4 border-white border-2 flex flex-col">
                <p className = "text-3xl font-serif p-4">Data Visualization</p>
                <p className = "font-serif p-4" >Visual Story Telling</p>
              </td>
              <td className="p-4 border-white border-2">
                <p className = "font-serif">
                    <ul>
                        <li>Tableau</li>
                        <li>Power BI</li>
                        <li>Excel</li>
                    </ul>
                </p>
              </td>
            </tr>
            <tr className="border-white border-2">
              <td className="p-4 border-white border-2 flex flex-col">
                <p className = "text-3xl font-serif p-4">Data Cleaning</p>
                <p className = "font-serif p-4" >Reducing Noise</p>
              </td>
              <td className="p-4 border-white border-2">
                <p className = "font-serif">
                    <ul>
                        <li>Python</li>
                        <li>R</li>
                        <li>SQL</li>
                    </ul>
                </p>
              </td>
            </tr>
            <tr className="border-white border-2">
              <td className="p-4 border-white border-2 flex flex-col">
                <p className = "text-3xl font-serif p-4">Data Modeling</p>
                <p className = "font-serif p-4" >Structuring Data</p>
              </td>
              <td className="p-4 border-white border-2">
                <p className = "font-serif">
                <ul>
                    <li>ER Diagrams</li>
                    <li>Normalization</li>
                    <li>UML</li>
                  </ul>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
    )
}