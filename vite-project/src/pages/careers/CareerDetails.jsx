import { useLoaderData } from "react-router-dom";
function CareerDetails() {
  // const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ad
          officia voluptatum quisquam labore sed provident repellat. Labore
          quod, rerum quos suscipit non ratione recusandae praesentium tenetur
          quis saepe repellendus provident alias fugit veritatis consequuntur
          ut, velit, ipsam quaerat possimus.
        </p>
      </div>
    </div>
  );
}

export default CareerDetails;
