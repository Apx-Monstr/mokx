import Image from 'next/image'
import Sample from '@/app/components/sample';
import Pray from '@/app/components/pray';
import OnBoard  from '@/app/components/OnBoard';
import SignIn from '@/app/components/SignIn';
import Message from './components/Message';
export default function Home() {
  return (
    <div className=''>
      {/* <Pray/> */}
      {/* <OnBoard/> */}
      {/* <SignIn/> */}
      <Message/>
    </div>
  )
}
