import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-bold text-blue-700 mb-2">{name}</h2>
      <p className="text-gray-600"><strong>Username:</strong> {username}</p>
      <p className="text-gray-600"><strong>Email:</strong> {email}</p>
      <p className="text-gray-600"><strong>Phone:</strong> {phone}</p>
      <p className="text-gray-600"><strong>Website:</strong> {website}</p>
      <p className="text-gray-600"><strong>Company:</strong> {company.name}</p>
      <p className="text-gray-500 text-sm mt-2">
        Address: {address.suite}, {address.street}, {address.city} - {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
