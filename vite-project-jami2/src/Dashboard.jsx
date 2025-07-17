import './Dashboard.css';
import FeatureBox from './box1';

const features = [
  "Attendance",
  "Pool Data",
  "Mandatory Tests",
  "Fee"
];

export default function Dashboard() {
  return (
    <main className="dashboard">
      <div className="content-boxes">
        {features.map((title, idx) => (
          <FeatureBox key={idx} title={title} />
        ))}
      </div>
    </main>
  );
}
