import { useRef, useState } from 'react';
import * as xlsx from 'xlsx';
import Table from './tabel';

function Upload() {
  const [data, setData] = useState([]);
  const myRef = useRef(null);

  async function handleFiles() {
    const file = myRef.current.files[0];
    const data = await file.arrayBuffer(file);
    const excelFile = xlsx.read(data);
    const excelSheet = excelFile.Sheets[excelFile.SheetNames[0]];
    const excelJson = xlsx.utils.sheet_to_json(excelSheet);

    setData(excelJson);
  }
  console.log(data);
  return (
    <div className="flex flex-col w-full ">
      <p className="ml-8 text-xl self-start">Upload CSV</p>

      <div className="self-center mt-40 ">
        <form>
          <input
            ref={myRef}
            type="file"
            className="file-input file-input-bordered file-input-lg w-full max-w-xs"
            onChange={handleFiles}
          />
        </form>
      </div>

      {data && (
        <>
          <p className="ml-8 mt-20 font-semibold text-xl">Uploads</p>
          <Table data={data} />
        </>
      )}
    </div>
  );
}

export default Upload;
