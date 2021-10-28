import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";

function MoviesPage({ loggedIn, ...props}) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Movies {...props} />
      <Footer />
    </>
  );
}

export default MoviesPage;