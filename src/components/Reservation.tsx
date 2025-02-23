import { BodyWrapper, ContentWrapper } from "./ui/Wrapper";

const Reservation = () => {
  return (
    <BodyWrapper className="body-wrapper w-full h-full">
      <ContentWrapper className="text-center flex-col gap-0">
        <div className="head bg-momo_gray text-white w-full rounded-t-lg p-4">
          <h3 className="text-xs font-bold text-primary">Book a Table</h3>
          <h2 className="text-3xl font-bold">
            Check Availability
          </h2>
        </div>
        <div className=" bg-white p-6 rounded-lg shadow-md w-full mx-auto h-full">
          <p className="text-gray-700">Monday - Friday: 12:00 PM - 10:00 PM</p>
          <p className="text-gray-700">
            Saturday - Sunday: 10:00 AM - 11:00 PM
          </p>
          <p className="mt-4 font-semibold">Call Us: (123) 456-7890</p>
          <button className="mt-4 bg-momo_red text-white px-6 py-3 rounded-lg hover:bg-red-700">
            Reserve Now
          </button>
        </div>
      </ContentWrapper>
    </BodyWrapper>
  );
};

export default Reservation;
