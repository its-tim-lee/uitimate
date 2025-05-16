import Marquee from '#/components/internal/Marquee'
import { Link } from 'react-router'
import { Cta } from '#/components/ui/Cta/Cta'

export const meta = () => ([{
  title: "Home of Uitimate",
}]);

export default () =>   <Marquee
  button={
    <Link to="/docs/get-started/introduction">
      <Cta variant="secondary" size="lg">
        Get Started
      </Cta>
    </Link>
  }
/>