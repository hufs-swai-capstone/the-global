import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #1b3eaa;
  margin-bottom: 6%;
  margin-top: 12%;
`;

export const InputContainer = styled.div`
  width: 80%;
  background-color: white;
  border-radius: 8px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SearchContiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 50px;
  padding: 10px;
  border-radius: 8px;
  border: none;
  background-color: rgba(27, 62, 170, 0.7);
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 1px black;
  margin-bottom: 10%;
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-right: 10px;
`;

export const Select = styled.select`
  width: 50%;
  padding: 5px;
`;

export const TextInput = styled.input`
  flex: 1;
  margin: 0 4%;
  font-size: 15px;
  border-radius: 6px;
  padding: 5px 10px;
  border: none;
  outline: none;
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 45px;
  padding: 10px;
  border-radius: 8px;
  margin-top: 15%;
  border: none;
  background-color: rgba(27, 62, 170, 0.7);
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 1px black;
`;

export const SearchConditionsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  margin-top: 8%;
  border: none;
  background-color: rgba(27, 62, 170, 0.7);
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 1px black;
`;

export const ButtonText = styled.div`
  flex: 1;
  text-align: center;
  font-size: 16px;
`;
