import styled from "styled-components";

export const StFormFilter = styled.form`
  position: absolute;
  top: 100px;
  padding: 40px;
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
  min-width: 560px;
  max-width: 1020px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 90%;
  overflow-y: auto;
  background: linear-gradient(
          155deg
          , rgba(255, 255, 255, 0.2) -50%, rgba(255, 255, 255, 0.05) 80%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  `;

export const StClose = styled.span`
  cursor: pointer;
  font-size: 30px;
  min-width: 20px;
  position: absolute;
  right: 5px;
  top: 5px;
    `;

export const StFilterRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 40px;
  gap: 25px;
  align-items: center;
    `;
export const StFilterButton = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  gap: 40px;
  button[type="reset"] {
    min-width: 0;
    max-width: 100px;
    width: 100%;
  }
    `;

export const StInputWrapper = styled.div`
    width: 500px;
 `;