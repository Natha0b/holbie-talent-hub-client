import  { FC } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './DropFile.module.scss';

interface DropFileProps {
    onDrop: (acceptedFiles: File[]) => void;
}

const DropFile: FC<DropFileProps> = ({ onDrop }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className={styles.dropzone}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Suelta los archivos aquí...</p>
            ) : (
                <p>Arrastra y suelta algunos archivos aquí, o haz clic para seleccionar archivos</p>
            )}
        </div>
    );
};

export { DropFile };
