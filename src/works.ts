export interface WorkData {
    id: string;
    type: "design" | "development";
    h2: string;
    h1: string;
    cover_image_url: string;
    imgur_album: string;
    movie: string | undefined;
    github: string | undefined;
}

export const works: WorkData[] = [
    {
        id: "ipass_redesign",
        h2: "介面設計",
        h1: "一卡通 UI Redesign",
        type: "design",
        cover_image_url: "https://i.imgur.com/h1Owkzi.png",
        imgur_album: "yPJ3zK5",
        movie: undefined,
        github: undefined,
    },
    {
        id: "after_movie",
        h2: "影音剪輯",
        h1: "活動紀錄電影",
        type: "design",
        cover_image_url: "https://i.imgur.com/sjKGEuj.jpg",
        imgur_album: "nZzgszQ",
        movie: "https://www.youtube.com/watch?v=awm98eUD6gU",
        github: undefined,
    },
    {
        id: "main-visions",
        h2: "平面設計",
        h1: "活動主視覺橫幅",
        type: "design",
        cover_image_url: "https://i.imgur.com/1rgFf2s.jpg",
        imgur_album: "bKVFRAu",
        movie: undefined,
        github: undefined,
    },
    {
        id: "application-packet",
        h2: "平面設計",
        h1: "大學備審資料設計",
        type: "design",
        cover_image_url: "https://i.imgur.com/BXIbnEE.png",
        imgur_album: "mm0F1oG",
        movie: undefined,
        github: undefined,
    },
    {
        id: "schedule",
        h2: "微信小程序",
        h1: "輕排班",
        type: "development",
        cover_image_url: "https://i.imgur.com/AitULXf.png",
        imgur_album: "rGij8Fs",
        movie: undefined,
        github: "https://github.com/ken20001207/schedule",
    },
    {
        id: "reco",
        h2: "跨平台軟體",
        h1: "Reco 行事曆平台",
        type: "development",
        cover_image_url: "https://i.imgur.com/ZuF4iIH.png",
        imgur_album: "ApiDaBO",
        movie: undefined,
        github: "https://github.com/ken20001207/reco-desktop",
    },
    {
        id: "fetch1688",
        h2: "API 介接",
        h1: "商品資料匯入程式",
        type: "development",
        cover_image_url: "https://i.imgur.com/SkbvAux.png",
        imgur_album: "De3jaJd",
        movie: "https://drive.google.com/file/d/1ZXdTf7RrRwLstUgcfHoZ3hP6YSsbpYSt/preview",
        github: "https://github.com/ken20001207/fetch1688",
    },
    {
        id: "statistic",
        h2: "桌面應用程式",
        h1: "開獎機率統計軟體",
        type: "development",
        cover_image_url: "https://i.imgur.com/ljbm4iO.png",
        imgur_album: "IepEYhE",
        movie: undefined,
        github: "https://github.com/ken20001207/statistic",
    },
    {
        id: "hoost-manager",
        h2: "廠商後台",
        h1: "Hoost 軟體管理後台",
        type: "development",
        cover_image_url: "https://i.imgur.com/AmONwLk.png",
        imgur_album: "xoNSR4W",
        movie: undefined,
        github: undefined,
    },
    {
        id: "vueshop",
        h2: "電商系統",
        h1: "VueShop 全端電商系統",
        type: "development",
        cover_image_url: "https://i.imgur.com/lUlcmll.png",
        imgur_album: "52uXpCK",
        movie: undefined,
        github: "https://github.com/ken20001207/VueShop",
    },
];
