import { useEffect } from "react";

export const tawkToLoadScripts = async () => {
  // var Tawk_API = Tawk_API || {};

  // var Tawk_LoadStart = new Date();

  await (function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = `https://embed.tawk.to/64b5217194cf5d49dc6411d6/1h5holeeb`;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  })();
};

window.Tawk_API = window.Tawk_API || {};
window.Tawk_LoadStart = new Date();

window.Tawk_API.onLoad = function () {
  //console.log("chat loaded");
  window.Tawk_API.setAttributes(
    {
      ...attritbutesToSet,
    },
    function (error) {
      //console.log("window.Tawk_API errorr",error)
    }
  );
};

window.Tawk_API.onChatMaximized = function () {
  //place your code here
  //console.log("chat onChatMaximized");

  const page_path = location.pathname + location.search;
  window.Tawk_API.addEvent(
    "current-path",
    {
      path: page_path,
    },
    function (error) {
      // console.log("window.Tawk_API errorr",error)
    }
  );
};

const Chat = () => {
  useEffect(() => {
    tawkToLoadScripts();
  }, []);
  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();

  window.Tawk_API.onLoad = function () {
    //console.log("chat loaded");
    window.Tawk_API.setAttributes(
      {
        ...attritbutesToSet,
      },
      function (error) {
        //console.log("window.Tawk_API errorr",error)
      }
    );
  };

  window.Tawk_API.onChatMaximized = function () {
    //place your code here
    //console.log("chat onChatMaximized");

    const page_path = location.pathname + location.search;
    window.Tawk_API.addEvent(
      "current-path",
      {
        path: page_path,
      },
      function (error) {
        // console.log("window.Tawk_API errorr",error)
      }
    );
  };

  return <></>;
};

export default Chat;
