// C:\Users\mds04\OneDrive\Desktop\Invoice Management Application\invoice-management\src\assets\notFound.jpg
import errorImg from '../assets/notFound.jpg';

const NotFound = () => {

  return (
   <div className="h-auto ">
    <img src={errorImg} alt="Not Found" className="h-96 flex justify-center mx-auto my-14" />
   </div>
  );
};

export default NotFound;
