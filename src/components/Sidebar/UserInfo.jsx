function UserInfo() {
  return (
    <div className="bg-red absolute bottom-0 left-0 right-0 flex items-center p-4">
      <div className="">
        <img
          className=" w-12 h-12 rounded-full object-cover"
          src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </div>
      <div className="pl-3">
        <p className="font-medium text-[#030307]">John Doe</p>
        <p className="font-medium text-[14px] text-[#6B6B70]">
          johndoe@gmail.com
        </p>
      </div>
    </div>
  );
}

export default UserInfo;
