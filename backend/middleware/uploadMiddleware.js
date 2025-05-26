import multer from 'multer';
import path from 'path';



const storage = multer.diskStorage({
  destination: (req, file, cb) => { 
    cb(null, 'uploads/'); // Specify the directory to save uploaded files
  },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Use a timestamp to avoid filename conflicts
    }
});

const upload = multer({ storage})

export default upload
