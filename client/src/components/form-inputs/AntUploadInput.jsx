import { Image, Upload } from 'antd';
import { useState } from 'react';
import { EAntStatusMessage, EImageTypes } from '../../enums';
import { showMessage } from '../../hooks';
import AntMessageText from '../others/StatusMessage';
import { AnimEmojis } from '../../config/configData';
import { getBase64 } from '../../services/commonService';

const AntUploadInput = ({
  label,
  name = '',
  maxFiles = 5,
  uploadProps = {},
  fileList,
  setFileList
}) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const beforeUpload = async (file) => {
    const allowedTypes = [EImageTypes.JPEG, EImageTypes.JPG, EImageTypes.PNG, EImageTypes.WEBP];
    const isImage = allowedTypes.includes(file.type);
    
    if (!isImage) {
      showMessage(
        EAntStatusMessage.ERROR,
        AntMessageText({
          statusText: `This image is not a valid type (jpeg, png, webp)`,
          emoji: AnimEmojis.BigFrown,
        })
      );
      return Upload.LIST_IGNORE;
    }

    setFileList((prev) => [...prev, file]);
    return false;
  };

  const onPreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  return (
    <div className="w-full">
      {/* Label */}
      <div className="label">
        <span className="label-text font-semibold capitalize">{label}</span>
      </div>

      {/* Upload Input Container */}
      <div className="border border-slate-300 rounded-lg p-2">
        <Upload
          listType="picture-card"
          fileList={fileList}
          beforeUpload={beforeUpload}
          onChange={onChange}
          onPreview={onPreview}
          {...uploadProps}
        >
          {fileList.length < maxFiles && '+ Upload'}
        </Upload>
        {previewImage && (
          <Image
            wrapperStyle={{
              display: 'none',
            }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewImage(''),
            }}
            src={previewImage}
          />
        )}
      </div>

      {/* Hidden input to store file names in the form */}
      <input type="hidden" name={name} value={fileList} />
    </div>
  );
};

export default AntUploadInput;