function Status({ name, nameColor, bgColor, icon: Icon, numberOfTasks }) {
  const statusStyle = {
    backgroundColor: bgColor,
    color: nameColor,
  };

  return (
    <div
      className="py-2 px-4 rounded-full inline-block mr-2 my-1"
      style={statusStyle}
    >
      <div className="flex items-center">
        {Icon && <Icon className="mr-1 mb-[2px]" />}
        <p className="text-[14px]">{`${numberOfTasks} ${name}`}</p>
      </div>
    </div>
  );
}

export default Status;
