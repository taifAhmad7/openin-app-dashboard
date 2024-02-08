function Table({ data }) {
  return (
    <div className="overflow-x-auto mt-20 p-4">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>SI No.</th>
            <th>Links</th>
            <th>Prefix</th>
            <th>Add tags</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>

              <td className="text-blue-500 underline hover:no-underline">
                <a href={item.links}>{item.links}</a>
              </td>
              <td>{item.prefix}</td>
              <td>
                <select className="select w-full max-w-xs">
                  <option disabled selected>
                    Select tags
                  </option>
                  {item.selecttags.split(', ').map((tag) => (
                    <option key={tag}>{tag}</option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
