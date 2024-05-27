// Step 1: Create a variable to hold a number of NFTs
let nftCollection = [];

// Step 2: Create the mintNFT function
function mintNFT(book_name, author, description, link) {
    const newNFT = {
        id: 'NFT-' + (nftCollection.length + 1),
        metadata: {
            book_name: book_name,
            author: author,
            description: description,
            link: link
        }
    };
    nftCollection.push(newNFT);
}

// Step 3: Create the listNFTs function
function listNFTs() {
    console.log('Current NFT Collection:');
    nftCollection.forEach(nft => {
        console.log(`ID: ${nft.id}`);
        console.log(`Book Name: ${nft.metadata.book_name}`);
        console.log(`Author: ${nft.metadata.author}`);
        console.log(`Description: ${nft.metadata.description}`);
        console.log(`Link to buy: ${nft.metadata.link}`);
        console.log('--------------------------');
    });
}

// Step 4: Create the getTotalSupply function
function getTotalSupply() {
    return nftCollection.length;
}

// Minting some NFTs
mintNFT('How to be Happy', 'Ruskin Bond', 'This is a book that carries decades of experience on how to be contented.', 'https://amzn.in/d/aNF9qRZ');
mintNFT('Spiritual Anatomy', 'Daaji Kamlesh D. Patel', 'Spiritual Anatomy blends the wisdom of yogic philosophy with practical techniques to unlock your infinite potential.', 'https://amzn.in/d/iGbTyJh');
mintNFT('The Power of Your Subconscious Mind', 'Joseph Murphy', 'This book will act as a guide and help you understand the depth of your subconscious.', 'https://amzn.in/d/jg6YhWr');
mintNFT('THINK AND GROW RICH', 'Napoleon Hill', 'The method by which DESIRE for riches can be transmuted into its financial equivalent, consists of six definite, practical steps', 'https://amzn.in/d/av2qtIp');

// Listing all NFTs
listNFTs();

// Getting the total supply of NFTs
console.log('Total NFTs Minted: ' + getTotalSupply());
