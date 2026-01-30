import HomePage from "./components/HomePage";
import WinesPage from "./components/Wines";
import Regions from "./components/Regions";
import GiftBoxes from "./components/GiftBoxes";
import Blog from "./components/Blog";
import ShoppingBag from "./components/ShoppingBag";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import TermsOfUse from "./components/TermsOfUse";
import SignIn from "./components/SignIn";
import Registration from "./components/Registration";
import PageNotFound from "./components/PageNotFound";

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/wines", element: <WinesPage /> },
  { path: "/regions", element: <Regions /> },
  { path: "/giftBoxes", element: <GiftBoxes /> },
  { path: "/blog", element: <Blog /> },
  { path: "/shoppingBag", element: <ShoppingBag /> },
  { path: "/aboutUs", element: <AboutUs /> },
  { path: "/contact", element: <Contact /> },
  { path: "/termsOfUse", element: <TermsOfUse /> },
  { path: "/signIn", element: <SignIn /> },
  { path: "/registration", element: <Registration /> },
  { path: "*", element: <PageNotFound /> },
];
