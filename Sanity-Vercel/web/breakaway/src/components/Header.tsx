import Link from 'next/link';
import React from 'react'

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='flex justify-center items-center min-h-16 border '>
        Hello from breakAway application header

        <nav className='px-2'>
          <ul>
            <li className='underline'><Link href={'sites'} hrefLang='en'>Sites</Link></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header