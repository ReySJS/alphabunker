import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useUser } from '../../providers/UserProvider';

export const Login = () => {
  const navigate = useNavigate();

  const { user, login } = useUser();

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (login) {
      login({ cpf, password });
    }
  };

  return (
    <div className='bg-body-light-200 flex flex-col justify-center items-center w-screen h-screen gap-10'>
      <img className="w-50 h-50" src={logo} alt="" />
      <h1 className='font-brand-base text-brand-base'>Alpha Bunker</h1>
      <h2 className='font-brand-base text-body-light-100'>Login</h2>
      <Input type="text" placeholder='Digite seu CPF' onBlur={(e) => setCpf(e.target.value)}/>
      <Input type="password" placeholder='Digite sua senha' onBlur={(e) => setPassword(e.target.value)}/>
      <Button type='button' label="Entrar" category='primary' onClick={() => navigate('')} />
      <p onClick={() => navigate('/register')}>Crie sua conta</p>
    </div>
  );
};
