import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import image_one from "../assets/project-1.jpeg"
import image_two from "../assets/project-2.jpeg"
import image_three from "../assets/project-3.jpeg"
import image_four from "../assets/project-4.jpeg"


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, imagePath }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
      </div>
      <img src={imagePath} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          I have done projects on <strong>web-design</strong>, <strong>algorithm optimization</strong> and <strong>machine learning</strong>. 
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Internship Projects
          </div>
          <Project 
            title="Project 1" 
            description="Developed log-in, registration, users grouping, role assignment, and invitation functionalities for a candidate sourcing and applicant tracking system
            website in Python"
            imagePath= {image_one}
          />
          <Project 
            title="Project 2" 
            description="Used C++ to develop and optimize a cargo packing algorithm of irregular planes for 50% roll-on ships in the Port of Dalian"
            imagePath= {image_two}
          />

          {/* ROW 3 */}
          <Project 
            title="Project 3" 
            description="Constructed a customized biomedical image segmentation tool in Python using U-Net algorithm and PyTorch &
                  Creating algorithm to split the data into patches to filter the most accurate ROI"
            imagePath= {image_three}
          />
          <Project 
            title="Project 4" 
            description="Optimize graph machine learning on anomaly detection with the combination of random forest, graph attention network 
                  and GCN"
            imagePath= {image_four}
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Research Projects
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;