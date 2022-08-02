import { useUser } from '../providers/UserProvider';
import {
  ArrowsLeftRight,
  Bank,
  CaretDown,
  DownloadSimple,
  Eye,
  UploadSimple,
  UserCircle,
} from 'phosphor-react';

export const Header = () => {
  const { user } = useUser();
  const [numberAgency, numberAcount, value] = [
    '1510 - 5',
    '95785 - 3',
    132759.3,
  ];

  function moneyTransform(number: number) {
    const string = number.toFixed(2).toString().replace('.', ',');
    return string;
  }

  return (
    <header className="w-screen absolute top-0 flex flex-col items-center">
      <section className="w-full bg-brand-base rounded-b-2xl p-6 pb-11">
        <div className="flex justify-between items-center">
          <h1 className="text-header-light text-xl">
            Bem vindo - {user?.name}
          </h1>
          <UserCircle size={20} className="text-header-light" />
        </div>
        <div className="flex justify-between p-2">
          {/* extract button start*/}
          <div className="flex flex-col justify-center items-center hover:cursor-pointer">
            <button className="w-11 p-2 bg-btn-primary-hover flex justify-center">
              <Bank size={20} className="text-icon-light" />
            </button>
            <p className="text-icon-light text-xs">Extrato</p>
          </div>
          {/* extract button end*/}
          {/* transfer button start*/}
          <div className="flex flex-col justify-center items-center hover:cursor-pointer">
            <button className="w-11 p-2 bg-btn-primary-hover flex justify-center">
              <ArrowsLeftRight size={20} className="text-icon-light" />
            </button>
            <p className="text-icon-light text-xs">Transferir</p>
          </div>
          {/* transfer button end*/}
          {/* deposit button start*/}
          <div className="flex flex-col justify-center items-center hover:cursor-pointer">
            <button className="w-11 p-2 bg-btn-primary-hover flex justify-center">
              <UploadSimple size={20} className="text-icon-light" />
            </button>
            <p className="text-icon-light text-xs">Depositar</p>
          </div>
          {/* deposit button end*/}
          {/* withdraw button start*/}
          <div className="flex flex-col justify-center items-center hover:cursor-pointer">
            <button className="w-11 p-2 bg-btn-primary-hover flex justify-center">
              <DownloadSimple size={20} className="text-icon-light" />
            </button>
            <p className="text-icon-light text-xs">Sacar</p>
          </div>
          {/* withdraw button end*/}
        </div>
      </section>
      <section className="w-[80%] bg-header-light rounded-xl p-2 shadow -mt-8">
        <div className="flex justify-between items-center">
          <p className="text-sm text-header-gold">Agencia: {numberAgency}</p>
          <p className="text-sm text-header-gold">Conta: {numberAcount}</p>
          <CaretDown size={14} className="" />
        </div>
        <div className="flex items-center gap-1">
          <Eye size={14} className="text-icon-dark-100" />
          <p className="text-2xl text-brand-base font-bold">
            {moneyTransform(value)}
            <span className="text-sm text-brand-base font-bold ml-1">R$</span>
          </p>
        </div>
      </section>
    </header>
  );
};
