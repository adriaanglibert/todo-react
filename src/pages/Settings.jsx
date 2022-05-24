import Center from '../components/Center';
import Form from '../components/Form';
import Heading from '../components/Heading';
import React from 'react'
import { UserContext } from '../App';
import { sizes } from '../constants/styles';
import { useContext } from 'react';
import useInput from '../hooks/useInput';

const Settings = () => {
  const [u, setU] = useContext(UserContext)
  const [user, handleChange, handleSubmit] = useInput(setU, u, false);

  return (
      <Center padding={`${sizes.xl} ${sizes.base}`}>
        <Heading margin={`0 auto ${sizes.xl} auto`}>Settings</Heading>
        <Form
          label="Voeg een todo toe"
          handleSubmit={(e) => handleSubmit(e, user)}
          value={user}
          handleChange={handleChange}
        />
      </Center>

  );
}

export default Settings