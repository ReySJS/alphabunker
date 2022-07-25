import { useState } from 'react';
import { Modal } from '../../components/Modal';
import { api } from '../../libs/api';

/**
 * Archive: src/pages/Deposit.tsx
 *
 * Description: Deposit page
 *
 * Date: 2022/07/20
 *
 * Author: Rey
 */

export const Deposit = () => {
  const [modal, setModal] = useState(true);

  async function handleDeposit() {
    try {
      const result = await api.post('deposit', {
        agency: '',
        account: '',
        value: '',
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {modal && (
        <Modal
          title="Depósito"
          setModal={setModal}
          handleConfirmModal={handleDeposit}
        />
      )}
    </>
  );
};
