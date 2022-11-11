import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { ChangeEvent, MouseEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Test4: NextPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;

    if (!fileInput.files) {
      alert("No file was chosen");
      return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
      alert("Files list is empty");
      return;
    }

    const file = fileInput.files[0];

    /** File validation */
    if (!file?.type.startsWith("image")) {
      alert("Please select a valide image");
      return;
    }

    /** Setting file state */
    setFile(file); // we will use the file state, to send it later to the server
    setPreviewUrl(URL.createObjectURL(file)); // we will use this to show the preview of the image

    /** Reset file input */
    e.currentTarget.type = "text";
    e.currentTarget.type = "file";
  };

  const onCancelFile = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!previewUrl && !file) {
      return;
    }
    setFile(null);
    setPreviewUrl(null);
  };

  const onUploadFile = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!file) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append("myImage", file);
      formData.append("gender","women")

      const res = await fetch("/api/image", {
        method: "POST",
        body: formData,
      });

      toast.success("done"+JSON.stringify(res), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    } catch (error) {
      toast.error("Something went wrong"+JSON.stringify(error));
    }
    setFile(null);
    setPreviewUrl(null);
  };

  return (
    <div>
      <Head>
        <title>File uploader</title>
        <meta name="description" content="File uploader" />
      </Head>

      <main className="py-10">
       
        <div className="mx-auto w-full max-w-3xl px-3">
          <h1 className="mb-10 text-3xl font-bold text-gray-900">
            Upload your files
          </h1>

          <form
            className="w-full border border-dashed border-gray-500 p-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-1.5 md:flex-row md:py-4">
              <div className="flex-grow">
                {previewUrl ? (
                  <div className="mx-auto w-80">
                    <Image
                      alt="file uploader preview"
                      objectFit="cover"
                      src={previewUrl}
                      width={320}
                      height={218}
                      layout="fixed"
                    />
                  </div>
                ) : (
                  <label className="flex h-full cursor-pointer flex-col items-center justify-center py-3 transition-colors duration-150 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-14 w-14"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    </svg>
                    <strong className="text-sm font-medium">
                      Select an image
                    </strong>
                    <input
                      className="block h-0 w-0"
                      name="file"
                      type="file"
                      onChange={onFileUploadChange}
                    />
                  </label>
                )}
              </div>
              <div className="mt-4 flex justify-center gap-1.5 md:mt-0 md:flex-col">
                <button
                  disabled={!previewUrl}
                  onClick={onCancelFile}
                  className="w-1/2 rounded-sm bg-gray-700 px-4 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-gray-600 disabled:bg-gray-400 md:w-auto md:text-base"
                >
                  Cancel file
                </button>
                <button
                  disabled={!previewUrl}
                  onClick={onUploadFile}
                  className="w-1/2 rounded-sm bg-gray-700 px-4 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-gray-600 disabled:bg-gray-400 md:w-auto md:text-base"
                >
                  Upload file
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>

      <footer>
        <div className="mx-auto w-full max-w-3xl px-3">
          <p>All right reserved</p>
          <ToastContainer
         
        />
        </div>
      </footer>
    </div>
  );
};

export default Test4;
