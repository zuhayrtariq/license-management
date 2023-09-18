import { useEffect, useState } from 'react';
import { FaCloud, FaCloudArrowUp, FaUpload } from 'react-icons/fa6';
import FormInput from './formInput';

const Form = () => {
  let imageInputStyle =
    'h-32 cursor-pointer hover:backdrop-brightness-90 flex  items-center  gap-1 text-xl sm:text-2xl rounded-2xl font-bold p-1 px-4 py-4 aspect-square  border-2 border-secondary ';
  const [title, setTitle] = useState('');
  const [brand, setBrand] = useState('');
  const [condition, setCondition] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState(0);
  const [SendAlert, setSendAlert] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className='text-2xl font-medium text-center'>Form</h1>
    </div>
  );
};
export default Form;
