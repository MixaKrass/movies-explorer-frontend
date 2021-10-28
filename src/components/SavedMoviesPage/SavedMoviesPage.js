import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SavedMovies from "../SavedMovies/SavedMovies";

function SavedMoviesPage({loggedIn, ...props}) {
  return (
    <> 
      <Header loggedIn={loggedIn} />
      <SavedMovies {...props} />
      <Footer />
    </>
  );
}

export default SavedMoviesPage;