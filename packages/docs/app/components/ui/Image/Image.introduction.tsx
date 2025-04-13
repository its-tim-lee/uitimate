import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { Link } from "react-router";
export default () => {
  return (
    <>
      <ComponentPageHero title='Introduction' subtitle={'React Lazy Load Image Component'} />

      <br />

      <p>
        We simply forward <b className='tw:brand'>react-lazy-load-image-component</b> for the ease of use, so refer <Link className="tw:link" to="https://github.com/Aljullu/react-lazy-load-image-component" target="_blank" rel="noopener noreferrer">their documentation</Link> for more details.
      </p>


    </>
  )
}