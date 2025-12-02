import ContactDetails from "@/components/ContactDetails";
import Experience from "@/components/Experience";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Logos from "@/components/Logos";
import Layout from "@/components/Layout";
import Services from "@/components/Services";
import { AnimatePresence, motion } from "framer-motion";
import Button from '@mui/material/Button';
import Head from "next/head";

export function Home() {
  return (
    <Layout className="px-8">
      <Head>
        <title>Saumya Dalal - Personal Website and more</title>
      </Head>
      <div className="w-full min-h-screen flex justify-center items-center flex-col">
        <AnimatePresence mode={"wait"}>
          <motion.div
            className="max-w-2xl"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <h1>
                Hi!{" "}
                <b className="whitespace-nowrap">
                  <span className="font-normal">{"I'm"}</span> Saumya
                </b>
                . <br /> I'm a fullstack product leader who has built and grown software that has helped millions of users and made billions of dollars.<br />
                I'm currently building <a href="https://www.curiousbutadhd.com" target="_blank" className="tracking-normal"><i>FringeThink</i></a>.
              </h1>
            </motion.div>
            <motion.div
              className="w-full flex flex-row justify-between mt-12"
              variants={item}
            >
              <ContactDetails />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      <Logos />
      <div className="w-full min-h-screen flex justify-center items-center flex-col max-w-2xl mx-auto gap-10">
        <h3>
          Over the last 8 years, {"I've"} been fortunate enough to work across
          several industries in tech and build products at the world's best companies.
          I have helped these companies with:
        </h3>
        <Services />
      </div>
      {/* <div className="w-full min-h-screen flex justify-center items-center flex-col max-w-2xl mx-auto gap-10">
        <h3>
          Over the last 8 years, {"I've"} been fortunate enough to work across
          several industries in tech and build products at the world's best companies.
        </h3>
        <div className="w-full grid lg:grid-cols-3 gap-4 grid-cols-2">
          <Experience />
        </div>
      </div> */}

      <div className="w-full min-h-screen flex justify-center items-center flex-col max-w-2xl mx-auto gap-10 pb-16">
        <ExperienceTimeline />
      </div>

      <div className="fixed bottom-0 right-0 p-8">
        <Button color="secondary" variant="contained" size="large"
          onClick={() => { window.open('https://calendly.com/saumyadalal', '_blank')?.focus(); }}>
          Schedule time with me
        </Button>
      </div>

    </Layout >
  );
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = { hidden: { opacity: 0 }, show: { opacity: 1 } };

export default Home;
