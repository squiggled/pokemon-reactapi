function MoveTable({ pokeItem, stringFormatter }) {
  return (
    <div className="flex justify-center">
      <table className="table-auto w-3/5 text-xs  items-center border border-collapse">
        <thead className=" bg-gray-300 font-bold text-xl">
          <tr > 
            <th className="px-4 py-2 border font-semibold">Level</th>
            <th className="px-4 py-2 border font-semibold">Move</th>
            {/* <th className="px-4 py-2 border font-semibold">Type</th>
            <th className="px-4 py-2 border font-semibold">Category</th> */}
            <th className="px-4 py-2 border font-semibold">Learn Method</th>
            {/* <th className="px-4 py-2 border font-semibold">Accuracy</th>
            <th className="px-4 py-2 border font-semibold">PP</th> */}
          </tr>
        </thead>
        <tbody className="text-lg">
          {/* Level */}
          {pokeItem["moves"].map((x) => (
            <tr className="text-center" id="move">
              <td>{x["version_group_details"][0]["level_learned_at"]}</td>
              <td>{stringFormatter(x["move"]["name"])}</td>
              <td>
                {stringFormatter(
                  x["version_group_details"][0]["move_learn_method"]["name"]
                )}
              </td>
              {/* <td></td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default MoveTable;
