import React from 'react';

import { Container, ImportFileContainer } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Importar arquivo de transações</h1>

      <ImportFileContainer>
        <div className="drop-file">
          <p>Selecione ou arraste o arquivo aqui</p>
        </div>
      </ImportFileContainer>
    </Container>
  );
};

export default Home;
