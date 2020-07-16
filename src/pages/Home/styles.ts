import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 156px;
`;

export const ImportFileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 736px;
  height: 319px;
  margin-top: 40px;

  background: #ffffff;
  border-radius: 5px;

  div.drop-file {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 608px;
    height: 120px;

    border: 1.5px dashed #969cb3;
    box-sizing: border-box;
    border-radius: 5px;

    p {
      font-size: 16px;
      line-height: 24px;
      color: #5636d3;
    }
  }
`;
