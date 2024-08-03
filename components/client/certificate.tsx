"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";

interface CertificateDownloadProps {
  userName: string;
}

const CertificateDownload: React.FC<CertificateDownloadProps> = ({
  userName,
}) => {
  const [certificateUrl, setCertificateUrl] = useState<string | null>(null);
  const certificateImageUrl =
    "https://res.cloudinary.com/do3exrhoc/image/upload/v1719248463/certificate_puoub6.webp"; // URL of the hosted certificate image

  useEffect(() => {
    const generateCertificate = async () => {
      const certificateImage = new Image();
      certificateImage.crossOrigin = "anonymous"; // Set crossOrigin attribute to handle CORS
      certificateImage.src = certificateImageUrl;

      certificateImage.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (ctx) {
          canvas.width = certificateImage.width;
          canvas.height = certificateImage.height;

          ctx.drawImage(certificateImage, 0, 0);
          ctx.font = "30px Arial"; // Adjust the font size and style as needed
          ctx.fillStyle = "black"; // Adjust the text color as needed
          ctx.fillText(userName, 200, 220); // Adjust the coordinates as needed

          const certificateDataUrl = canvas.toDataURL("image/png");
          setCertificateUrl(certificateDataUrl); // Update the state with the generated certificate URL
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
    <div>
      {certificateUrl ? (
        <>
          <div className="mt-2">
            {/* <h3>Generated Certificate:</h3> */}
            <img src={certificateUrl} alt="Generated Certificate" />
          </div>
          {/* <button onClick={downloadCertificate}>Download Certificate</button> */}
          <Button className="mt-4" onClick={downloadCertificate}>
            Download Certificate
          </Button>
        </>
      ) : (
        <p>Generating certificate...</p>
      )}
    </div>
  );
};

export default CertificateDownload;
