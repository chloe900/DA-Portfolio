export default function Section2() {
    return (
      <section className="bg-[#172554] bg-cover h-screen flex text-white flex-col">
        <h1 className="text-6xl font-serif ml-20 mt-10">Projects</h1>
        <section>
          <table className="table-auto ml-20 mt-10 w-11/12 border-white border-2">
            <tbody>
              <tr>
                <td className="p-4 border-white border-2">
                  <div className="flex flex-col items-center">
                    <img src="/images/project1.webp" alt="Project 1" className="w-full h-auto mb-4" />
                    <h2 className="text-2xl font-serif">Project 1</h2>
                    <p className="text-lg">Description of Project 1</p>
                  </div>
                </td>
                <td className="p-4 border-white border-2">
                  <div className="flex flex-col items-center">
                    <img src="/images/project2.webp" alt="Project 2" className="w-full h-auto mb-4" />
                    <h2 className="text-2xl font-serif">Project 2</h2>
                    <p className="text-lg">Description of Project 2</p>
                  </div>
                </td>
                <td className="p-4 border-white border-2">
                  <div className="flex flex-col items-center">
                    <img src="/images/project3.webp" alt="Project 3" className="w-full h-auto mb-4" />
                    <h2 className="text-2xl font-serif">Project 3</h2>
                    <p className="text-lg">Description of Project 3</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    );
  }