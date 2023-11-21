import ContactDetails from "@/components/ContactDetails";
import Experience from "@/components/Experience";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Layout from "@/components/Layout";
import { AnimatePresence, motion } from "framer-motion";
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
                Hey there!{" "}
                <b className="whitespace-nowrap">
                  <span className="font-normal">{"I'm"}</span> Saumya
                </b>
                . <br /> I design, build, and grow tech products.
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
      <div className="w-full min-h-screen flex justify-center items-center flex-col max-w-2xl mx-auto gap-10">
        <h3>
          Over the last 8 years, {"I've"} been fortunate enough to work across
          several industries in tech and build products with world-class teams.
        </h3>
        <ExperienceTimeline />
        <div className="w-full grid lg:grid-cols-3 gap-4 grid-cols-2">
          <Experience />
        </div>
      </div>
    </Layout>
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
