
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Expences from "views/Expences";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Mech from "views/Mech";
import Electrical from "views/Electrical";
import ENTC from "views/ENTC";
import Civil from "views/Civil";
import Comp from "views/Comp";

var routes = [
  
  {
    path: "/mech",
    name: "Mechnical",
    rtlName: "Mechnical",
    icon: "tim-icons icon-settings-gear-63",
    component: Mech,
    layout: "/admin",
  },
  {
    path: "/comp",
    name: "Computer",
    rtlName: "comp",
    icon: "tim-icons icon-laptop",
    component: Comp,
    layout: "/admin",
  },
  {
    path: "/entc",
    name: "ENTC",
    rtlName: "ENTC",
    icon: "tim-icons icon-settings",
    component: ENTC,
    layout: "/admin",
  },
  {
    path: "/civil",
    name: "Civil",
    rtlName: "Civil",
    icon: "tim-icons icon-istanbul",
    component: Civil,
    layout: "/admin",
  },
  {
    path: "/electrical",
    name: "Electrical",
    rtlName: "ENTC",
    icon: "tim-icons icon-tv-2",
    component: Electrical,
    layout: "/admin",
  },
  
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  },
  
];
export default routes;
