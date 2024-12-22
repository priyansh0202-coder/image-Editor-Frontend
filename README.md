# Image Drawer Project

This is a full-stack application that allows users to upload images, draw on them using a canvas, and export the masked image. The backend is built with **FastAPI**, and the frontend is created using **React.js** with **react-canvas-draw** and **axios**.

## Features
- Upload and display images.
- Draw on the image using customizable brush settings.
- Export and display the original image and the mask image as a pair.
- Allow users to upload an image (JPEG/PNG format).
- Allow users to increase or decrease the brush size.
- Original image and the generated mask image side-by-side below the canvas.

## Live Demo
Live-link - https://image-editor-frontend.vercel.app/

## How to Run the Project Locally

### Frontend (React.js)

1. Run project locally : 
   npm install
   ```

2. Start the React development server:
   ```bash
   npm start
   ```

3. The frontend will be running on `http://localhost:3000`.

---

## Libraries Used

### Backend
- **FastAPI**: Web framework for building the backend.
- **Uvicorn**: ASGI server for running the FastAPI app.

### Frontend
- **React.js**: JavaScript library for building the user interface.
- **react-canvas-draw**: Used for the drawing functionality.
- **axios**: For handling HTTP requests to the backend.

## Acknowledgments
This project was built using open-source tools and frameworks to demonstrate full-stack application development.

