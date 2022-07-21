import { Button, Modal } from '@mantine/core';
import React, { useState } from 'react';
import { useStore } from '../Store';
import { SignInForm } from './forms/SignInForm';

export const SignedIn = () => {
  const signedIn = useStore(({ signedIn }) => signedIn);
  const [open, setOpen] = useState(false);

  const signIn = () => {
    if (signedIn.name) {
      console.log(signedIn.name);
    } else {
      setOpen(true);
    }
  };

  return (
    <div className="text-white text-xl mr-10">
      <Button onClick={() => signIn()}>{signedIn?.name ? signedIn.name : 'Sign In'}</Button>
      <Modal opened={open} onClose={() => setOpen(false)} title="Sign In">
        <SignInForm setOpen={setOpen} />
      </Modal>
    </div>
  );
};
