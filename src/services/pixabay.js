
const searchPixabayApi = async (query, page) => {
  const response = await fetch(
    `https://pixabay.com/api/?key=34227427-bed69196739ab14a9612e550e&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  )
  .then((response) => response.json())
  return response;
};

const ImageAPI = {
  searchPixabayApi,
}

export default ImageAPI;