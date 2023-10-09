import { Toaster } from "@/components/ui/toaster";
import Wrap from "@/components/wrapper/Wrap";
import { NextPage } from "next";

// import { useTranslations } from "next-intl";
const Home: NextPage = () => {
  // const { locales, locale: activeLocale, defaultLocale } = router;

  return (
    <>
      <Wrap />
      <Toaster />
    </>
  );
};
export default Home;
