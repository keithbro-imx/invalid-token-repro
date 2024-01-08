'use client';

import styles from './page.module.css'
import { useEffect, useState } from 'react';
import { passport } from '@imtbl/sdk';
import { passportInstance } from '@/passport';

export default function Home() {
  const [pp, setPp] = useState<passport.Passport|null>(null)

  useEffect(() => {
    setPp(passportInstance);
  }, []);

  const login = async () => {
    if (!pp ) throw new Error('Passport not initialized');
    const userProfile = await pp.login();
    console.log({userProfile});
    const linkedAddresses = await pp.getLinkedAddresses();
    console.log({linkedAddresses});
  }

  const logout = () => {
    pp?.logout();
  }

  return (
    <main className={styles.main}>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </main>
  )
}
