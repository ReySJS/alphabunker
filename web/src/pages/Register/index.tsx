import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useUser } from '../../providers/UserProvider';

export const Register = () => {
  const { user, signup } = useUser();

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [account, setAccount] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (signup) {
      signup({name, email, cpf, birthdate, password});
      navigate('/extract');
    }

  };

  return (
    <div className='bg-body-light-200 flex flex-col justify-center items-center w-screen h-screen gap-10'>
      <img className="w-50 h-50" src={logo} alt="" />
      <h1 className='font-brand-base text-brand-base'>Alpha Bunker</h1>
      <h2 className='font-brand-base text-body-light-100'>Crie sua Conta</h2>
      <Input type="text" placeholder='Digite seu Nome' onBlur={(e) => setName(e.target.value)}/>
      <Input type="date" placeholder='Digite sua data de nascimento' onBlur={(e) => setBirthdate(e.target.value)}/>
      <Input type="text" placeholder='Digite seu CPF' onBlur={(e) => setCpf(e.target.value)}/>
      <Input type="email" placeholder='Digite seu Email' onBlur={(e) => setEmail(e.target.value)}/>
      <Input type="password" placeholder='Digite sua senha' onBlur={(e) => setPassword(e.target.value)}/>
      <Input type="password" placeholder='Confirme sua senha' onBlur={(e) => setPassword(e.target.value)}/>
      <Button type='button' label="Cadastrar" category='primary' onClick={handleSubmit} />
      <p onClick={() => navigate('/login')}>Crie sua conta</p>
    </div>
  );
};
