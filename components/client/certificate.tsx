"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
// Adjust the import based on your Firebase configuration file
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase.config";
// Ensure you have this import if using UUID for file names
import { v4 } from "uuid";
import Link from "next/link";
interface CertificateDownloadProps {
  userName: string;
}

const CertificateDownload: React.FC<CertificateDownloadProps> = ({
  userName,
}) => {
  const [certificateUrl, setCertificateUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadedCertificateUrl, setUploadedCertificateUrl] = useState<
    string | null
  >(null);
  const certificateImageUrl =
    "https://res.cloudinary.com/do3exrhoc/image/upload/v1719248463/certificate_puoub6.webp";

  useEffect(() => {
    const generateCertificate = async () => {
      const certificateImage = new Image();
      certificateImage.crossOrigin = "anonymous";
      certificateImage.src = certificateImageUrl;

      certificateImage.onload = async () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (ctx) {
          canvas.width = certificateImage.width;
          canvas.height = certificateImage.height;

          ctx.drawImage(certificateImage, 0, 0);
          ctx.font = "30px Arial";
          ctx.fillStyle = "black";
          ctx.fillText(userName, 200, 220);

          const certificateDataUrl = canvas.toDataURL("image/png");
          setCertificateUrl(certificateDataUrl);

          // Upload to Firebase
          setUploading(true);
          const imageRef = ref(storage, `certificates/${userName}_${v4()}.png`);
          uploadString(imageRef, certificateDataUrl, "data_url")
            .then(async (snapshot) => {
              const url = await getDownloadURL(snapshot.ref);
              setUploadedCertificateUrl(url);
              setUploading(false);
            })
            .catch((error) => {
              console.error("Error uploading certificate:", error);
              setUploading(false);
            });
        }
      };

      certificateImage.onerror = () => {
        console.error("Failed to load the certificate image.");
      };
    };

    generateCertificate();
  }, [userName]);

  const downloadCertificate = () => {
    if (certificateUrl) {
      const link = document.createElement("a");
      link.download = "certificate.png";
      link.href = certificateUrl;
      link.click();
    }
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      {uploading && <p>Uploading certificate...</p>}
      {certificateUrl ? (
        <>
          <div className="mt-2">
            <img src={certificateUrl} alt="Generated Certificate" />
          </div>
          <Button className="mt-4" onClick={downloadCertificate}>
            Download Certificate
          </Button>
          {uploadedCertificateUrl && (
            <div className="mt-4 flex flex-col items-center justify-center">
              <p>Certificate uploaded to Firebase:</p>
              <Link href={uploadedCertificateUrl} target="blank">
                <Button>View Certificate</Button>
              </Link>
            </div>
          )}
        </>
      ) : (
        <p>Generating certificate...</p>
      )}
    </div>
  );
};

export default CertificateDownload;
