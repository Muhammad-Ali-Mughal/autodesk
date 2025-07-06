"use client";
import React from "react";
import UploadCareButton from "./upload-care-button";
import * as LR from "@uploadcare/react-uploader";

type Props = {
  userImage: string | null;
  onDelete?: any;
  onUpload: any;
};

function ProfilePicture() {
// { onUpload, userImage, onDelete }: Props
  return (
    <div className="flex flex-col">
      <p className="text-lg text-white"> Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
        <UploadCareButton />
      </div>
    </div>
  );
}

export default ProfilePicture;
