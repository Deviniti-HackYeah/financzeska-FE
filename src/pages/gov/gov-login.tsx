import { useNavigate } from 'react-router-dom';
import { Loader } from '@/shared/components';
import { useEffect } from 'react';

export const GovLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }, []);

  return (
    <div className="h-full bg-white">
      <img src="/assets/gov.png" className="h-[80px]" />
      <div
        className="fixed left-2/4 top-1/3 flex h-full flex-col text-center"
        style={{ transform: 'translate(-50%, 0)' }}
      >
        <h2 className="mb-6 text-lg">Trwa logowanie profilem zaufanym</h2>
        <Loader size="large" inline />
      </div>
    </div>
  );
};
