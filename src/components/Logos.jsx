export default function Logos() {
  const logos = ['DATABRICKS', 'SALESFORCE', 'OPENAI', 'HUBSPOT', 'SCALE.AI'];

  return (
    <div className="logos">
      {logos.map((logo, index) => (
        <div key={index} className="logo-item">
          {logo}
        </div>
      ))}
    </div>
  );
}
