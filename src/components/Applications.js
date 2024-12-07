import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

const HANDS_ON_PROJECT = {
  "🧪  Create-Growth-Models-With-Gompertz-Four-PL-Five-PL-Sigmoid-Power-Law": "https://github.com/ahratul/Create-Growth-Models-With-Gompertz-Four-PL-Five-PL-Sigmoid-Power-Law",
  "🧪  Neural-Network-With-Streamlit-Flask-Web-Visualizer": "https://github.com/ahratul/Neural-Network-With-Streamlit-Flask-Web-Visualizer",
  "🧪  Data-Visualization-Streamlit-Web-App": "https://github.com/ahratul/Data-Visualization-Streamlit-Web-App",
  "🧪  Selenium-Architecture--In-Docker--Containers": "https://github.com/ahratul/Selenium-Architecture--In-Docker--Containers",
  "🧪  European-Train-Stations-Maps": "https://github.com/ahratul/European-Train-Stations-Maps",
  "🧪  KMeans-Clustering-Customization-Streamlit-Web-App": "https://github.com/ahratul/KMeans-Clustering-Customization-Streamlit-Web-App",
  "🧪  Predicting-Wage-of-Players-And-the-nations": "https://github.com/ahratul/Predicting-Wage-of-Players-And-the-nations",
  "🧪  World-Population-EDA-With-World-Map-Visualization": "https://github.com/ahratul/World-Population-EDA-With-World-Map-Visualization",
  "🧪  Hotel-Booking-Demand-EDA-Visualization": "https://github.com/ahratul/Hotel-Booking-Demand-EDA-Visualization",
  "🧪  Iris Classification WebApp": "https://github.com/ahratul/Iris-Species-Webapp-With-Streamlit",
  "🧪  QS-World-University-Rankings-EDA-Visualization": "https://github.com/ahratul/QS-World-University-Rankings-EDA-Visualization",
  "🧪  Snake-Game-With-Pygame-And-Streamlit": "https://github.com/ahratul/Snake-Game-With-Pygame-And-Streamlit",
  "🧪  Password-Strength-Checking-with-streamlit ": "https://github.com/ahratul/Password-Strength-Checking-with-streamlit ",
  "🧪  Support-Vector-Machine-LogisticRegression-RandomForestClassifier-With-Streamlit-": "https://github.com/ahratul/Support-Vector-Machine-LogisticRegression-RandomForestClassifier-With-Streamlit-"
};

const PROJECTS = {
  "🏆  Junior Cybersecurity Analyst Career Path": "https://www.credly.com/badges/06f1fa30-b4da-4e99-b5e7-4a3ab1614df5/linked_in_profile",
  "🏆  Networking Devices and Initial Configuration": "https://www.credly.com/badges/2bf07acc-4870-42ee-b287-aeb3ecfefeec/linked_in_profile",
  "🏆  Advanced Ansible for Devops: Create the MEAN Stack": "https://www.coursera.org/account/accomplishments/certificate/4NQEPFURSH5V",
  "🏆  System Administration and IT Infrastructure Services": "https://www.coursera.org/account/accomplishments/certificate/XDWH6KF5J6CH",
  "🏆  Technical Support Fundamentals": "https://www.coursera.org/account/accomplishments/certificate/LT2VH2EFARMK",
  "🏆  Containerization Using Docker": "https://www.coursera.org/account/accomplishments/certificate/ZPV93ECQPGJK",
  "🏆  Developing Front-End Apps with React": "https://www.coursera.org/account/accomplishments/certificate/AFYHUGGJLCH2",
  "🏆  English/French Translator: Long Short Term Memory Networks": "https://www.coursera.org/account/accomplishments/certificate/JQX3QXFBYGVE",
  "🏆  Kubernetes in AWS: Create Cluster in EKS in your own VPC": "https://www.coursera.org/account/accomplishments/certificate/ME6BZKG2HVLN",
  "🏆  Named Entity Recognition using LSTMs with Keras": "https://www.coursera.org/account/accomplishments/certificate/KSYF4BPLTE4L",
  "🏆  Create digit recognition web app with Streamlit": "https://www.coursera.org/account/accomplishments/certificate/YMB27RX2SU25",
  "🏆  GUI Programming: Create a Login System in Python": "https://www.coursera.org/account/accomplishments/certificate/PBR9PZ3QMTBT",
  "🏆  Neural Network Visualizer Web App with Python": "https://www.coursera.org/account/accomplishments/certificate/L7T3XMTC6L27",
  "🏆  Selenium Test Execution On Docker Containers": "https://www.coursera.org/account/accomplishments/certificate/U5TA7M6ZATBV",
  "🏆  Beginners Guide to YAML Syntax": "https://www.coursera.org/account/accomplishments/certificate/8QWFG6NCMRNM",
  "🏆  DevOps on AWS: Code, Build, and Test": "https://www.coursera.org/account/accomplishments/certificate/UFX97WZQ9X9Y",
  "🏆  Developing APIs with Google Cloud's Apigee API Platform": "https://www.coursera.org/account/accomplishments/specialization/certificate/WJ3YGE2DMXME",
  "🏆  Full Stack Software Developer Assessment": "https://www.coursera.org/account/accomplishments/certificate/2W43VWJGNT94",
  "🏆  API Security on Google Cloud's Apigee API Platform": "https://www.coursera.org/account/accomplishments/certificate/PUVNCB2ULTTP",
  "🏆  Networking in Google Cloud: Defining and Implementing Networks": "https://www.coursera.org/account/accomplishments/certificate/NHSLRRRBY4RJ",
  "🏆  End-to-End Machine Learning with TensorFlow on GCP": "https://www.coursera.org/account/accomplishments/certificate/UU4KXSTWRDUE",
  "🏆  Kubernetes: Basic Architecture and First Deployment": "https://www.coursera.org/account/accomplishments/certificate/6P3T7ZS3VEXT",
  "🏆  Build a Machine Learning Web App with Streamlit and Python": "https://www.coursera.org/account/accomplishments/certificate/X39R728EYLHU",
  "🏆  Deploy a Web Application in AWS Elastic Kubernetes Service": "https://www.coursera.org/account/accomplishments/certificate/7X7PBM4NNY9U",
  "🏆  Preparing for the Google Cloud Associate Cloud Engineer Exam": "https://www.coursera.org/account/accomplishments/certificate/XSNHZXFKYDZC",
  "🏆  Essential Google Cloud Infrastructure: Foundation": "https://www.coursera.org/account/accomplishments/certificate/B9J3HJBUJUZA",
  "🏆  Google Cloud Fundamentals: Core Infrastructure": "https://www.coursera.org/account/accomplishments/certificate/LNK4JT5CU2SX",
  "🏆  Reliable Google Cloud Infrastructure: Design and Process": "https://www.coursera.org/account/accomplishments/certificate/GCLTPKVTEZNN",
  "🏆  Google Cloud Big Data and Machine Learning Fundamentals": "https://coursera.org/share/4e1957007b18571628bde76503275a5b",
  "🏆  Elastic Google Cloud Infrastructure: Scaling and Automation": "https://www.coursera.org/account/accomplishments/certificate/6WP3KNQCFFW9",
  "🏆  Architecting with Google Compute Engine Specialization": "https://www.coursera.org/account/accomplishments/specialization/certificate/SP87Q9Q8V8YB",
  "🏆  How Google does Machine Learning": "https://www.coursera.org/account/accomplishments/certificate/QDLBCBUU35RT",
  "🏆  API Design and Fundamentals of Google Cloud's Apigee API Platform": "https://coursera.org/share/08fc56980d5bf9bb06cd0f3d5d44ff95",
  "🏆  Smart Analytics, Machine Learning, and AI on GCP": "https://www.coursera.org/account/accomplishments/certificate/UVLJBNRRMJ6Y",
  "🏆  Getting Started With Application Development": "https://www.coursera.org/account/accomplishments/certificate/H5STHPGRQWJR",
  "🏆  Managing Security in Google Cloud": "https://www.coursera.org/account/accomplishments/certificate/UREBWVSAA227",
  "🏆  Storing, Retrieving, and Processing JSON data with Python": "https://www.coursera.org/account/accomplishments/certificate/UNHTNDPG2LBC",
  "🏆  DevOps on AWS: Release and Deploy": "https://www.coursera.org/account/accomplishments/certificate/TPEKYKUURG78"
};


function App() {
  return (
    <div className="App">
      <h1>Hands-On Projects and Achievements</h1>
      <div className="table-container">
        <h2>Hands-On Projects</h2>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Project</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(HANDS_ON_PROJECT).map(([project, link]) => (
              <tr key={project}>
                <td>{project}</td>
                <td><a href={link} target="_blank" rel="noopener noreferrer">View</a></td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Achievements</h2>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Certificate</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(PROJECTS).map(([project, link]) => (
              <tr key={project}>
                <td>{project}</td>
                <td><a href={link} target="_blank" rel="noopener noreferrer">View</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
