import Card from "@/components/module/Card";

function HomePage({ customers }) {
  return (
    <div className="min-h-[400px]">
      {customers.map((customer) => (
        <Card key={customer._id} customer={customer} />
      ))}
    </div>
  );
}

export default HomePage;
