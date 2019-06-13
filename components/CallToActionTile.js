import React from 'react'

import Button from '../elements/Button';

const CTA_CLASS = 'call-to-action-tile';

const CallToActionTile = ({ copy, image, modifier, price, subscriptionType}) => {
  return (
    <div className={`${CTA_CLASS} ${CTA_CLASS}--${modifier}`}>
      <div className={`${CTA_CLASS}__image`} style={{backgroundImage: `url(${image})`}} />
      <div className={`${CTA_CLASS}__subscription-type`} >{subscriptionType} Subscription</div>
      <hr className={`${CTA_CLASS}__divider`}  />
      <div className={`${CTA_CLASS}__price`} >{price}</div>
      <div className={`${CTA_CLASS}__price-subtext`}>Per Month</div>
      <p className={`${CTA_CLASS}__copy`} >{copy}</p>
      <Button>Start Today</Button>
    </div>
  )
}

CallToActionTile.defaultProps = {
  copy: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti sit ipsum consequatur odio',
  image: '/static/images/alora-griffiths-750374-unsplash.jpg',
  modifier: '',
  price: '$1.99',
  subscriptionType: 'Basic',
};

export default CallToActionTile
