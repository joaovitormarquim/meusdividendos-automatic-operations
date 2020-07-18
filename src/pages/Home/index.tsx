import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import './styles.scss';

const Home: React.FC = () => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
  return (
    <div className="content">
      <div className="upload-container">
        <h1>Importar arquivo de transações</h1>
        <div className="dropzone" {...getRootProps()}>
          <input {...getInputProps()} />
          <p>
            <FiUpload />
            Arraste ou clique para selecionar o arquivo
          </p>
        </div>
      </div>
      <div className="login">
        <form>
          <h1>Envie os dados para o MeusDividendos</h1>
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Senha" />
          <button type="button">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
