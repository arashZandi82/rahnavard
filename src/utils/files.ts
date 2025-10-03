import { mkdir, writeFile, stat } from "fs/promises"; 
import path, { join } from "path"; 
import sharp from "sharp"; 

// Ensures the specified directory exists
export async function ensureDirExists(dirPath: string) {
  try {
    await stat(dirPath);
  } catch (e: any) {
    if (e.code === "ENOENT") {
      await mkdir(dirPath, { recursive: true });
    } else {
      console.error("Error creating directory:", e);
      throw e;
    }
  }
}

export async function processAndSaveImageForProperties(
  file: File,
  targetPath: string,
  namePrefix: string,
  width?: number,
  height?: number
): Promise<string> {
  const uint8Array = new Uint8Array(await file.arrayBuffer());
  const originalName = path.parse(file.name).name;
  const filename = `${namePrefix}_${originalName}.jpg`;

  let sharpInstance = sharp(uint8Array);

  if (width && height) {
    sharpInstance = sharpInstance.resize(width, height, { fit: "cover" });
  }

  const processedImage = await sharpInstance
    .jpeg({ quality: 85 })
    .toBuffer();

  await writeFile(join(targetPath, filename), new Uint8Array(processedImage));

  return filename;
}