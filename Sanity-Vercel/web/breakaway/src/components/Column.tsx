import Site from '@/types/site'
import React from 'react'

type Props = {
    sites?: Site[]
}

const Column = (props: Props) => {
  if (props.sites) {
    console.log(props.sites)
    return (
      <ul>
        {
          props.sites!.map((site, index) => (
            <li key={index}>{site.name}</li>
          ))
        }
      </ul>
    )
  } else {
    return (
      <div className='p-2 flex flex-grow justify-center items-center border-2'>Hello from column</div>
    )
  }
}

export default Column