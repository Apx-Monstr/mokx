import Image from 'next/image'
import Sample from '@/app/components/sample';
import Pray from '@/app/components/pray';
import OnBoard  from '@/app/components/OnBoard';
import SignIn from '@/app/components/SignIn';
import Message from './components/Message';
import SignUp from './components/SignUp';
export default function Home() {
  return (
    <div className='max-w-[100vw] overflow-x-hidden'>
      <Pray/>
      {/* <OnBoard/> */}
      {/* <SignUp/> */}
      {/* <SignUp/> */}
      {/* <Message/> */}
    </div>
  )
}
