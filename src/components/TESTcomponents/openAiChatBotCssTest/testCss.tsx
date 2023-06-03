import React from "react";

const ChatbotTest = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="flex flex-col space-y-2">
          <div className="flex items-start">
            <div className="bg-blue-500 text-white p-2 rounded-md">
              <span className="font-bold">John:</span> Hi there!
            </div>
          </div>
          <div className="flex items-end justify-end">
            <div className="bg-gray-200 p-2 rounded-md">
              <span className="font-bold">Jane:</span> Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-gray-200 p-2 rounded-md">
              <span className="font-bold">John:</span> Sed ut perspiciatis unde
              omnis iste natus error sit voluptatem accusantium doloremque
              laudantium.
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-4">
        <input
          className="flex-grow rounded-l-lg border border-gray-300 px-4 py-2"
          placeholder="Type your message"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg px-4 py-2">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatbotTest;
