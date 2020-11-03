import React from 'react'
import './menuitem.styles.scss'

const MenuItem = ({title,imageUrl,size}) => (
  <div className={`${size} menu-item`}>
    <div className='bg-image' style={{ backgroundImage: `url(${imageUrl})`}}/>
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
    </div>
  </div>
)

export default MenuItem;