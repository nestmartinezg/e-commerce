const Card = ({ children }) => {
  return (
    <div className="bg-gray-100 text-black rounded-lg p-3 hover:bg-blue-200">
      {children}
    </div>
  );
};

export default Card;
