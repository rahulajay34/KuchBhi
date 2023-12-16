import React, { createContext, useState } from "react";

const images = [
  "https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/jrdobqkyqfy3xgawpu4p",
 "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/mwzutnsu2czjn3m4zisw",
 "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/rszbpblrhpf1pcgcxxhn",
 "https://media.istockphoto.com/id/1324883182/photo/closeup-of-moto-paraglider-on-the-field.jpg?s=612x612&w=0&k=20&c=FU_qch1XkxPaQhLh4JT7zT44QpV-TS_8cnwrmr8wK-Y=",
  "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/zmhle5jmyfogdyoihrru",
  "https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/hhlde8sfrriop1mrkqpr",
  "https://media.istockphoto.com/id/1331269301/photo/an-electric-razor-for-cutting-hair-is-lying-on-a-glass-table.jpg?s=612x612&w=0&k=20&c=mATzw6S6o7UOe9jECov9-R6jaK0hzGTR6A4U6jDC6Kg=",
  "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBpbWFnZXMlMjBvZiUyMGhlYWRwaG9uZSUyMGZvciUyMGZ1bGwlMjB3aWR0aHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1578496479531-32e296d5c6e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGQlMjBpbWFnZXMlMjBvZiUyMG5pdHJvcHJlc3MlMjBtYWNoaW5lJTIwZm9yJTIwZnVsbCUyMHdpZHRofGVufDB8fDB8fHww",
  "https://media.istockphoto.com/id/1772668398/photo/woman-laptop-and-headphones-video-conference-with-presentation-or-interview-information-and.jpg?s=612x612&w=0&k=20&c=u9UM6aJQnbvzU_LexOBqaDonAbSZAyBCMkN738XLAo4=",
  "https://images.unsplash.com/photo-1650940925927-f4a30c930a4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhkJTIwaW1hZ2VzJTIwb2YlMjBrZXR0bGUlMjAlMjBmb3IlMjBmdWxsJTIwd2lkdGh8ZW58MHx8MHx8fDA%3D",
"https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.0,f_auto/r1fgozbl1q3n2n1xbxkf",
];

export const AuthSlideContext = createContext();

export default function AuthContextProvider({ children }) {
  const [slide, setSlide] = useState(0);
  const [isAuth,setIsAuth] =useState(false)
  const [userDetails,setUserDetails] =useState({})

  

  return (
    <AuthSlideContext.Provider value={{ slide, setSlide, images,isAuth,setIsAuth,userDetails,setUserDetails }}>
      {children}
    </AuthSlideContext.Provider>
  );
}
