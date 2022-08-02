/**
 * Archive: src/pages/Extract.tsx
 *
 * Description: Extract page
 *
 * Date: 2022/07/20
 *
 * Author: Rey
 */

import { useUser } from '../../providers/UserProvider';

export const Extract = () => {
  const { user, account } = useUser();
  console.log(account);

  return <h1 className="text-white">Extrato</h1>;
};
