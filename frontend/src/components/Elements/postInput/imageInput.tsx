import React, { useState } from "react";

const ImageInput = ({ setImageData }) => {
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const handleChange = (e) => {
    e.preventDefault();
    const files = e.target?.files;

    if (files && files.length > 0) {
      const imageFormData = new FormData();
      const images: string[] = [];

      for (const file of files) {
        imageFormData.append("image", file);
        const url = URL.createObjectURL(file); // convert File to Blob and get URL
        images.push(url);
      }

      setImagePreview(images);
      setImageData(images); // Ganti jadi imageFormData kalo ingin tipe data yang dikirim FormData bukan blob
    }
  };

  return (
    <div className=" w-full mb-2">
      <label
        className={`relative flex flex-col items-center justify-center w-full rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-200 object-contain overflow-hidden border-2 border-black`}
      >
        {imagePreview.length > 0 && (
          <div
            className={`flex flex-row items-center justify-center gap-2 h-fit w-full p-2 overflow-hidden`}
          >
            {imagePreview.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  alt="image"
                  className="w-60 h-72 object-cover rounded-lg"
                />
              );
            })}
          </div>
        )}
        {imagePreview.length < 1 && (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-black">
              <span className="font-semibold">Click untuk upload</span>
            </p>
            <p className="text-xs text-black">PNG atau JPG</p>
          </div>
        )}

        <input
          type="file"
          multiple
          id="image"
          name="image"
          accept="image/*"
          onChange={(e) => handleChange(e)}
          placeholder="Insert your image url here"
          className="hidden"
        />
      </label>
    </div>
  );
};

export default ImageInput;
