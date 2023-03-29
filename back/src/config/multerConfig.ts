import multer from 'multer';

const storage = multer.memoryStorage();

const fileFilter = (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    (cb as (error: Error | null, acceptFile: boolean) => void)
    (new Error('Veuillez télécharger uniquement des fichiers image'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5, // Limite la taille du fichier à 5MB
  },
});

export default upload;
