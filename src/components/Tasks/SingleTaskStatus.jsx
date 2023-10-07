function SingleTaskStatus({ icon: Icon, iconColor, value, name, bgColor }) {
  return (
    <div className={`border-2 border-[${bgColor}] bg-[#fcfdff] rounded-lg shadow-md w-[32%] p-4 flex items-center`}>
      <div className={`p-2 rounded-full text-center bg-[${bgColor}] mr-3`}>
        <Icon size={30} color={iconColor} />
      </div>
      <div>
        <p className="font-medium text-[#030307]">{name}</p>
        <p className="text-[14px] text-[#6B6B70]">
          {value} Task{value === 1 ? "" : "s"}
        </p>
      </div>
    </div>
  );
}

export default SingleTaskStatus;
