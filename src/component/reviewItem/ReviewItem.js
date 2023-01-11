import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './reviewItem.css'

const ReviewItem = ({ product, removeReviewItem }) => {
    const { id, name, price, quantity, img } = product;
    return (
        <div className='review-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <p>{name}</p>
                    <p><small>Price:$ {price}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className='delete-container'>
                    <button onClick={() => removeReviewItem(id)} className='btn-delete'><FontAwesomeIcon className='delete-icon' icon={faTrashCan}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;