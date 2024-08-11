import React, { useState } from 'react';
import { Upload, Message, Button } from '@arco-design/web-react';
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

  const uploadProps = {
    action: 'https://admin.tabmanager.cn/api/file/upload', // 上传的接口地址
    listType: 'picture-card', // 设置上传列表的样式为卡片样式
    multiple: true, // 支持多选文件
    fileList, // 绑定文件列表状态
    onChange: handleFileChange, // 文件状态改变时的回调
    onSuccess: handleUploadSuccess, // 文件上传成功的回调
    onError: handleUploadError, // 文件上传失败的回调
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
