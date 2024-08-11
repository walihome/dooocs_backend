import React, { useState } from 'react';
import { Upload, Message, Button, UploadProps } from '@arco-design/web-react';
import { IconUpload } from '@arco-design/web-react/icon';

export default function Monitor() {
  const [fileList, setFileList] = useState([]);

  const handleFileChange = (fileList) => {
    setFileList(fileList);
  };

  const handleUploadSuccess = () => {
    Message.success('上传成功');
    setFileList([]); // 清空列表
  };

  const handleUploadError = () => {
    Message.error('上传失败，请重试');
  };

  const uploadProps: UploadProps = {
    action: 'https://admin.tabmanager.cn/api/file/upload',
    listType: 'picture-card',
    multiple: true,
    fileList,
    onChange: handleFileChange,
    onSuccess: handleUploadSuccess,
    onError: handleUploadError,
  };

  return (
    <div>
      <h1>图片批量上传</h1>
      <Upload {...uploadProps}>
        <Button icon={<IconUpload />} type="primary">
          点击上传图片
        </Button>
      </Upload>
    </div>
  );
}
