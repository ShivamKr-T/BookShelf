import { ReactNode } from 'react'
import Image from 'next/image';

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <main className='auto-container flex flex-col-reverse lg:flex-row min-h-screen'>
        <section className='auth-form'>
            <div className='auth-box'>
                <div className='flex flex-row gap-3'>
                    <Image src='/icons/logo.svg' alt="logo" width={37} height={37}/>
                    <h1 className='text-2xl font-semibold text-white'>BookShelf</h1>
                </div>
                <div>{children}</div>
            </div>
        </section>

        <section className='auth-illustration'>
            <Image
                src='/images/auth-illustration.png'
                alt='auth illustration'
                height={1000}
                width={1000}
                className='size-full object-cover'
            />
        </section>
    </main>
  )
}

export default Layout