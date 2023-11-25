import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import "./Modal.css";
const Modal = ({ isOpen, onClose, title, pdfLinks }) => {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div onClick={onClose} className="overlay"></div>
          <div className="modal-content">
            <h2 className='pdfTitle'>{title}</h2>
            <br/>
            <br/>
            <ul>
              {pdfLinks.map((link, index) => (
                <li key={index} className="pdfList">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="close-modal" onClick={onClose}>
            <AiOutlineClose size={20}/>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  pdfLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Modal;
