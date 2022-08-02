import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
/**
 * Archive: src/pages/Extract.tsx
 *
 * Description: Extract page
 *
 * Date: 2022/07/20
 *
 * Author: Rey
 */

export const Transaction = () => {
  const { transactionId } = useParams<Record<string, string | undefined>>();
  console.log(transactionId);

  return (
    <>
      <Header />
    </>
  );
};
