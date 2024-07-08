import React, { useState } from 'react';
import VideoModal from './VideoModal';

interface IProps {
  tableData: any[];
}

const OrderTable: React.FC<IProps> = ({ tableData }) => {
  const [url, setUrl] = useState<string>('');
  const [isModal, setIsModal] = useState(false);

  return (
    <div className="w-full pt-16 ">
      <table className="text-black border-2 w-full ">
        <thead className="py-4 text-md bg-gray-100">
          <tr className="border-y-2 py-8">
            <th>Serial No.</th>
            <th className="py-4">Tote 1 ID</th>
            <th>Start Scan Time</th>
            <th>Tracking ID</th>
            <th>Scan Stop Time</th>
            <th>Video</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((value, index) => {
            return (
              <tr key={'table_row_key' + index} className={`border-y-2 text-center text-black`}>
                <td>{index}</td>
                <td className="py-4">{value.toteID}</td>
                <td>{value.startTime}</td>
                <td>{value.trackingID}</td>
                <td>{value.stopTime}</td>
                <td className="">
                  <button
                    onClick={() => {
                      setUrl(value.videoPath);
                      setIsModal(true);
                    }}
                    className="font-semibold text-blue-700 "
                  >
                    Check Video
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {isModal && <VideoModal setModal={setIsModal} url={url} />}
    </div>
  );
};

export default OrderTable;
