import { Img } from './ImageGalleryItem.styled';
import { ModalWindow } from '../Modal/Modal';
import { useState } from 'react';

export const ImageGalleryItem = ({image, largeImageURL, tag}) => {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

    return (
      <li className="gallery-item">
        <Img src={image} alt={tag} width="300px" onClick={openModal} />
        <ModalWindow
          isOpen={isOpen}
          onClose={onClose}
          largeImageURL={largeImageURL}
          tags={tag}
        />
             </li>
    );
  }
