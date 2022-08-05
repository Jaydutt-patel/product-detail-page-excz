const HEADERLINKS = [{
    id: 1,
    title: "Men",
    path: "/men",
}, {
    id: 2,
    title: "Women",
    path: "/women",
}, {
    id: 3,
    title: "Company",
    path: "/company",
}, {
    id: 4,
    title: "Store",
    path: "/store",
},];

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
        class: "w-2/5 lg:w-1/6",
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

const REVIEWS = {
    reviews: [{
        id: "1",
        author: "ABC",
        date: "12-05-2022",
        rating: 5,
        comment: "Hello World",
    },
    {
        id: "2",
        author: "XYZ",
        date: "11-09-2001",
        rating: 4,
        comment: "No comments",
    },
    {
        id: "3",
        author: "NANA",
        date: "09-11-2009",
        rating: 1,
        comment: "Loved It, seriously",
    },
    ]
};

const SUGGESTED = {
    relatedProduct: [
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
    ]
};

const ALLSIZES = [
    {
        type: "xxs",
        unit: 5
    },
    {
        type: "xs",
        unit: 4
    },
    {
        type: "s",
        unit: 1
    },
    {
        type: "m",
        unit: 2
    },
    {
        type: "l",
        unit: 3
    },
    {
        type: "xl",
        unit: 0
    }
];

const DETAILSSTATIC = {
    availableSize: ALLSIZES,
    title: "Black Tee",
    price: "35",
    rating: 3.9,
    reviewCount: 512,
    availableColors: ["black", "gray", "lime"],
    images: [
        "/../public/nawaz.jpg",
        "/../public/hritik.jpg",
        "/../public/tommy.jpg"
    ],
};

const ALLTYPES = ["shoes", "tshirt"];

export { HEADERLINKS, FOOTERLINK, REVIEWS, SUGGESTED, ALLSIZES, DETAILSSTATIC, ALLTYPES };
