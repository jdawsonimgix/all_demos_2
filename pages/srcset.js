import React from 'react'
import TheHeader from '../components/TheHeader'

const srcset = () => {
  return (
    <>
      <TheHeader />
      <iframe
        src="https://codesandbox.io/embed/srcset-example-with-imgix-react-vxorss?fontsize=14&hidenavigation=1&theme=dark"
        style={{
          width: '100%',
          height: '800px',
          border: '0',
          'border-radius': '4px',
          overflow: 'hidden',
        }}
        title="srcset example with imgix react"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </>
  )
}

export default srcset

/*

    <iframe
      src="https://codesandbox.io/embed/srcset-example-with-imgix-react-vxorss?fontsize=14&hidenavigation=1&theme=dark"
      style={{
        width: '100%',
        height: '500px',
        border: '0',
        'border-radius': '4px',
        overflow: 'hidden',
      }}
      title="srcset example with imgix react"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
    */
