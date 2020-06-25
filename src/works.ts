export interface WorkData {
    id: string;
    type: "design" | "development";
    h2: string;
    h1: string;
    cover_image_url: string;
    imgur_id: string;
    youtube_id: string | undefined;
    github: string | undefined;
}

export const works: WorkData[] = [
    {
        id: "ipass_redesign",
        h2: "介面設計",
        h1: "一卡通 UI Redesign",
        type: "design",
        cover_image_url: "https://i.imgur.com/h1Owkzi.png",
        imgur_id: "yPJ3zK5",
        youtube_id: undefined,
        github: undefined,
    },
    {
        id: "after_movie",
        h2: "影音剪輯",
        h1: "活動紀錄電影",
        type: "design",
        cover_image_url: "https://i.imgur.com/sjKGEuj.jpg",
        imgur_id: "nZzgszQ",
        youtube_id: "awm98eUD6gU",
        github: undefined,
    },
    {
        id: "main-visions",
        h2: "平面設計",
        h1: "活動主視覺橫幅",
        type: "design",
        cover_image_url: "https://i.imgur.com/1rgFf2s.jpg",
        imgur_id: "bKVFRAu",
        youtube_id: undefined,
        github: undefined,
    },
    {
        id: "application-packet",
        h2: "平面設計",
        h1: "大學備審資料設計",
        type: "design",
        cover_image_url: "https://i.imgur.com/BXIbnEE.png",
        imgur_id: "mm0F1oG",
        youtube_id: undefined,
        github: undefined,
    },
    {
        id: "schedule",
        h2: "微信小程序",
        h1: "輕排班",
        type: "development",
        cover_image_url: "https://i.imgur.com/AitULXf.png",
        imgur_id: "rGij8Fs",
        youtube_id: "9qNr4hSvSyc",
        github: "https://github.com/ken20001207/schedule",
    },
    {
        id: "reco",
        h2: "跨平台軟體",
        h1: "Reco 行事曆平台",
        type: "development",
        cover_image_url: "https://i.imgur.com/ZuF4iIH.png",
        imgur_id: "ApiDaBO",
        youtube_id: undefined,
        github: "https://github.com/ken20001207/reco-desktop",
    },
    {
        id: "fetch1688",
        h2: "API 介接",
        h1: "商品資料匯入程式",
        type: "development",
        cover_image_url: "https://i.imgur.com/SkbvAux.png",
        imgur_id: "De3jaJd",
        youtube_id: "b8-oIN55vik",
        github: "https://github.com/ken20001207/fetch1688",
    },
    {
        id: "statistic",
        h2: "桌面應用程式",
        h1: "開獎機率統計軟體",
        type: "development",
        cover_image_url: "https://i.imgur.com/ljbm4iO.png",
        imgur_id: "IepEYhE",
        youtube_id: undefined,
        github: "https://github.com/ken20001207/statistic",
    },
    {
        id: "hoost-manager",
        h2: "廠商後台",
        h1: "Hoost 軟體管理後台",
        type: "development",
        cover_image_url: "https://i.imgur.com/AmONwLk.png",
        imgur_id: "xoNSR4W",
        youtube_id: undefined,
        github: undefined,
    },
    {
        id: "vueshop",
        h2: "電商系統",
        h1: "VueShop 全端電商系統",
        type: "development",
        cover_image_url: "https://i.imgur.com/lUlcmll.png",
        imgur_id: "52uXpCK",
        youtube_id: undefined,
        github: "https://github.com/ken20001207/VueShop",
    },
];
