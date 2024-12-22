import React from "react";

const ImageUpload = ({ onUpload }) => {
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => onUpload(reader.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <label htmlFor="image-upload">Upload Image: </label>
            <input
                type="file"
                id="image-upload"
                accept="image/jpeg, image/png"
                onChange={handleImageUpload}
            />
        </div>
    );
};

export default ImageUpload;
