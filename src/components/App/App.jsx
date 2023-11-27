import { useState, useEffect } from 'react';
import { SearchBarContainer, Main } from './App.styled';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { fetchImages } from 'api';
import { Loader } from '../Loader/Loader';

export const App = () => {
  const [queryValue, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [pageNum, setPage] = useState(1);
  const [isLoading, setLoader] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const response = await fetchImages(queryValue, pageNum);
        const newImages = response.data?.hits || [];
        if (pageNum === 1) {
          setImages(newImages); 
        } else {
          setImages((prevImages) => [...prevImages, ...newImages]);
        }
      } catch (err) {
        console.error('Error fetching images:', err);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, [queryValue, pageNum]);


  const handleSubmit = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1)
  };


    return (
      <Main>
        <SearchBarContainer>
          <Searchbar onSubmit={handleSubmit} />
        </SearchBarContainer>
        {images.length > 0 && <ImageGallery images={images}/>}
        {isLoading && <Loader />} 
        {images.length > 0 && (
          <Button onClick={handleLoadMore} />
        )}
      </Main>
    );
  }


