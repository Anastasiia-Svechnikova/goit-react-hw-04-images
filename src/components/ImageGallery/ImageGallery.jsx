import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import { useRef, useEffect } from 'react';
import { ImageGalleryItem, Loader, TextButton } from 'components';

export const ImageGallery = ({images, status, isLoadBtnShown, onLoadMore}) => {
    const bottom = useRef(null);

  useEffect(() => {
    if (images.length > 20) {
      setTimeout(() => {
        window.scrollTo({
          top: bottom.current.clientHeight,
          behavior: 'smooth'
        });
      }, 400)
    
    }
  }, [images])



  return (
    <>
      <ul ref={bottom} className={s.gallery}>
        {images.map(({ id, tags, webformatURL, largeImageURL}) => (
          <ImageGalleryItem
            key={id}
            tags={tags}
            image={webformatURL}
            largeImage={largeImageURL}
          />
        ))}

      </ul>

      {status === 'pending' && <Loader />}
      {(status === 'resolved' && isLoadBtnShown) && <TextButton onClick={onLoadMore} />}        
    </>
  );
  }
  
  
ImageGallery.propTypes = {
  status: PropTypes.string.isRequired,
  isLoadBtnShown: PropTypes.bool.isRequired,
  onLoadMore: PropTypes.func.isRequired,
    images:PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })).isRequired

  };