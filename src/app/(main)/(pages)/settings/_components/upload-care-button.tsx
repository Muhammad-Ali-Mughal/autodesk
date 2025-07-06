"use client";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import React from "react";

type Props = {};

function UploadCareButton({}: Props) {
  return (
    <div>
      <FileUploaderRegular
        pubkey="269a9778ba9e5d1bc57f"
        ctx-name="profile-uploader" // ✅ REQUIRED
        sourceList="local, camera, facebook, gdrive"
        classNameUploader="uc-dark"
      />
      {/* <uc-config
        ctx-name="my-uploader"
        pubkey="YOUR_PUBLIC_KEY"
        img-only="true"
        multiple="true"
        max-local-file-size-bytes="524288000"
        use-cloud-image-editor="true"
        source-list="local, url, camera, dropbox"
      ></uc-config>
      <uc-file-uploader-regular
        ctx-name="my-uploader"
        class="uc-dark"
      ></uc-file-uploader-regular> */}
    </div>
  );
}

export default UploadCareButton;
