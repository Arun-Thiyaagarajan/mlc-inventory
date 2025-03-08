import { Edit, Trash2 } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { toTitleCase } from '../../utils/stringUtils';
import { Image, Popconfirm, Tooltip } from 'antd';
import { EyeOutlined } from "@ant-design/icons";

const DaisyTable = ({ columns }) => {
  const { tilesData } = useSelector((state) => state.inventory);

  const confirm = (e) => {
    console.log(e);
    // message.success('Click on Yes');
  };
  const cancel = (e) => {
    console.log(e);
    // message.error('Click on No');
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className='font-bold text-neutral text-sm'>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            {columns.map((column) => (
              <th key={column.id}>
                {column.title}
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tilesData.map((data) => (
            <tr key={data._id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <Image.PreviewGroup items={data.images}>
                        <Image
                          src={data.images[0]}
                          preview={{ mask: <EyeOutlined /> }}
                          alt="Tile Image"
                          height='100%'
                        />
                      </Image.PreviewGroup>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{toTitleCase(data.design)}</div>
                    <div className="text-sm opacity-50">{data.size}</div>
                  </div>
                </div>
              </td>
              <td>{toTitleCase(data.brand)}</td>
              <td>{toTitleCase(data.type)}</td>
              <td>Rs.{data.sqftRate}</td>
              <td>{data.noOfBoxes}</td>
              <td>{data.pcsPerBox}</td>
              <td>Rs.{data.boxRate}</td>
              <th className='flex flex-col lg:flex-row'>
                <Tooltip title="Edit">
                  <button className="btn btn-square btn-ghost">
                    <Edit />
                  </button>
                </Tooltip>
                <Tooltip title="Delete">
                  <Popconfirm
                    title="Delete the Tile"
                    description="Are you sure to delete this Tile?"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    <button className="btn btn-square btn-ghost">
                        <Trash2 />
                    </button>
                  </Popconfirm>
                </Tooltip>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DaisyTable;