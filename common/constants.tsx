const REVIEWS = [
    {
        id: 1,
        name: "ABC",
        date: "12-05-2022",
        star: 5,
        r_title: "Hello World",
        r_para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        r_para2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        id: 2,
        name: "XYZ",
        date: "11-09-2001",
        star: 4,
        r_title: "No comments",
        r_para1: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        r_para2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        id: 3,
        name: "NANA",
        date: "09-11-2009",
        star: 1,
        r_title: "Loved It, seriously",
        r_para1: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        r_para2: "",
    },
];

const SUGGESTED = [
    {
        id: 1,
        img: "https://m.media-amazon.com/images/I/61H7OGtlvpL._UL1500_.jpg",
        title: "Kakashi T-shirt",
        color: "White",
        rate: "$1000",
    },
    {
        id: 2,
        img: "https://static-cse.canva.com/blob/567610/53aa1e25637131.563487362e1b4.ef896c9d.png",
        title: "Black Tee",
        color: "Black",
        rate: "$50",
    },
    {
        id: 3,
        img: "https://thesagacity.s3.ap-south-1.amazonaws.com/media/thrasher_x_gojo_web_vptbqnb.webp",
        title: "Gojo Saturo T-shirt",
        color: "Black",
        rate: "$90",
    },
    {
        id: 4,
        img: "https://outoforder.in/wp-content/uploads/2020/09/alcohol-is-a-solution-womens-t-shirt-image-400x533.jpg",
        title: "Funny Quotes T-shirt",
        color: "Black",
        rate: "$30",
    },
];

const FOOTERLINK = [
    {
        id: 1,
        category: "Products",
        name: [{
            id: 11,
            title: "Bags",
            path: "bags",
        },
        {
            id: 12,
            title: "Tees",
            path: "Tees",
        },
        {
            id: 13,
            title: "Objects",
            path: "Objects",
        },
        {
            id: 14,
            title: "Home Goods",
            path: "Home Goods",
        },
        {
            id: 15,
            title: "Accessories",
            path: "Accessories",
        },],
    },
    {
        id: 2,
        category: "Company",
        name: [{
            id: 21,
            title: "Who we are",
            path: "Who we are",
        },
        {
            id: 22,
            title: "Sustainability",
            path: "Sustainability",
        },
        {
            id: 23,
            title: "Press",
            path: "Press",
        },
        {
            id: 24,
            title: "Careers",
            path: "Careers",
        },
        {
            id: 25,
            title: "Terms & Condition",
            path: "Terms & Condition",
        },
        {
            id: 26,
            title: "Privacy",
            path: "Privacy",
        },],
    },
    {
        id: 3,
        category: "Customer Service",
        class: "w-[30%]",
        name: [{
            id: 31,
            title: "Contact",
            path: "Contact",
        },
        {
            id: 32,
            title: "Shipping",
            path: "Shipping",
        },
        {
            id: 33,
            title: "Returns",
            path: "Returns",
        },
        {
            id: 34,
            title: "Warranty",
            path: "Warranty",
        },
        {
            id: 35,
            title: "Secure Payments",
            path: "Secure Payments",
        },
        {
            id: 36,
            title: "FAQ",
            path: "FAQ",
        },
        {
            id: 37,
            title: "Find a store",
            path: "Find a store",
        },],
    },
];

const ALLSIZES = [{
    id: 1,
    size: "XXS",
},
{
    id: 2,
    size: "XS",
},
{
    id: 3,
    size: "S",
},
{
    id: 4,
    size: "M",
},
{
    id: 5,
    size: "L",
},
{
    id: 6,
    size: "XL",
},]

export { REVIEWS, SUGGESTED, FOOTERLINK, ALLSIZES };
