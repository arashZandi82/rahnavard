import { UserRole } from "@/types/enums/generalEnums";
import { DashboardItem_interface } from "@/types/generalTypes";
import { IoMdPerson } from "react-icons/io";
import { FiEdit, FiShoppingCart } from "react-icons/fi";
import { LuBookCopy, LuBookPlus, LuLayoutDashboard } from "react-icons/lu";
import { BsBagHeart } from "react-icons/bs";
import { HiMiniInboxStack } from "react-icons/hi2";
import { HiMiniInboxArrowDown } from "react-icons/hi2";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdLockReset } from "react-icons/md";





export const DashboardItems : DashboardItem_interface[] = [
    { 
        name: "داشبورد", 
        href: "/dashboard" , 
        accessibility: [UserRole.ALL],
        icon : <LuLayoutDashboard/>,
        children : []
    },
    { 
        name: "پروفایل کاربری", 
        href: "/dashboard/profile" , 
        accessibility: [UserRole.ALL],
        icon : <IoMdPerson/>,
        children : [
            { 
                name: "ویرایش پروفایل کاربری", 
                href: "/dashboard/profile/edit" , 
                accessibility: [UserRole.ALL],
                icon : <FiEdit/>,
                children : []
            },
            { 
                name: "آدرس ها", 
                href: "/dashboard/profile/addresses" , 
                accessibility: [UserRole.ALL],
                icon : <FaMapLocationDot/>,
                children : []
            },
            { 
                name: "بازنشانی رمز عبور", 
                href: "/dashboard/profile/reset-password" , 
                accessibility: [UserRole.ALL],
                icon : <MdLockReset />,               
                children : []
            },
        ]
    },
    // { 
    //     name: "My messages", 
    //     href: "/dashboard/my_messages" , 
    //     accessibility: [ UserRole.AGENT, UserRole.AGENTADMIN , UserRole.AGENTOWNER],
    //     icon : <TbMessage />,
    //     children : []
    // },
    { 
        name: "محصولات", 
        href: "/dashboard/products" , 
        accessibility: [UserRole.OWNER ,UserRole.ADMIN ],
        icon : <HiMiniInboxStack />,
        children : [
            { 
                name: "افزودن محصول", 
                href: "/dashboard/products/add" , 
                accessibility: [UserRole.OWNER ,UserRole.ADMIN ],
                icon : <HiMiniInboxArrowDown />,
                children : []
            },
        ]
    },
    { 
        name: "سبد خرید", 
        href: "/dashboard/cart" , 
        accessibility: [ UserRole.ALL],
        icon : <FiShoppingCart />,
        children : []
    },
    { 
        name: "موردعلاقه ها", 
        href: "/dashboard/liked_products" , 
        accessibility: [ UserRole.ALL],
        icon : <BsBagHeart />,
        children : []
    },
    { 
        name: "بلاگ ها", 
        href: "/dashboard/blogs" , 
        accessibility: [UserRole.OWNER , UserRole.ADMIN,  ],
        icon : <LuBookCopy />,
        children : [
            { 
                name: "افزودن بلاگ", 
                href: "/dashboard/blogs/add" , 
                accessibility: [UserRole.OWNER  , UserRole.ADMIN,  ],
                icon : <LuBookPlus />,
                children : []
            },
        ]
    },
    // { 
    //     name: "All messages", 
    //     href: "/dashboard/all_messages" , 
    //     accessibility: [ UserRole.OWNER , UserRole.AGENTOWNER],
    //     icon : <LuMessagesSquare />,
    //     children : []
    // },
    // { 
    //     name: "Forms", 
    //     href: "/dashboard/forms" , 
    //     accessibility: [ UserRole.OWNER , UserRole.AGENTOWNER , UserRole.AGENTADMIN , UserRole.ADMIN],
    //     icon : <FaWpforms />,
    //     children : []
    // },
    // { 
    //     name: "Users", 
    //     href: "/dashboard/users" , 
    //     accessibility: [ UserRole.OWNER ,UserRole.ADMIN , UserRole.AGENTOWNER],
    //     icon : <FaUserFriends />,
    //     children : []
    // },
    // { 
    //     name: "Agents", 
    //     href: "/dashboard/agents" , 
    //     accessibility: [ UserRole.OWNER ,UserRole.ADMIN , UserRole.AGENTOWNER , UserRole.AGENTADMIN],
    //     icon : <FaBuildingUser />,
    //     children : []
    // },
    // { 
    //     name: "Admins", 
    //     href: "/dashboard/admins" , 
    //     accessibility: [ UserRole.OWNER , UserRole.AGENTOWNER],
    //     icon : <RiAdminFill />,
    //     children : []
    // },
    // { 
    //     name: "FAQs", 
    //     href: "/dashboard/FAQs" , 
    //     accessibility: [UserRole.OWNER ,UserRole.AGENTOWNER ],
    //     icon : <FaRegCircleQuestion />,
    //     children : [
    //         { 
    //             name: "Add FAQ", 
    //             href: "/dashboard/FAQs/add" , 
    //             accessibility: [UserRole.OWNER ,UserRole.AGENTOWNER ],
    //             icon : <FaFileCircleQuestion />,
    //             children : []
    //         },
    //     ]
    // },
    // { 
    //     name: "Logs", 
    //     href: "/dashboard/logs" , 
    //     accessibility: [ UserRole.OWNER ,UserRole.ADMIN , UserRole.AGENTADMIN , UserRole.AGENTOWNER],
    //     icon : <RiFootprintFill/>,
    //     children : []
    // },
];
